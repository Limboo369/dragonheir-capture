"""YouTube watcher for Dragonheir channels.

Polls channel RSS feeds, downloads transcripts of new videos, stores
Claude-written summaries and builds a knowledge file from them.

  python ytwatch.py fetch [--backfill N]   new videos -> transcripts/
  python ytwatch.py pending                videos waiting for a summary
  python ytwatch.py add-summary FILE.json  store one summary (validated)
  python ytwatch.py build                  rebuild youtube-knowledge.md + JSON

Summaries are written by Claude (the scheduled session, or summarize.py with
an API key) following SUMMARY_PROMPT.md.
"""
import argparse
import os
import datetime as dt
import json
import re
import sys
import time
import urllib.request
import xml.etree.ElementTree as ET
from pathlib import Path

ROOT = Path(__file__).resolve().parent
CHANNELS = ROOT / "channels.json"
STATE = ROOT / "state.json"
TRANSCRIPTS = ROOT / "transcripts"
NOTES = ROOT / "notes"
KNOWLEDGE = Path(os.environ.get("YTWATCH_OUT", ROOT.parent / "knowledge"))
HERO_NAMES = ROOT / "hero-names.json"
OUT_MD = KNOWLEDGE / "youtube-knowledge.md"
OUT_JSON = KNOWLEDGE / "data" / "youtube.json"

NS = {"a": "http://www.w3.org/2005/Atom", "yt": "http://www.youtube.com/xml/schemas/2015",
      "media": "http://search.yahoo.com/mrss/"}
MAX_TRIES = 6          # transcript attempts (one per run) before giving up
MIN_WORDS = 40         # shorter transcripts are not worth a summary


def load(path, default):
    try:
        return json.loads(path.read_text(encoding="utf-8"))
    except FileNotFoundError:
        return default


def save(path, data):
    tmp = path.with_suffix(".tmp")
    tmp.write_text(json.dumps(data, ensure_ascii=False, indent=1), encoding="utf-8")
    tmp.replace(path)


def now():
    return dt.datetime.now(dt.timezone.utc).strftime("%Y-%m-%dT%H:%MZ")


# ---------- fetch ----------

def read_feed(channel_id):
    url = f"https://www.youtube.com/feeds/videos.xml?channel_id={channel_id}"
    req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"})
    with urllib.request.urlopen(req, timeout=30) as r:
        root = ET.fromstring(r.read())
    out = []
    for e in root.findall("a:entry", NS):
        vid = e.findtext("yt:videoId", namespaces=NS)
        link = e.find("a:link", NS).get("href")
        out.append({
            "id": vid,
            "title": e.findtext("a:title", namespaces=NS),
            "published": e.findtext("a:published", namespaces=NS),
            "url": link,
            "short": "/shorts/" in link,
            "description": e.findtext("media:group/media:description", namespaces=NS) or "",
        })
    return out


def wanted(video, ch):
    kw = [k.lower() for k in ch.get("keywords", ["dragonheir"])]
    text = (video["title"] + " " + video["description"]).lower()
    if kw and not any(k in text for k in kw):
        return False
    if video["short"] and not ch.get("shorts", True):
        return False
    return True


def get_transcript(video_id, langs):
    from youtube_transcript_api import YouTubeTranscriptApi
    api = YouTubeTranscriptApi()
    tl = api.list(video_id)
    try:
        t = tl.find_transcript(langs)
    except Exception:
        t = next(iter(tl))
        if t.is_translatable and not t.language_code.startswith("en"):
            t = t.translate("en")
    snips = t.fetch()
    text = " ".join(s.text.replace("\n", " ") for s in snips)
    text = re.sub(r"\[(music|applause|♪+)\]", " ", text, flags=re.I)
    text = re.sub(r"\s+", " ", text).strip()
    return {"language": t.language_code, "generated": t.is_generated, "text": text,
            "duration_s": int(snips[-1].start + snips[-1].duration) if snips else 0}


