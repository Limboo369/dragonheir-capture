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

It installs into `~/ytwatch`, asks for the Gemini API key, adds the cron job, serves the `out` folder (notes only) on port 8790 and runs a first round. Without a Gemini key, `run.sh` falls back to transcripts + Claude (`YTWATCH_MODEL` and `ANTHROPIC_API_KEY` in `~/ytwatch/.env`).

YouTube refuses transcript requests from cloud and datacenter IPs (Darko's Contabo server included, 2026-10-27). So the server runs in Gemini mode: `fetch --discover-only` records new videos from the RSS feeds and `ytwatch.py gemini` gives each video's URL to the Gemini API (YouTube URL input, preview, free; free tier allows 8 hours of video per day), which watches it and returns the note in the same JSON schema. Titles with "live"/"stream" are skipped. The installer asks for the Gemini key once (hidden) and keeps it in `~/ytwatch/.env`.
