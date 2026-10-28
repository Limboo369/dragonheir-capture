"""Step 3 of the Companion digest: merge Claude's verdicts into the db documents.

  python3 build_db.py WORK_DIR [--prev PREV_DIR]

Reads WORK_DIR/{evidence,teams,tips,all_ids,new_videos}.json from prep.py and
WORK_DIR/claude.json written by Claude (see DIGEST.md), plus the current db docs in
PREV_DIR/yt/*.json. Checks everything, then writes WORK_DIR/db/<doc id>.json: the
documents of collection "yt" that the Companion reads (meta, heroes-0.., teams, tips).
Exits non-zero and writes nothing when Claude's file breaks a rule.
"""
import argparse
import datetime as dt
import glob
import json
import os
import sys

HERE = os.path.dirname(os.path.abspath(__file__))
NAMES = set(json.load(open(os.path.join(HERE, "..", "hero-names.json"), encoding="utf-8")))
MODES = ["overall", "vortex", "goblin", "grave", "ab", "arena"]
TIERS = ["S+", "S", "A+", "A", "B+", "B", "C+", "C", "D+", "D"]
CHUNK = 180_000   # bytes per heroes-N doc


def load(p, default=None):
    try:
        return json.load(open(p, encoding="utf-8"))
    except FileNotFoundError:
        return default


def doc(d):
    """ArtifactData out_dir files may wrap the fields; take the document body."""
    if isinstance(d, dict) and isinstance(d.get("data"), dict):
        return d["data"]
    return d or {}


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("work")
    ap.add_argument("--prev")
    a = ap.parse_args()
    W = a.work
    ev = load(os.path.join(W, "evidence.json"), {})
    cl = load(os.path.join(W, "claude.json"))
    if cl is None:
        sys.exit("claude.json missing")
    prev_meta, prev_heroes = {}, {}
    if a.prev:
        prev_meta = doc(load(os.path.join(a.prev, "yt", "meta.json"), {}))
        for p in sorted(glob.glob(os.path.join(a.prev, "yt", "heroes-*.json"))):
            prev_heroes.update(doc(load(p, {})).get("h", {}))

    errors = []
    heroes = dict(prev_heroes)
    for name, x in (cl.get("heroes") or {}).items():
        if name not in NAMES:
            errors.append(f"{name}: not a game hero name")
            continue
        if name not in ev and name not in prev_heroes:
            errors.append(f"{name}: no creator evidence")
            continue
        t = {m: v for m, v in (x.get("t") or {}).items() if v}
        bad = [f"{m}={v}" for m, v in t.items() if m not in MODES or v not in TIERS]
        if bad:
            errors.append(f"{name}: bad tiers {bad}")
            continue
        if not (x.get("why") or "").strip():
            errors.append(f"{name}: no reason")
            continue
        e = ev.get(name)
        old = prev_heroes.get(name, {})
        heroes[name] = {
            "t": t, "why": x["why"].strip(), "s1": x.get("s1", "yes"), "s1why": (x.get("s1why") or "").strip(),
            "conf": x.get("conf", "low"),
            "n": e["videos"] if e else old.get("n", 0),
            "ch": e["channels"] if e else old.get("ch", []),
            "last": e["last"] if e else old.get("last", ""),
            "q": ([{"v": m["v"], "w": m.get("why", ""), "c": m["c"], "d": m["d"], "u": m["u"], "s": m["scope"]}
                   for m in e["verdicts"][:6]] if e else old.get("q", []))}
    missing = sorted(n for n, e in ev.items() if e["verdicts"] and n not in (cl.get("heroes") or {}))
    if missing:
        errors.append("rated by creators but not digested: " + ", ".join(missing))
    if errors:
        print("NOT WRITTEN, fix claude.json:\n- " + "\n- ".join(errors))
        sys.exit(1)

    out = os.path.join(W, "db")
    os.makedirs(out, exist_ok=True)
    for p in glob.glob(os.path.join(out, "*.json")):
        os.remove(p)
    chunks, cur, size = [], {}, 0
    for name in sorted(heroes):
        s = len(json.dumps(heroes[name], ensure_ascii=False))
        if cur and size + s > CHUNK:
            chunks.append(cur)
            cur, size = {}, 0
        cur[name] = heroes[name]
        size += s
    if cur:
        chunks.append(cur)
    for i, c in enumerate(chunks):
        json.dump({"h": c}, open(os.path.join(out, f"heroes-{i}.json"), "w", encoding="utf-8"), ensure_ascii=False)

    def s1(srcs):
        return any(x["scope"] != "S9" for x in srcs)
    teams = []
    for g in load(os.path.join(W, "teams.json"), [])[:80]:
        teams.append({"m": g["mode"], "mt": g["mode_text"], "h": g["heroes"], "n": len(g["src"]),
                      "ch": sorted({x["c"] for x in g["src"]}), "w": g["notes"][:2], "s1": s1(g["src"]),
                      "src": [{"c": x["c"], "d": x["d"], "u": x["u"], "s": x["scope"]} for x in g["src"][:4]]})
    tips, seen_t = [], set()
    for t in load(os.path.join(W, "tips.json"), []):
        k = t["text"].strip().lower()
        if k in seen_t or t.get("value") == "low":
            continue
        seen_t.add(k)
        tips.append({"k": t["kind"], "x": t["text"], "c": t["c"], "d": t["d"], "u": t["u"], "s": t["scope"]})
        if len(tips) >= 160:
            break
    json.dump({"list": teams}, open(os.path.join(out, "teams.json"), "w", encoding="utf-8"), ensure_ascii=False)
    json.dump({"list": tips}, open(os.path.join(out, "tips.json"), "w", encoding="utf-8"), ensure_ascii=False)
    ids = load(os.path.join(W, "all_ids.json"), [])
    vids = load(os.path.join(W, "new_videos.json"), [])
    latest = max([v["d"] for v in vids] + [prev_meta.get("latest", "")])
    chans = sorted(set(prev_meta.get("channels", [])) | {v["c"] for v in vids})
    json.dump({"built": dt.datetime.now(dt.timezone.utc).strftime("%Y-%m-%dT%H:%MZ"), "notes": len(ids),
               "latest": latest, "channels": chans, "seen": ids, "chunks": len(chunks),
               "summary": (cl.get("summary") or prev_meta.get("summary", "")).strip(),
               "heroes": len(heroes), "by": "Claude digest of Dragonheir Watch notes", "v": 1},
              open(os.path.join(out, "meta.json"), "w", encoding="utf-8"), ensure_ascii=False)
    stale = [os.path.basename(p)[:-5] for p in glob.glob(os.path.join(a.prev or "/nonexistent", "yt", "heroes-*.json"))
             if not os.path.exists(os.path.join(out, os.path.basename(p)))]
    json.dump(stale, open(os.path.join(W, "delete.json"), "w"))
    print(f"wrote {len(chunks)} hero docs ({len(heroes)} heroes), {len(teams)} teams, {len(tips)} tips"
          + (f"; delete old docs {stale}" if stale else ""))


if __name__ == "__main__":
    main()
