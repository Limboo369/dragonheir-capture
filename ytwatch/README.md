# YouTube watcher

Follows a list of Dragonheir YouTube channels. For every new video it downloads the transcript, has Claude turn it into a structured note (heroes and verdicts, teams, meta changes, tips, season and whether it applies to a Season 1 server) and rebuilds `youtube-knowledge.md` plus `data/youtube.json`.

- `channels.json`: the channels to follow. A video is taken when its title or description contains "dragonheir" (`keywords` per channel changes that).
- `ytwatch.py fetch`: reads each channel's RSS feed and downloads new transcripts. On a channel's first run it takes the 3 latest videos (`--backfill`).
- `ytwatch.py summarize`: sends pending transcripts to Claude (`YTWATCH_MODEL`, `ANTHROPIC_API_KEY`) with `SUMMARY_PROMPT.md` and a JSON schema.
- `ytwatch.py build`: writes the knowledge file. `ytwatch.py pending` lists transcripts waiting for a summary.
- `run.sh`: one round (fetch, then summarize and build when a model is set). cron runs it every 3 hours.

## Install on the server

```
curl -fsSL https://raw.githubusercontent.com/Limboo369/dragonheir-capture/main/ytwatch/install-vps.sh | bash
```

It installs into `~/ytwatch`, tests whether YouTube serves transcripts to the server, adds the cron job and serves the `out` folder (summaries only) on port 8790. Summaries start once `YTWATCH_MODEL=...` is written to `~/ytwatch/.env`; the API key is read from the REGAL bot's `.env`.

YouTube refuses transcript requests from many cloud and datacenter IPs. The installer prints `YOUTUBE BLOCKED` when that happens.
