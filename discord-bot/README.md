# REGAL Bot

Discord bot for the REGAL alliance (Dragonheir: Silent Gods).

- Reminders in #announcements: Alliance Rally every day, Sparkle week on Mondays
- `/hero <name>`: tier, school, element, best gear sets and artifacts (AllClash Season 9 data)
- `/school <school>`: best heroes of a school
- `/ask <question>`: Dragonheir-only answers from Claude, 20 questions per person per day, 500 per server per day

## Install on Linux (Ubuntu/Debian)

```
bash install-linux.sh
```
It asks for the Discord bot token and Anthropic API key, installs Python, and runs the bot as the `regalbot` service.

Logs: `journalctl -u regalbot -f` · Restart: `systemctl restart regalbot` · Settings: `.env` (see `.env.example`).
