#!/usr/bin/env bash
# Installs the Dragonheir YouTube watcher on a Linux server (Ubuntu/Debian).
# Safe to run again: it updates the code and keeps channels, state, notes and the key.
set -e
BRANCH="${YTWATCH_BRANCH:-main}"
RAW="https://raw.githubusercontent.com/Limboo369/dragonheir-capture/$BRANCH/ytwatch"
DIR=~/ytwatch
mkdir -p "$DIR/out" && cd "$DIR"
for f in ytwatch.py run.sh SUMMARY_PROMPT.md hero-names.json dashboard.html backlog.json publish.sh web.py; do curl -fsSL "$RAW/$f" -o "$f"; done
[ -f channels.json ] || curl -fsSL "$RAW/channels.json" -o channels.json
chmod +x run.sh

python3 -c "import venv, ensurepip" 2>/dev/null || { apt-get update -qq && apt-get install -y -qq python3 python3-venv >/dev/null; }
[ -x venv/bin/python ] || python3 -m venv venv
venv/bin/pip install -q --upgrade pip youtube-transcript-api anthropic google-genai yt-dlp

if ! grep -q '^GEMINI_API_KEY=.' .env 2>/dev/null; then
  read -rsp "Paste the GEMINI API KEY (hidden) and press Enter: " K < /dev/tty; echo
  touch .env && chmod 600 .env
  sed -i '/^GEMINI_API_KEY=/d' .env && echo "GEMINI_API_KEY=$K" >> .env
fi
touch .env && chmod 600 .env
sed -i '/^YTWATCH_BRANCH=/d' .env && echo "YTWATCH_BRANCH=$BRANCH" >> .env

# Read-only web page with the notes (not the videos) on port 8790
tee /etc/systemd/system/ytwatch-web.service >/dev/null <<UNIT
[Unit]
Description=Dragonheir YouTube watcher output
After=network-online.target
[Service]
WorkingDirectory=$DIR
ExecStart=/bin/bash -c '/usr/bin/python3 $DIR/web.py 8790 || exec /usr/bin/python3 -m http.server 8790 --directory $DIR/out'
RestartSec=5
Restart=always
[Install]
WantedBy=multi-user.target
UNIT
systemctl daemon-reload && systemctl enable ytwatch-web >/dev/null 2>&1 && systemctl restart ytwatch-web && md5sum web.py | cut -c1-32 > .web.sum
command -v ufw >/dev/null && ufw status | grep -q "Status: active" && ufw allow 8790/tcp >/dev/null

# Schedule with systemd timers (cron did not fire on this server). Old cron lines are removed.
( crontab -l 2>/dev/null | grep -v ytwatch/run.sh ) | crontab - 2>/dev/null || true
for name in run update; do
  arg=""; [ $name = update ] && arg="--update-only"
  tee /etc/systemd/system/ytwatch-$name.service >/dev/null <<UNIT
[Unit]
Description=Dragonheir Watch ($name)
After=network-online.target
[Service]
Type=oneshot
ExecStart=/bin/bash -c '$DIR/run.sh $arg >> $DIR/run.log 2>&1'
UNIT
done
tee /etc/systemd/system/ytwatch-run.timer >/dev/null <<UNIT
[Unit]
Description=Dragonheir Watch: new videos every hour
[Timer]
OnCalendar=*-*-* *:17:00
Persistent=true
[Install]
WantedBy=timers.target
UNIT
tee /etc/systemd/system/ytwatch-update.timer >/dev/null <<UNIT
[Unit]
Description=Dragonheir Watch: code update and dashboard rebuild every 10 minutes
[Timer]
OnBootSec=2min
OnUnitActiveSec=10min
[Install]
WantedBy=timers.target
UNIT
systemctl daemon-reload
systemctl enable --now ytwatch-run.timer ytwatch-update.timer >/dev/null 2>&1

echo "First run (a few minutes)..."
systemctl start ytwatch-run.service || true
tail -n 15 run.log
echo
systemctl list-timers 'ytwatch*' --no-pager | head -4
echo "cron service: $(systemctl is-active cron 2>/dev/null || echo missing)"
echo "GOTOVO"
