#!/usr/bin/env bash
# One watcher round: new videos -> transcripts -> summaries -> knowledge file.
# cron runs this every 3 hours (see install-vps.sh).
cd "$(dirname "$0")"
set -a
[ -f ~/regal/discord-bot/.env ] && . ~/regal/discord-bot/.env   # ANTHROPIC_API_KEY (REGAL Bot workspace)
[ -f .env ] && . ./.env                                         # YTWATCH_MODEL, YTWATCH_OUT
set +a
export YTWATCH_OUT="${YTWATCH_OUT:-$PWD/out}"
mkdir -p "$YTWATCH_OUT"
venv/bin/python ytwatch.py fetch
if [ -n "$YTWATCH_MODEL" ] && [ -n "$ANTHROPIC_API_KEY" ]; then
  venv/bin/python ytwatch.py summarize
  venv/bin/python ytwatch.py build
fi
