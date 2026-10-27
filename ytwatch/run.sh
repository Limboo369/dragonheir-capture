#!/usr/bin/env bash
# One watcher round: new videos -> notes -> knowledge file. cron runs it every 3 hours.
cd "$(dirname "$0")"
set -a
[ -f .env ] && . ./.env          # GEMINI_API_KEY, or YTWATCH_MODEL + ANTHROPIC_API_KEY
set +a
export YTWATCH_OUT="${YTWATCH_OUT:-$PWD/out}"
mkdir -p "$YTWATCH_OUT"
date -u "+== %F %H:%M"
if [ -n "$GEMINI_API_KEY" ]; then
  # Gemini watches the videos by URL, so YouTube's block on this server's IP doesn't matter
  venv/bin/python -u ytwatch.py fetch --discover-only
  venv/bin/python -u ytwatch.py gemini
else
  venv/bin/python -u ytwatch.py fetch
  [ -n "$YTWATCH_MODEL" ] && venv/bin/python -u ytwatch.py summarize
fi
venv/bin/python -u ytwatch.py build
