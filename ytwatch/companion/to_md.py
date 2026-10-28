#!/usr/bin/env python3
"""Render the creator digest (the Companion's db collection "yt") as one Markdown file.

Usage: python3 to_md.py DB_DIR OUT.md
DB_DIR holds meta.json, heroes-N.json, teams.json, tips.json, either as written by build_db.py
or as saved by ArtifactData list out_dir (documents wrapped in {"data": ...}).

The file is the single place every assistant reads FIRST: Claude threads in the project,
the Companion's Ask Claude and the REGAL Discord bot's /ask.
"""
import glob
import json
import os
import sys

MODES = [("overall", "Overall"), ("vortex", "Temporal Vortex"), ("goblin", "Goblin Lair"),
         ("grave", "Grave dungeons"), ("ab", "Ancient Battlefield"), ("arena", "Arena")]
TIERS = ["S+", "S", "A+", "A", "B+", "B", "C+", "C", "D+", "D"]
S1 = {"yes": "S1 ok", "partly": "partly S1", "no": "S9 only"}


def doc(p, default=None):
    try:
        v = json.load(open(p, encoding="utf-8"))
    except Exception:
        return default
    return v["data"] if isinstance(v, dict) and isinstance(v.get("data"), dict) and len(v) <= 3 and "version" in v else v


def main():
    d, out = sys.argv[1], sys.argv[2]
    meta = doc(os.path.join(d, "meta.json"), {}) or {}
    heroes = {}
    for p in sorted(glob.glob(os.path.join(d, "heroes-*.json"))):
        heroes.update((doc(p, {}) or {}).get("h", {}))
    teams = (doc(os.path.join(d, "teams.json"), {}) or {}).get("list", [])
    tips = (doc(os.path.join(d, "tips.json"), {}) or {}).get("list", [])
    L = ["# Dragonheir creator knowledge (check this FIRST)", "",
         f"Digest of {meta.get('notes', 0)} YouTube videos from {', '.join(meta.get('channels', []))}. "
         f"Updated {meta.get('built', '?')} UTC, newest video {meta.get('latest', '?')}. "
         "Written by Claude from Gemini notes of each video; every verdict names its channels and date.",
         "",
         "How to use: answer from this file first. Use other sources (site tier lists, knowledge base) only for what it does not cover, "
         "and say when you do. The player is on a NEW server in Beginner Season 1: hero strength carries over, "
         "but Season 9 bosses, sets, banners and new S9 heroes do not; prefer lines marked S1 ok.",
         "", "## Summary", "", meta.get("summary", "").strip() or "-", "", "## Hero tiers by mode", ""]
    for key, name in MODES:
        by = {}
        for n, x in heroes.items():
            t = (x.get("t") or {}).get(key)
            if t:
                by.setdefault(t, []).append(n + ("" if x.get("s1", "yes") == "yes" else " (S9 only)" if x.get("s1") == "no" else " (partly S1)"))
        if not by:
            continue
        L.append(f"### {name}")
        for t in TIERS:
            if t in by:
                L.append(f"- {t}: " + ", ".join(sorted(by[t])))
        L.append("")
    L += ["## Heroes: what creators say", ""]
    for n in sorted(heroes):
        x = heroes[n]
        tiers = ", ".join(f"{dict(MODES)[k]} {v}" for k, v in (x.get("t") or {}).items() if k in dict(MODES))
        s1 = S1.get(x.get("s1", "yes"), "S1 ok") + (f" ({x['s1why']})" if x.get("s1why") else "")
        L.append(f"- **{n}**: {tiers}. {x.get('why', '').strip()} [{s1}; confidence {x.get('conf', 'low')}; "
                 f"{x.get('n', 0)} videos, {', '.join(x.get('ch', []))}; last {x.get('last', '?')}]")
    L += ["", "## Teams creators use", ""]
    for t in teams:
        why = " ".join(t.get("w") or [])
        L.append(f"- {t.get('mt') or t.get('m')}: {', '.join(t['h'])}"
                 f"{'' if t.get('s1') else ' (S9 content)'}. {why} [{t.get('n', 1)} videos, {', '.join(t.get('ch', []))}]".rstrip())
    L += ["", "## Tips and meta notes", ""]
    for t in tips:
        L.append(f"- {'Meta' if t.get('k') == 'meta' else 'Tip'}{' (S9)' if t.get('s') == 'S9' else ''}: {t['x']} [{t['c']}, {t['d']}]")
    os.makedirs(os.path.dirname(os.path.abspath(out)), exist_ok=True)
    open(out, "w", encoding="utf-8").write("\n".join(L) + "\n")
    print(f"wrote {out}: {len(heroes)} heroes, {len(teams)} teams, {len(tips)} tips, {sum(map(len, L))} chars")


if __name__ == "__main__":
    main()
