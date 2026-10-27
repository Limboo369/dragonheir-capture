#!/usr/bin/env bash
# Dragonheir Watch round.
#   run.sh               update code, check channels, let Gemini watch new videos, rebuild the dashboard
#   run.sh --update-only update code and rebuild the dashboard (cron: every 10 minutes)
# cron: videos every hour, code updates every 10 minutes (set below).
cd "$(dirname "$0")"
DIR="$PWD"
set -a
[ -f .env ] && . ./.env          # GEMINI_API_KEY, YTWATCH_BRANCH (or YTWATCH_MODEL + ANTHROPIC_API_KEY)
set +a

if [ "$1" != "--updated" ]; then
  # Self-update from GitHub, so fixes arrive without logging in to the server.
  # Files are swapped with mv (safe while this script runs), then the new run.sh takes over.
  RAW="https://raw.githubusercontent.com/Limboo369/dragonheir-capture/${YTWATCH_BRANCH:-main}/ytwatch"
  for f in ytwatch.py run.sh SUMMARY_PROMPT.md hero-names.json channels.json dashboard.html; do
    curl -fsSL "$RAW/$f?$(date +%s)" -o ".$f.new" && [ -s ".$f.new" ] && mv ".$f.new" "$f" || rm -f ".$f.new"
  done
  chmod +x run.sh
  exec ./run.sh --updated "$@"
fi
shift

WANT="*/10 * * * * $DIR/run.sh --update-only >/dev/null 2>&1
17 * * * * $DIR/run.sh >> $DIR/run.log 2>&1"
if [ "$(crontab -l 2>/dev/null | grep ytwatch/run.sh)" != "$WANT" ]; then
  ( crontab -l 2>/dev/null | grep -v ytwatch/run.sh; echo "$WANT" ) | crontab -
fi

export YTWATCH_OUT="${YTWATCH_OUT:-$PWD/out}"
mkdir -p "$YTWATCH_OUT"
if [ "$1" = "--update-only" ]; then
  venv/bin/python -u ytwatch.py build >/dev/null
  exit 0
fi

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
