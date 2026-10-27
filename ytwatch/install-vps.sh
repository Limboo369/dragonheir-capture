#!/usr/bin/env bash
# Installs the Dragonheir YouTube watcher on a Linux server (Ubuntu/Debian).
# Safe to run again: it updates the code and keeps channels, state and summaries.
set -e
BRANCH="${YTWATCH_BRANCH:-main}"
RAW="https://raw.githubusercontent.com/Limboo369/dragonheir-capture/$BRANCH/ytwatch"
DIR=~/ytwatch
mkdir -p "$DIR/out" && cd "$DIR"
for f in ytwatch.py run.sh SUMMARY_PROMPT.md hero-names.json; do curl -fsSL "$RAW/$f" -o "$f"; done
[ -f channels.json ] || curl -fsSL "$RAW/channels.json" -o channels.json
chmod +x run.sh

command -v python3 >/dev/null && python3 -c "import venv" 2>/dev/null || { apt-get update -qq && apt-get install -y -qq python3 python3-venv >/dev/null; }
[ -d venv ] || python3 -m venv venv
venv/bin/pip install -q --upgrade pip youtube-transcript-api anthropic

echo "Testing YouTube from this server..."
venv/bin/python - <<'PY' && OK=1 || OK=0
import sys, urllib.request, re
from youtube_transcript_api import YouTubeTranscriptApi
feed = urllib.request.urlopen("https://www.youtube.com/feeds/videos.xml?channel_id=UCNas7BnuOIjDEzY1D53kb1w", timeout=30).read().decode()
vid = re.findall(r"<yt:videoId>([^<]+)</yt:videoId>", feed)[2]
try:
    t = YouTubeTranscriptApi().fetch(vid)
except Exception as e:
    print("YOUTUBE BLOCKED:", type(e).__name__); sys.exit(1)
print("YOUTUBE OK:", len(t.snippets), "lines from video", vid)
PY

# Read-only web page with the summaries (not the transcripts) on port 8790
tee /etc/systemd/system/ytwatch-web.service >/dev/null <<UNIT
[Unit]
Description=Dragonheir YouTube watcher output
After=network-online.target
[Service]
ExecStart=/usr/bin/python3 -m http.server 8790 --directory $DIR/out
Restart=always
[Install]
WantedBy=multi-user.target
UNIT
systemctl daemon-reload && systemctl enable --now ytwatch-web >/dev/null 2>&1

( crontab -l 2>/dev/null | grep -v ytwatch/run.sh; echo "17 */3 * * * $DIR/run.sh >> $DIR/run.log 2>&1" ) | crontab -
if [ "$OK" = 1 ]; then
  ./run.sh 2>&1 | tail -3
  echo "GOTOVO - YouTube radi"
else
  echo "GOTOVO - ali YouTube blokira ovaj server"
fi
