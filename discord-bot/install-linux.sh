#!/usr/bin/env bash
# Installs REGAL Bot as a service that starts with the server and restarts if it crashes.
set -e
cd "$(dirname "$0")"
DIR="$(pwd)"
SUDO=""; [ "$(id -u)" -ne 0 ] && SUDO="sudo"

if [ ! -f .env ]; then
  echo
  echo "=== REGAL Bot setup ==="
  read -rsp "Paste the DISCORD BOT TOKEN (hidden) and press Enter: " DTOKEN; echo
  read -rsp "Paste the ANTHROPIC API KEY (hidden) and press Enter: " AKEY; echo
  sed -e "s|^DISCORD_BOT_TOKEN=.*|DISCORD_BOT_TOKEN=$DTOKEN|" \
      -e "s|^ANTHROPIC_API_KEY=.*|ANTHROPIC_API_KEY=$AKEY|" .env.example > .env
  chmod 600 .env
  echo "Saved keys to $DIR/.env"
fi

echo "Installing Python..."
$SUDO apt-get update -qq && $SUDO apt-get install -y -qq python3 python3-venv >/dev/null
python3 -m venv venv
venv/bin/pip install -q --upgrade pip
venv/bin/pip install -q -r requirements.txt

$SUDO tee /etc/systemd/system/regalbot.service >/dev/null <<UNIT
[Unit]
Description=REGAL Discord bot
After=network-online.target
Wants=network-online.target

[Service]
WorkingDirectory=$DIR
ExecStart=$DIR/venv/bin/python $DIR/bot.py
Restart=always
RestartSec=10
User=$(whoami)

[Install]
WantedBy=multi-user.target
UNIT
$SUDO systemctl daemon-reload
$SUDO systemctl enable regalbot >/dev/null 2>&1
$SUDO systemctl restart regalbot
sleep 8
echo
$SUDO journalctl -u regalbot -n 5 --no-pager -o cat
echo
if $SUDO systemctl is-active --quiet regalbot; then
  echo "REGAL Bot is running. It starts by itself after a reboot."
else
  echo "REGAL Bot did not start, send a screenshot of the lines above."
fi
