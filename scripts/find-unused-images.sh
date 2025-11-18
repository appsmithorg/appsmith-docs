#!/usr/bin/env bash

set -euo pipefail

usage() {
  cat <<'USAGE'
Usage: find-unused-images.sh [PATH_TO_IMG_DIR] [PATH_TO_DOCS_DIR]

Defaults:
  PATH_TO_IMG_DIR   -> website/static/img
  PATH_TO_DOCS_DIR  -> website/docs

The script walks every image file in the image directory (the "@img" alias)
and reports the ones that are not referenced anywhere inside the docs tree
(the "@docs" alias).
USAGE
}

if [[ "${1:-}" == "-h" || "${1:-}" == "--help" ]]; then
  usage
  exit 0
fi

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
IMG_DIR="${1:-"$ROOT_DIR/website/static/img"}"
DOCS_DIR="${2:-"$ROOT_DIR/website/docs"}"

if [[ ! -d "$IMG_DIR" ]]; then
  echo "Image directory not found: $IMG_DIR" >&2
  exit 1
fi

if [[ ! -d "$DOCS_DIR" ]]; then
  echo "Docs directory not found: $DOCS_DIR" >&2
  exit 1
fi

IMG_DIR_ABS="$(cd "$IMG_DIR" && pwd)"
DOCS_DIR_ABS="$(cd "$DOCS_DIR" && pwd)"

search_pattern_in_docs() {
  local pattern="$1"
  if command -v rg >/dev/null 2>&1; then
    rg -q --fixed-strings --no-messages -- "$pattern" "$DOCS_DIR_ABS"
  else
    grep -R -F -q -- "$pattern" "$DOCS_DIR_ABS"
  fi
}

unused_images=()

while IFS= read -r -d '' image_path; do
  image_name="$(basename "$image_path")"
  relative_path="${image_path#$IMG_DIR_ABS/}"

  if [[ "$relative_path" == "$image_path" ]]; then
    relative_path="$image_name"
  fi

  if ! search_pattern_in_docs "$image_name"; then
    unused_images+=("$relative_path")
  fi
done < <(find "$IMG_DIR_ABS" -type f -print0)

if [[ "${#unused_images[@]}" -eq 0 ]]; then
  echo "All images in $IMG_DIR_ABS are referenced somewhere in $DOCS_DIR_ABS."
else
  echo "Images not referenced in $DOCS_DIR_ABS:"
  printf '%s\n' "${unused_images[@]}"
fi

