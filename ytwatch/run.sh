#!/usr/bin/env bash
# Dragonheir Watch round.
#   run.sh               update code, check channels, let Gemini watch new videos, rebuild the dashboard
#   run.sh --update-only update code and rebuild the dashboard
# systemd timers (install-vps.sh): videos every hour, code updates every 10 minutes.
cd "$(dirname "$0")"
DIR="$PWD"
set -a
[ -f .env ] && . ./.env          # GEMINI_API_KEY, YTWATCH_BRANCH (or YTWATCH_MODEL + ANTHROPIC_API_KEY)
set +a

if [ "$1" != "--updated" ]; then
  # Self-update from GitHub, so fixes arrive without logging in to the server.
  # Files are swapped with mv (safe while this script runs), then the new run.sh takes over.
  RAW="https://raw.githubusercontent.com/Limboo369/dragonheir-capture/${YTWATCH_BRANCH:-main}/ytwatch"
  for f in ytwatch.py run.sh SUMMARY_PROMPT.md hero-names.json channels.json dashboard.html backlog.json; do
    curl -fsSL "$RAW/$f?$(date +%s)" -o ".$f.new" && [ -s ".$f.new" ] && mv ".$f.new" "$f" || rm -f ".$f.new"
  done
  chmod +x run.sh
  exec ./run.sh --updated "$@"
fi
shift

export YTWATCH_OUT="${YTWATCH_OUT:-$PWD/out}"
mkdir -p "$YTWATCH_OUT/data"
MODE="${1:-full}"
# Last attempt and its exit code, shown on the dashboard's Status tab
trap 'rc=$?; printf "{\"time\": \"%s\", \"mode\": \"%s\", \"exit\": %d}\n" "$(date -u +%FT%TZ)" "$MODE" "$rc" > "$YTWATCH_OUT/data/last_$( [ "$MODE" = full ] && echo run || echo update ).json"' EXIT
if [ "$1" = "--update-only" ]; then
  venv/bin/python -u ytwatch.py build >/dev/null
  exit 0
fi

venv/bin/python -c "import yt_dlp" 2>/dev/null || venv/bin/pip install -q yt-dlp
exec 9>.run.lock
flock -n 9 || { echo "another round is still running"; exit 0; }
date -u "+== %F %H:%M"
rc=0
step() { "$@" || { rc=$?; echo "! step failed ($rc): $*"; }; }
if [ -n "$GEMINI_API_KEY" ]; then
  # Gemini watches the videos by URL, so YouTube's block on this server's IP doesn't matter
  step venv/bin/python -u ytwatch.py fetch --discover-only
  step venv/bin/python -u ytwatch.py backlog
  step venv/bin/python -u ytwatch.py gemini
else
  step venv/bin/python -u ytwatch.py fetch
  [ -n "$YTWATCH_MODEL" ] && step venv/bin/python -u ytwatch.py summarize
fi
step venv/bin/python -u ytwatch.py build
exit $rc
