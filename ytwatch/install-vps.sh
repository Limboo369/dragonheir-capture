#!/usr/bin/env bash
# Installs the Dragonheir YouTube watcher on a Linux server (Ubuntu/Debian).
# Safe to run again: it updates the code and keeps channels, state, notes and the key.
set -e
BRANCH="${YTWATCH_BRANCH:-main}"
RAW="https://raw.githubusercontent.com/Limboo369/dragonheir-capture/$BRANCH/ytwatch"
DIR=~/ytwatch
mkdir -p "$DIR/out" && cd "$DIR"
for f in ytwatch.py run.sh SUMMARY_PROMPT.md hero-names.json; do curl -fsSL "$RAW/$f" -o "$f"; done
[ -f channels.json ] || curl -fsSL "$RAW/channels.json" -o channels.json
chmod +x run.sh

python3 -c "import venv, ensurepip" 2>/dev/null || { apt-get update -qq && apt-get install -y -qq python3 python3-venv >/dev/null; }
[ -x venv/bin/python ] || python3 -m venv venv
venv/bin/pip install -q --upgrade pip youtube-transcript-api anthropic google-genai

if ! grep -q '^GEMINI_API_KEY=.' .env 2>/dev/null; then
  read -rsp "Paste the GEMINI API KEY (hidden) and press Enter: " K < /dev/tty; echo
  touch .env && chmod 600 .env
  sed -i '/^GEMINI_API_KEY=/d' .env && echo "GEMINI_API_KEY=$K" >> .env
fi

# Read-only web page with the notes (not the videos) on port 8790
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
echo "First run (a few minutes)..."
./run.sh 2>&1 | tee -a run.log | tail -12
echo "GOTOVO"
