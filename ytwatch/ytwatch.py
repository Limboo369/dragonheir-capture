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
            if rec["status"] not in ("new", "retry") or args.discover_only:
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


SKIP_TITLE = re.compile(r"giveaway|winners|you won|prize draw", re.I)


def cmd_backlog(args):
    """Queue older videos listed in backlog.json (made with yt-dlp's channel listing)."""
    state = load(STATE, {"videos": {}, "channels": {}})
    added = 0
    for v in load(ROOT / "backlog.json", []):
        rec = state["videos"].get(v["id"])
        if rec and rec["status"] != "baseline":
            continue
        state["videos"][v["id"]] = {
            "status": "skipped_giveaway" if SKIP_TITLE.search(v["title"]) else "new", "tries": 0,
            "channel": v["channel"], "channel_id": v["channel_id"], "title": v["title"],
            "published": v["published"], "url": f"https://www.youtube.com/watch?v={v['id']}",
            "short": False, "duration_s": v.get("duration_s", 0), "found": now(), "source": "backlog"}
        added += 1
    save(STATE, state)
    if added:
        print(f"backlog: {added} videos queued")


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


LIVE = re.compile(r"\b(live|livestream|stream)\b", re.I)


def cmd_gemini(args):
    """Gemini reads public YouTube videos by URL (Google fetches them), so no
    transcript download is needed and server IP blocks do not matter."""
    from google import genai
    from google.genai import types
    client = genai.Client(api_key=os.environ["GEMINI_API_KEY"],
                          http_options=types.HttpOptions(timeout=600_000))
    models = os.environ.get("YTWATCH_GEMINI_MODEL",
                            "gemini-3.8-flash,gemini-3.5-flash,gemini-2.5-flash").split(",")

    busy = set()   # models that answered 503/404 are skipped for the rest of this run

    def generate(**kw):
        """Try the models in order; a busy (503) or unknown (404) model falls through."""
        usable = [m for m in models if m not in busy] or models[-1:]
        for i, m in enumerate(usable):
            try:
                return m, client.models.generate_content(model=m.strip(), **kw)
            except genai.errors.APIError as e:
                if e.code not in (404, 500, 503) or i == len(usable) - 1:
                    raise
                if m not in busy:
                    busy.add(m)
                    print(f"  {m}: {e.code}, using {usable[i + 1]}", flush=True)

    if args.ping:
        m, r = generate(contents="Reply with OK")
        print(f"Gemini ({m}):", r.text)
        return
    prompt = (ROOT / "SUMMARY_PROMPT.md").read_text(encoding="utf-8")
    names = ", ".join(load(HERO_NAMES, []))
    state = load(STATE, {"videos": {}})
    # Free tier: about 8 hours of YouTube video per day. Track it so we stop before Google says no.
    today = dt.datetime.now(dt.timezone.utc).strftime("%Y-%m-%d")
    budget = state.setdefault("budget", {})
    if budget.get("day") != today:
        budget.update(day=today, seconds=0)
    limit_s = int(os.environ.get("YTWATCH_DAILY_SECONDS", 7 * 3600 + 1800))
    todo = []
    for _, vid in sorted(((r["published"], vid) for vid, r in state["videos"].items()
                          if r["status"] in ("new", "retry", "no_transcript")), reverse=True):
        rec = state["videos"][vid]
        if LIVE.search(rec["title"]):
            rec["status"] = "skipped_live"   # multi-hour streams would eat the daily video quota
            continue
        cost = rec.get("duration_s") or 1200
        if len(todo) >= args.limit or budget["seconds"] + cost > limit_s:
            break
        budget["seconds"] += cost
        todo.append(vid)
    if not todo and budget["seconds"]:
        print(f"daily video budget used ({budget['seconds'] // 60} min), waiting for tomorrow")
    save(STATE, state)

    def watch(vid):
        """Runs in a worker thread: one video -> (model, note dict) or raises."""
        rec = state["videos"][vid]
        text = (f"{prompt}\n\nWatch the video and write the note. Use what is said and what is shown "
                f"on screen (team screens, stats, tier lists).\nChannel: {rec['channel']}\n"
                f"Title: {rec['title']}\nPublished: {rec['published'][:10]}\n"
                "Answer with JSON only, matching the schema.\n\n"
                "Known hero names, use these spellings (brand-new heroes may be missing from this list; "
                f"then keep the name as said in the video): {names}")
        print(f"… {rec['channel']}: {rec['title'][:60]}", flush=True)
        model, res = generate(
            contents=types.Content(role="user", parts=[
                types.Part(file_data=types.FileData(file_uri=f"https://www.youtube.com/watch?v={vid}")),
                types.Part(text=text)]),
            config=types.GenerateContentConfig(
                response_mime_type="application/json",
                response_json_schema=SCHEMA,
                media_resolution=types.MediaResolution.MEDIA_RESOLUTION_LOW))
        raw = re.sub(r"^```(?:json)?|```$", "", (res.text or "").strip()).strip()
        return model, json.loads(raw)

    # A few videos at once; more would hit the free tier's requests-per-minute limit.
    from concurrent.futures import ThreadPoolExecutor, as_completed
    with ThreadPoolExecutor(max_workers=args.workers) as pool:
        jobs = {pool.submit(watch, vid): vid for vid in todo}
        for job in as_completed(jobs):
            vid = jobs[job]
            state = load(STATE, {"videos": {}})
            rec = state["videos"][vid]
            rec["gtries"] = rec.get("gtries", 0) + 1
            try:
                model, s = job.result()
            except Exception as e:
                msg = str(e)[:200]
                print(f"! {rec['title'][:50]}: {type(e).__name__}: {msg}")
                if "429" in msg or "RESOURCE_EXHAUSTED" in msg:
                    # quota, not the video's fault: try again later, close today's budget
                    rec["gtries"] -= 1
                    rec["status"] = "retry"
                    state.setdefault("budget", {}).update(day=today, seconds=limit_s)
                    save(STATE, state)
                    continue
                rec["status"] = "retry" if rec["gtries"] < 3 else "failed"
                rec["error"] = msg
                save(STATE, state)
                continue
            s["id"] = vid
            s["model"] = model
            rec["status"] = "transcribed"   # lets add-summary accept it
            save(STATE, state)
            tmp = ROOT / f".summary-{vid}.json"
            tmp.write_text(json.dumps(s, ensure_ascii=False), encoding="utf-8")
            try:
                cmd_add_summary(argparse.Namespace(file=tmp))
                print(f"+ {rec['channel']}: {rec['title'][:60]}", flush=True)
            except SystemExit as e:
                print(f"! {vid}: bad note: {e}")
                state = load(STATE, {"videos": {}})
                state["videos"][vid]["status"] = "retry"
                save(STATE, state)
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

    # status for the dashboard: queue, failures, channels
    state = load(STATE, {"videos": {}, "channels": {}})
    counts = {}
    for r in state["videos"].values():
        counts[r["status"]] = counts.get(r["status"], 0) + 1
    problems = [{"title": r.get("title", ""), "channel": r.get("channel", ""), "status": r["status"],
                 "error": r.get("error", "")[:160]}
                for r in state["videos"].values() if r["status"] in ("retry", "failed")]
    save(KNOWLEDGE / "data" / "status.json", {
        "built": now(), "last_fetch": state.get("last_fetch"), "counts": counts, "problems": problems,
        "channels": [{"name": c["name"], "id": c["id"], "enabled": c.get("enabled", True),
                      "checked": state["channels"].get(c["id"], {}).get("checked")}
                     for c in load(CHANNELS, [])]})
    dash = ROOT / "dashboard.html"
    if dash.exists():
        (KNOWLEDGE / "index.html").write_text(dash.read_text(encoding="utf-8"), encoding="utf-8")

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
    f.add_argument("--discover-only", action="store_true",
                   help="only record new videos (for the gemini command), no transcripts")
    sp.add_parser("pending")
    sp.add_parser("backlog")
    a = sp.add_parser("add-summary")
    a.add_argument("file")
    sp.add_parser("build")
    s = sp.add_parser("summarize", help="summarize pending transcripts with the Claude API")
    s.add_argument("--limit", type=int, default=15)
    g = sp.add_parser("gemini", help="let Gemini watch new videos by URL and write the notes")
    g.add_argument("--limit", type=int, default=12)
    g.add_argument("--workers", type=int, default=4)
    g.add_argument("--ping", action="store_true", help="only check that the key works")
    args = p.parse_args()
    {"fetch": cmd_fetch, "pending": cmd_pending, "add-summary": cmd_add_summary,
     "build": cmd_build, "summarize": cmd_summarize,
     "gemini": cmd_gemini, "backlog": cmd_backlog}[args.cmd](args)


if __name__ == "__main__":
    main()
