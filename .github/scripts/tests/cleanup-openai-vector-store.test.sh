#!/usr/bin/env bash
set -euo pipefail

readonly TEST_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
readonly CLEANUP_SCRIPT="$TEST_DIR/../cleanup-openai-vector-store.sh"
readonly MOCK_BIN_DIR="$TEST_DIR/fixtures"
readonly TEST_ROOT="$(mktemp -d)"

trap 'rm -rf "$TEST_ROOT"' EXIT

run_cleanup() {
  local scenario="$1"
  local state_dir="$TEST_ROOT/$scenario"
  local max_list_pages="1000"

  if [ "$scenario" = "page-limit" ]; then
    max_list_pages="2"
  fi

  mkdir -p "$state_dir"
  env \
    PATH="$MOCK_BIN_DIR:$PATH" \
    MOCK_SCENARIO="$scenario" \
    MOCK_STATE_DIR="$state_dir" \
    OPENAI_API_KEY="test-key" \
    VECTOR_STORE_ID="test-vector-store" \
    FILE_ID="file-current" \
    VECTOR_STORE_MAX_LIST_PAGES="$max_list_pages" \
    VECTOR_STORE_VERIFY_RETRY_DELAY_SECONDS="0" \
    bash "$CLEANUP_SCRIPT"
}

assert_contains() {
  local output="$1"
  local expected="$2"

  if [[ "$output" != *"$expected"* ]]; then
    echo "Expected output to contain: $expected" >&2
    echo "$output" >&2
    exit 1
  fi
}

assert_file_exists() {
  local path="$1"

  if [ ! -f "$path" ]; then
    echo "Expected file to exist: $path" >&2
    exit 1
  fi
}

assert_file_missing() {
  local path="$1"

  if [ -e "$path" ]; then
    echo "Expected file to be absent: $path" >&2
    exit 1
  fi
}

expect_success() {
  local scenario="$1"
  local output

  if ! output=$(run_cleanup "$scenario" 2>&1); then
    echo "Expected scenario '$scenario' to succeed" >&2
    echo "$output" >&2
    exit 1
  fi
  printf '%s' "$output"
}

expect_failure() {
  local scenario="$1"
  local expected="$2"
  local output

  if output=$(run_cleanup "$scenario" 2>&1); then
    echo "Expected scenario '$scenario' to fail" >&2
    echo "$output" >&2
    exit 1
  fi
  assert_contains "$output" "$expected"
}

success_output=$(expect_success success)
assert_contains "$success_output" "Verification attempt 1"
assert_contains "$success_output" "Vector store contains only the current workflow-managed file and preserved non-workflow files"
assert_file_exists "$TEST_ROOT/success/detached-file-tagged-old"
assert_file_exists "$TEST_ROOT/success/detached-file-renamed-old"
assert_file_exists "$TEST_ROOT/success/deleted-file-tagged-old"
assert_file_exists "$TEST_ROOT/success/deleted-file-renamed-old"
assert_file_missing "$TEST_ROOT/success/deleted-file-untagged-appsmith-docs"
assert_file_missing "$TEST_ROOT/success/deleted-file-unrelated"
echo "PASS: paginated cleanup preserves unmanaged files and tolerates delayed removal"

no_stale_output=$(expect_success no-stale)
assert_contains "$no_stale_output" "No stale workflow-managed files found"
echo "PASS: no-op cleanup"

expect_failure delete-failure "Failed to delete stale file file-tagged-old"
echo "PASS: unsuccessful deletion is rejected"

expect_failure detach-failure "Failed to detach stale file file-tagged-old"
assert_file_missing "$TEST_ROOT/detach-failure/deleted-file-tagged-old"
echo "PASS: unsuccessful detach stops before file deletion"

expect_failure repeated-cursor "repeated pagination cursor repeated-cursor"
echo "PASS: repeated pagination cursor is rejected"

expect_failure page-limit "exceeded 2 pages"
echo "PASS: pagination page limit is enforced"

expect_failure invalid-list "Invalid vector store file discovery response"
echo "PASS: malformed list response is rejected"

echo "7 cleanup tests passed"
