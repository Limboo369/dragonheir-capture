# REGAL Bot

Discord bot for the REGAL alliance (Dragonheir: Silent Gods).

- Reminders in #announcements: Alliance Rally, Golden Wing, Sparkle Tournament stages, Alliance GvE; officers change them with `/reminder`
- Events & summon banners board in #events-and-banners: officers use `/event scan` (screenshot, read by Claude) or `/event add`; the bot removes ended ones and warns 24h before; `/events` for everyone. Create the room with `./dc layouts/events.json`
- Welcome post for new players with "Make Recruit" / "Make Member" buttons, plus `/promote` (needs "Server Members Intent" on in the Developer Portal)
- `/hero <name>`: tier, school, element, best gear sets and artifacts (AllClash Season 9 data)
- `/school <school>`: best heroes of a school
- `/ask <question>`: Dragonheir-only answers from Claude, 20 questions per person per day, 500 per server per day

## Install on Linux (Ubuntu/Debian)

```
bash install-linux.sh
```
It asks for the Discord bot token and Anthropic API key, installs Python, and runs the bot as the `regalbot` service.

Logs: `journalctl -u regalbot -f` · Restart: `systemctl restart regalbot` · Settings: `.env` (see `.env.example`).
