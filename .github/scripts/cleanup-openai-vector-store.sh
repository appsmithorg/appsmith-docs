#!/usr/bin/env bash
set -euo pipefail

: "${OPENAI_API_KEY:?OPENAI_API_KEY is required}"
: "${VECTOR_STORE_ID:?VECTOR_STORE_ID is required}"
: "${FILE_ID:?FILE_ID is required}"

readonly OPENAI_API_BASE_URL="${OPENAI_API_BASE_URL:-https://api.openai.com/v1}"
readonly MANAGED_BY_VALUE="generate-file-for-ai"
readonly MAX_LIST_PAGES="${VECTOR_STORE_MAX_LIST_PAGES:-1000}"
readonly VERIFY_MAX_ATTEMPTS="${VECTOR_STORE_VERIFY_MAX_ATTEMPTS:-6}"
readonly VERIFY_RETRY_DELAY_SECONDS="${VECTOR_STORE_VERIFY_RETRY_DELAY_SECONDS:-5}"
readonly CURL_CONNECT_TIMEOUT_SECONDS="${OPENAI_CURL_CONNECT_TIMEOUT_SECONDS:-10}"
readonly CURL_MAX_TIME_SECONDS="${OPENAI_CURL_MAX_TIME_SECONDS:-60}"

if ! [[ "$MAX_LIST_PAGES" =~ ^[1-9][0-9]*$ ]]; then
  echo "ERROR: VECTOR_STORE_MAX_LIST_PAGES must be a positive integer"
  exit 1
fi

if ! [[ "$VERIFY_MAX_ATTEMPTS" =~ ^[1-9][0-9]*$ ]]; then
  echo "ERROR: VECTOR_STORE_VERIFY_MAX_ATTEMPTS must be a positive integer"
  exit 1
fi

if ! [[ "$VERIFY_RETRY_DELAY_SECONDS" =~ ^[0-9]+$ ]]; then
  echo "ERROR: VECTOR_STORE_VERIFY_RETRY_DELAY_SECONDS must be a non-negative integer"
  exit 1
fi

readonly -a CURL_ARGS=(
  --fail
  --silent
  --show-error
  --http1.1
  --connect-timeout "$CURL_CONNECT_TIMEOUT_SECONDS"
  --max-time "$CURL_MAX_TIME_SECONDS"
)

declare -a stale_file_ids=()

array_contains() {
  local needle="$1"
  local item
  shift

  for item in "$@"; do
    if [ "$item" = "$needle" ]; then
      return 0
    fi
  done
  return 1
}

api_get() {
  curl "${CURL_ARGS[@]}" \
    -H "Authorization: Bearer $OPENAI_API_KEY" \
    "$1"
}

api_delete() {
  curl "${CURL_ARGS[@]}" -X DELETE \
    -H "Authorization: Bearer $OPENAI_API_KEY" \
    "$1"
}

validate_list_response() {
  local response="$1"
  local context="$2"

  if ! jq -e '
    .object == "list" and
    (.data | type == "array") and
    (.data | all(
      .[];
      (.id | type == "string") and
      (.id | length > 0) and
      ((.attributes == null) or (.attributes | type == "object")) and
      ((.attributes.managed_by == null) or (.attributes.managed_by | type == "string"))
    )) and
    (.has_more | type == "boolean") and
    ((.has_more == false) or ((.last_id | type == "string") and (.last_id | length > 0)))
  ' > /dev/null <<< "$response"; then
    echo "ERROR: Invalid vector store $context response"
    echo "$response"
    exit 1
  fi
}

list_vector_store_pages() {
  local callback="$1"
  local context="$2"
  local after=""
  local encoded_after
  local has_more
  local list_response
  local list_url
  local next_after
  local page_count=0
  local -a seen_cursors=()

  while true; do
    page_count=$((page_count + 1))
    if [ "$page_count" -gt "$MAX_LIST_PAGES" ]; then
      echo "ERROR: Vector store $context exceeded $MAX_LIST_PAGES pages"
      exit 1
    fi

    list_url="$OPENAI_API_BASE_URL/vector_stores/$VECTOR_STORE_ID/files?limit=100"
    if [ -n "$after" ]; then
      encoded_after=$(jq -rn --arg value "$after" '$value | @uri')
      list_url="$list_url&after=$encoded_after"
    fi

    if ! list_response=$(api_get "$list_url"); then
      echo "ERROR: Failed to list vector store files during $context"
      exit 1
    fi
    validate_list_response "$list_response" "$context"
    "$callback" "$list_response"

    has_more=$(jq -r '.has_more' <<< "$list_response")
    if [ "$has_more" = "false" ]; then
      return
    fi

    next_after=$(jq -r '.last_id' <<< "$list_response")
    if array_contains "$next_after" ${seen_cursors[@]+"${seen_cursors[@]}"}; then
      echo "ERROR: Vector store $context repeated pagination cursor $next_after"
      exit 1
    fi

    seen_cursors+=("$next_after")
    after="$next_after"
  done
}

