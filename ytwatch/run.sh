#!/usr/bin/env bash
# One watcher round: update code, new videos -> notes -> dashboard. cron runs it every 3 hours.
cd "$(dirname "$0")"
set -a
[ -f .env ] && . ./.env          # GEMINI_API_KEY, YTWATCH_BRANCH (or YTWATCH_MODEL + ANTHROPIC_API_KEY)
set +a
date -u "+== %F %H:%M"

# Self-update from GitHub, so fixes arrive without logging in to the server.
# Files are swapped with mv, which is safe while this script is running.
RAW="https://raw.githubusercontent.com/Limboo369/dragonheir-capture/${YTWATCH_BRANCH:-main}/ytwatch"
for f in ytwatch.py run.sh SUMMARY_PROMPT.md hero-names.json channels.json dashboard.html; do
  curl -fsSL "$RAW/$f" -o ".$f.new" && [ -s ".$f.new" ] && mv ".$f.new" "$f" || rm -f ".$f.new"
done
chmod +x run.sh

export YTWATCH_OUT="${YTWATCH_OUT:-$PWD/out}"
mkdir -p "$YTWATCH_OUT"
if [ -n "$GEMINI_API_KEY" ]; then
  # Gemini watches the videos by URL, so YouTube's block on this server's IP doesn't matter
  venv/bin/python -u ytwatch.py fetch --discover-only
  venv/bin/python -u ytwatch.py gemini
else
  venv/bin/python -u ytwatch.py fetch
  [ -n "$YTWATCH_MODEL" ] && venv/bin/python -u ytwatch.py summarize
fi
venv/bin/python -u ytwatch.py build