def cmd_fetch(args):
    channels = load(CHANNELS, [])
    state = load(STATE, {"videos": {}, "channels": {}})
    TRANSCRIPTS.mkdir(exist_ok=True)
    got = failed = 0
    for ch in channels:
        if not ch.get("enabled", True):
            continue
        try:
            feed = read_feed(ch["id"])
        except Exception as e:
            print(f"! feed {ch['name']}: {e}")
            continue
        first_run = ch["id"] not in state["channels"]
        state["channels"][ch["id"]] = {"name": ch["name"], "checked": now()}
        relevant = [v for v in feed if wanted(v, ch)]
        for i, v in enumerate(relevant):
            rec = state["videos"].get(v["id"])
            if rec is None:
                if first_run and i >= args.backfill:
                    state["videos"][v["id"]] = {"status": "baseline", "title": v["title"]}
                    continue
                rec = state["videos"][v["id"]] = {
                    "status": "new", "tries": 0, "channel": ch["name"], "channel_id": ch["id"],
                    "title": v["title"], "published": v["published"], "url": v["url"],
                    "short": v["short"], "found": now()}
            if rec["status"] not in ("new", "retry"):
                continue
            rec["tries"] = rec.get("tries", 0) + 1
            try:
                tr = get_transcript(v["id"], ch.get("languages", ["en", "en-US", "en-GB"]))
            except Exception as e:
                rec["status"] = "retry" if rec["tries"] < MAX_TRIES else "no_transcript"
                rec["error"] = type(e).__name__
                failed += 1
                print(f"- {ch['name']}: {v['title'][:60]} -> {type(e).__name__}")
                continue
            words = len(tr["text"].split())
            if words < MIN_WORDS:
                rec["status"] = "too_short"
                continue
            meta = {k: rec[k] for k in ("channel", "channel_id", "title", "published", "url", "short")}
            meta.update(id=v["id"], description=v["description"][:1500], words=words,
                        **{k: tr[k] for k in ("language", "generated", "duration_s")})
            (TRANSCRIPTS / f"{v['id']}.json").write_text(
                json.dumps({**meta, "transcript": tr["text"]}, ensure_ascii=False), encoding="utf-8")
            rec["status"] = "transcribed"
            rec["words"] = words
            got += 1
            print(f"+ {ch['name']}: {v['title'][:60]} ({words} words)")
            time.sleep(1.5)
    state["last_fetch"] = now()
    save(STATE, state)
    print(f"fetch done: {got} new transcripts, {failed} not available yet")


def cmd_pending(args):
    state = load(STATE, {"videos": {}})
    rows = [(vid, r) for vid, r in state["videos"].items() if r["status"] == "transcribed"]
    rows.sort(key=lambda x: x[1]["published"])
    for vid, r in rows:
        print(f"{TRANSCRIPTS / (vid + '.json')}\t{r['words']}w\t{r['channel']}\t{r['title']}")
    print(f"{len(rows)} pending")


# ---------- summaries ----------

REQUIRED = {"id": str, "summary": str, "topics": list, "heroes": list, "teams": list,
            "meta_changes": list, "tips": list, "season": str, "server_scope": str, "value": str}


def hero_names():
    return {n.lower(): n for n in load(HERO_NAMES, [])}


def cmd_add_summary(args):
    s = json.loads(Path(args.file).read_text(encoding="utf-8"))
    for k, t in REQUIRED.items():
        if not isinstance(s.get(k), t):
            sys.exit(f"summary field '{k}' missing or not {t.__name__}")
    state = load(STATE, {"videos": {}})
    rec = state["videos"].get(s["id"])
    if not rec:
        sys.exit(f"unknown video {s['id']}")
    known = hero_names()
    for h in s["heroes"]:
        canon = known.get(h.get("name", "").lower())
        h["known"] = bool(canon)
        if canon:
            h["name"] = canon
    for k in ("channel", "title", "published", "url", "short"):
        s[k] = rec[k]
    s["summarized"] = now()
    NOTES.mkdir(exist_ok=True)
    save(NOTES / f"{s['id']}.json", s)
    rec["status"] = "summarized"
    save(STATE, state)
    unknown = [h["name"] for h in s["heroes"] if not h["known"]]
    print(f"saved {s['id']}" + (f" (unknown hero names: {', '.join(unknown)})" if unknown else ""))


SCHEMA = {
    "type": "object",
    "additionalProperties": False,
    "required": ["summary", "topics", "heroes", "teams", "meta_changes", "tips", "season",
                 "server_scope", "value"],
    "properties": {
        "summary": {"type": "string"},
        "topics": {"type": "array", "items": {"type": "string"}},
        "heroes": {"type": "array", "items": {
            "type": "object", "additionalProperties": False, "required": ["name", "verdict", "note"],
            "properties": {"name": {"type": "string"}, "verdict": {"type": "string"},
                           "note": {"type": "string"}}}},
        "teams": {"type": "array", "items": {
            "type": "object", "additionalProperties": False, "required": ["mode", "heroes", "note"],
            "properties": {"mode": {"type": "string"},
                           "heroes": {"type": "array", "items": {"type": "string"}},
                           "note": {"type": "string"}}}},
        "meta_changes": {"type": "array", "items": {"type": "string"}},
        "tips": {"type": "array", "items": {"type": "string"}},
        "season": {"type": "string"},
        "server_scope": {"type": "string", "enum": ["S1", "S9", "mixed"]},
        "value": {"type": "string", "enum": ["high", "medium", "low"]},
    },
}