managed_by_for_file() {
  local response="$1"
  local file_id="$2"

  jq -r --arg file_id "$file_id" '
    .data[] | select(.id == $file_id) | .attributes.managed_by // empty
  ' <<< "$response"
}

add_stale_file() {
  local file_id="$1"

  if array_contains "$file_id" ${stale_file_ids[@]+"${stale_file_ids[@]}"}; then
    return
  fi

  stale_file_ids+=("$file_id")
}

classify_stale_files() {
  local list_response="$1"
  local file_id
  local managed_by

  while IFS= read -r file_id; do
    if [ "$file_id" = "$FILE_ID" ]; then
      continue
    fi

    managed_by=$(managed_by_for_file "$list_response" "$file_id")
    if [ "$managed_by" = "$MANAGED_BY_VALUE" ]; then
      echo "Found workflow-managed stale file: $file_id"
      add_stale_file "$file_id"
    elif [ -n "$managed_by" ]; then
      echo "Preserving file $file_id managed by $managed_by"
    else
      echo "Preserving unmanaged file $file_id"
    fi
  done < <(jq -r '.data[].id' <<< "$list_response")
}

echo "Finding stale workflow-managed files..."
list_vector_store_pages classify_stale_files "file discovery"

if [ "${#stale_file_ids[@]}" -eq 0 ]; then
  echo "No stale workflow-managed files found"
fi

for stale_file_id in ${stale_file_ids[@]+"${stale_file_ids[@]}"}; do
  echo "Deleting stale file $stale_file_id..."
  if ! delete_response=$(api_delete "$OPENAI_API_BASE_URL/files/$stale_file_id"); then
    echo "ERROR: Request to delete stale file $stale_file_id failed"
    exit 1
  fi

  if ! jq -e --arg file_id "$stale_file_id" '
    .id == $file_id and .deleted == true
  ' > /dev/null <<< "$delete_response"; then
    echo "ERROR: Failed to delete stale file $stale_file_id"
    echo "$delete_response"
    exit 1
  fi

  echo "Deleted stale file $stale_file_id"
done

declare -a unexpected_file_ids=()
current_file_found=false

verify_vector_store_page() {
  local list_response="$1"
  local file_id
  local managed_by

  while IFS= read -r file_id; do
    managed_by=$(managed_by_for_file "$list_response" "$file_id")

    if [ "$file_id" = "$FILE_ID" ]; then
      if [ "$managed_by" != "$MANAGED_BY_VALUE" ]; then
        echo "ERROR: Current file $FILE_ID is missing its ownership attribute"
        exit 1
      fi
      current_file_found=true
      continue
    fi

    if array_contains "$file_id" ${stale_file_ids[@]+"${stale_file_ids[@]}"}; then
      unexpected_file_ids+=("$file_id")
      continue
    fi

    if [ "$managed_by" = "$MANAGED_BY_VALUE" ]; then
      unexpected_file_ids+=("$file_id")
    fi
  done < <(jq -r '.data[].id' <<< "$list_response")
}

echo "Verifying vector store contents..."
for ((attempt = 1; attempt <= VERIFY_MAX_ATTEMPTS; attempt++)); do
  unexpected_file_ids=()
  current_file_found=false

  list_vector_store_pages verify_vector_store_page "verification"

  if [ "$current_file_found" = "true" ] && [ "${#unexpected_file_ids[@]}" -eq 0 ]; then
    echo "Vector store contains only the current workflow-managed file and preserved non-workflow files"
    exit 0
  fi

  echo "Verification attempt $attempt: current_file_found=$current_file_found, stale_files=${unexpected_file_ids[*]:-none}"
  if [ "$attempt" -lt "$VERIFY_MAX_ATTEMPTS" ]; then
    sleep "$VERIFY_RETRY_DELAY_SECONDS"
  fi
done

echo "ERROR: Vector store still contains stale workflow-managed files"
exit 1
