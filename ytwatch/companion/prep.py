"""Step 1 of the Companion digest: gather the evidence Claude needs.

  python3 prep.py NOTES_DIR WORK_DIR [--prev PREV_DIR] [--all]

NOTES_DIR  notes/*.json from the data repo (one Gemini note per video)
PREV_DIR   the Companion's current db docs, saved with ArtifactData list --out_dir
           (yt/meta.json lists the video ids already digested)
Writes WORK_DIR/evidence.json (heroes touched by new videos, or all with --all),
WORK_DIR/teams.json, WORK_DIR/tips.json, WORK_DIR/new_videos.json, WORK_DIR/unmatched.json.
"""
import argparse
import difflib
import glob
import json
import os
import re
import sys

HERE = os.path.dirname(os.path.abspath(__file__))
NAMES = json.load(open(os.path.join(HERE, "..", "hero-names.json"), encoding="utf-8"))
MODE_WORDS = {   # mode text in notes -> Companion mode key
    "vortex": "vortex", "temporal vortex": "vortex", "goblin": "goblin", "grave": "grave",
    "ancient battlefield": "ab", "battlefield": "ab", "arena": "arena", "gladiator": "arena", "pvp": "arena"}


def slug(n):
    return re.sub(r"[^a-z0-9]+", "", (n or "").lower())


BY_SLUG = {slug(n): n for n in NAMES}


def canon(name):
    """Game spelling for a name Gemini wrote, or None."""
    s = slug(name)
    if s in BY_SLUG:
        return BY_SLUG[s]
    m = difflib.get_close_matches(s, BY_SLUG.keys(), n=1, cutoff=0.86)
    return BY_SLUG[m[0]] if m else None


def mode_key(text):
    t = (text or "").lower()
    for w, k in MODE_WORDS.items():
        if w in t:
            return k
    return ""


def load_notes(d):
    out = []
    for p in glob.glob(os.path.join(d, "*.json")):
        try:
            n = json.load(open(p, encoding="utf-8"))
        except Exception:
            continue
        n.setdefault("id", os.path.basename(p)[:-5])
        out.append(n)
    out.sort(key=lambda n: n.get("published", ""), reverse=True)
    return out


def src(n):
    return {"c": n.get("channel", ""), "d": n.get("published", "")[:10], "u": n.get("url", ""),
            "vid": n["id"], "title": n.get("title", "")[:90], "scope": n.get("server_scope", ""),
            "season": n.get("season", ""), "value": n.get("value", "")}


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("notes")
    ap.add_argument("work")
    ap.add_argument("--prev")
    ap.add_argument("--all", action="store_true")
    a = ap.parse_args()
    os.makedirs(a.work, exist_ok=True)
    notes = [n for n in load_notes(a.notes) if n.get("value") != "low" or n.get("heroes")]
    seen = set()
    if a.prev and os.path.exists(os.path.join(a.prev, "yt", "meta.json")):
        seen = set(json.load(open(os.path.join(a.prev, "yt", "meta.json"), encoding="utf-8")).get("seen", []))
    new = [n for n in notes if n["id"] not in seen]

    unmatched = {}
    mentions = {}
    for n in notes:
        for h in n.get("heroes", []):
            c = canon(h.get("name"))
            if not c:
                unmatched.setdefault(h.get("name", ""), []).append(n["id"])
                continue
            mentions.setdefault(c, []).append(dict(src(n), v=h.get("verdict", ""), why=h.get("note", "")))
        for t in n.get("teams", []):
            for x in t.get("heroes", []):
                c = canon(x)
                if c:
                    mentions.setdefault(c, []).append(dict(src(n), v="in team: " + (t.get("mode") or "?"), why="", team=True))
    touched = {canon(h.get("name")) for n in new for h in n.get("heroes", [])} | \
              {canon(x) for n in new for t in n.get("teams", []) for x in t.get("heroes", [])}
    touched.discard(None)
    pick = mentions.keys() if a.all else touched
    evidence = {}
    for name in sorted(pick):
        ms = mentions.get(name, [])
        rated = [m for m in ms if not m.get("team")]
        evidence[name] = {
            "videos": len({m["vid"] for m in ms}), "last": max(m["d"] for m in ms), "channels": sorted({m["c"] for m in ms}),
            "team_appearances": sum(1 for m in ms if m.get("team")),
            "new": sum(1 for m in ms if m["vid"] not in seen),
            # newest first; Claude reads these to write the tier and the reason
            "verdicts": rated[:15],
            "team_modes": sorted({m["v"][9:] for m in ms if m.get("team")})}

    teams = {}
    for n in notes:
        for t in n.get("teams", []):
            hs = [canon(x) or x for x in t.get("heroes", [])]
            if len(hs) < 3:
                continue
            key = (mode_key(t.get("mode")) or (t.get("mode") or "?").strip(), tuple(sorted(hs)))
            g = teams.setdefault(key, {"mode": key[0], "mode_text": t.get("mode", ""), "heroes": hs,
                                       "notes": [], "src": []})
            if t.get("note"):
                g["notes"].append(t["note"])
            g["src"].append(src(n))
    teams = sorted(teams.values(), key=lambda g: (-len({s["c"] for s in g["src"]}), -len(g["src"]),
                                                  [s["d"] for s in g["src"]][0]), reverse=False)
    tips = []
    for n in notes:
        for kind in ("meta_changes", "tips"):
            for x in n.get(kind, []):
                tips.append(dict(src(n), kind="meta" if kind == "meta_changes" else "tip", text=x))

    def dump(name, obj):
        json.dump(obj, open(os.path.join(a.work, name), "w", encoding="utf-8"), ensure_ascii=False, indent=1)
    dump("evidence.json", evidence)
    dump("teams.json", teams)
    dump("tips.json", tips)
    dump("unmatched.json", unmatched)
    dump("new_videos.json", [dict(src(n), summary=n.get("summary", ""), topics=n.get("topics", [])) for n in new])
    dump("all_ids.json", [n["id"] for n in notes])
    print(f"{len(notes)} notes, {len(new)} new, {len(evidence)} heroes to digest, "
          f"{len(teams)} teams, {len(tips)} tips, {len(unmatched)} unmatched names")


if __name__ == "__main__":
    main()