def cmd_summarize(args):
    import anthropic
    client = anthropic.Anthropic(api_key=os.environ.get("ANTHROPIC_API_KEY"))
    model = os.environ.get("YTWATCH_MODEL", "claude-opus-5-5")
    system = (ROOT / "SUMMARY_PROMPT.md").read_text(encoding="utf-8")
    state = load(STATE, {"videos": {}})
    todo = [vid for vid, r in state["videos"].items() if r["status"] == "transcribed"][:args.limit]
    for vid in todo:
        t = json.loads((TRANSCRIPTS / f"{vid}.json").read_text(encoding="utf-8"))
        user = (f"Channel: {t['channel']}\nTitle: {t['title']}\nPublished: {t['published'][:10]}\n"
                f"Description: {t['description']}\n\nTranscript:\n{t['transcript']}")
        try:
            resp = client.messages.create(
                model=model, max_tokens=16000, system=system,
                output_config={"format": {"type": "json_schema", "schema": SCHEMA}},
                messages=[{"role": "user", "content": user}])
        except anthropic.APIStatusError as e:
            print(f"! {vid}: API {e.status_code} {e.message}")
            if e.status_code in (401, 403, 429) or e.status_code >= 500:
                break
            continue
        except anthropic.APIConnectionError:
            print("! network error, stopping")
            break
        if resp.stop_reason in ("refusal", "max_tokens"):
            print(f"! {vid}: stop_reason {resp.stop_reason}")
            continue
        s = json.loads(next(b.text for b in resp.content if b.type == "text"))
        s["id"] = vid
        s["model"] = model
        tmp = ROOT / f".summary-{vid}.json"
        tmp.write_text(json.dumps(s, ensure_ascii=False), encoding="utf-8")
        cmd_add_summary(argparse.Namespace(file=tmp))
        tmp.unlink()


# ---------- build ----------

def cmd_build(args):
    notes = [load(p, None) for p in sorted(NOTES.glob("*.json"))]
    notes = [n for n in notes if n]
    notes.sort(key=lambda n: n["published"], reverse=True)
    heroes = {}
    for n in notes:
        for h in n["heroes"]:
            heroes.setdefault(h["name"], []).append({
                "verdict": h.get("verdict", ""), "note": h.get("note", ""), "date": n["published"][:10],
                "channel": n["channel"], "url": n["url"]})
    KNOWLEDGE.joinpath("data").mkdir(parents=True, exist_ok=True)
    save(OUT_JSON, {"built": now(), "videos": notes, "heroes": heroes})

    L = ["# Dragonheir knowledge from YouTube", "",
         f"Built {now()} from {len(notes)} video summaries. Auto-generated by yt-watch; newest first. "
         "Creators play global servers (Season 9 as of Oct 2026) unless a note says otherwise; "
         "S1 means it also applies to a new Season 1 server.", ""]
    cutoff = (dt.datetime.now(dt.timezone.utc) - dt.timedelta(days=21)).strftime("%Y-%m-%d")
    L += ["## Heroes mentioned (last 21 days)", "", "| Hero | Verdicts (newest first) |", "| --- | --- |"]
    for name in sorted(heroes, key=lambda k: -len(heroes[k])):
        recent = [m for m in heroes[name] if m["date"] >= cutoff]
        if recent:
            cell = "; ".join(f"{m['verdict']} ({m['channel']}, {m['date']})" for m in recent[:6])
            L.append(f"| {name} | {cell} |")
    L += ["", "## Videos", ""]
    for n in notes:
        L.append(f"### {n['title']}")
        L.append(f"{n['channel']} · {n['published'][:10]} · [{n['url']}]({n['url']}) · "
                 f"season {n['season']} · scope {n['server_scope']} · value {n['value']}")
        L += ["", n["summary"], ""]
        for key, label in (("meta_changes", "Meta"), ("tips", "Tips")):
            for item in n[key]:
                L.append(f"- {label}: {item}")
        for t in n["teams"]:
            L.append(f"- Team ({t.get('mode', '?')}): {', '.join(t.get('heroes', []))}"
                     + (f" — {t['note']}" if t.get("note") else ""))
        for h in n["heroes"]:
            L.append(f"- {h['name']}: {h.get('verdict', '')}" + (f" — {h['note']}" if h.get("note") else ""))
        L.append("")
    OUT_MD.write_text("\n".join(L), encoding="utf-8")
    print(f"built {OUT_MD} and {OUT_JSON}: {len(notes)} videos, {len(heroes)} heroes")


def main():
    p = argparse.ArgumentParser()
    sp = p.add_subparsers(dest="cmd", required=True)
    f = sp.add_parser("fetch")
    f.add_argument("--backfill", type=int, default=3,
                   help="on a channel's first run, take this many latest videos")
    sp.add_parser("pending")
    a = sp.add_parser("add-summary")
    a.add_argument("file")
    sp.add_parser("build")
    s = sp.add_parser("summarize", help="summarize pending transcripts with the Claude API")
    s.add_argument("--limit", type=int, default=15)
    args = p.parse_args()
    {"fetch": cmd_fetch, "pending": cmd_pending, "add-summary": cmd_add_summary,
     "build": cmd_build, "summarize": cmd_summarize}[args.cmd](args)


if __name__ == "__main__":
    main()
