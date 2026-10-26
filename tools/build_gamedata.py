"""Build dhreader/data/game.json from the dragonheir.info dump and the Companion data.

usage: python tools/build_gamedata.py <dragonheir-info-db.json> <dh-data.js>"""
import json
import re
import sys

db = json.load(open(sys.argv[1], encoding="utf-8"))
comp = open(sys.argv[2], encoding="utf-8").read()
comp = json.loads(comp[comp.index("{"): comp.rstrip().rstrip(";").rindex("}") + 1])
school = {str(h["id"]): h.get("sc") for h in comp["heroes"]}
heroes = [{"id": h["id"], "name": h["heroname"], "rarity": h["rarity"], "element": h["element"],
           "school": school.get(str(h["id"])), "season": h.get("season"), "head_icon": h.get("head_icon")}
          for h in db["hero_list"]]
sets = [{"name": s["n"], "family": s.get("fam"), "rarity": s.get("r"), "season": s.get("sea"), "s1": s.get("s1"),
         "slots": s.get("slots"), "icon": s.get("ic")} for s in comp["sets"]]
fam2set = {s["family"]: s["name"] for s in sets if s.get("family")}
arts = [{"name": a["n"], "rarity": a.get("r"), "season": a.get("sea"), "s1": a.get("s1"), "icon": a.get("ic")} for a in comp["artifacts"]]
gear = []
for e in db["equipList"]:
    if e["type"] != 2:
        continue
    m = re.match(r"(.+?)\s*(?::|-)\s*(\w[\w ]*?)\+?$", e["show_name"])
    fam, slot = (m.group(1).strip(), m.group(2).strip()) if m else (e["show_name"], None)
    setname = fam2set.get(fam)
    names = {x["name"] for x in sets}
    for sp in e.get("suite") or []:
        n = (sp.get("spell_id") or {}).get("show_name")
        if not setname and n in names:
            setname = n
    if not setname:
        for f2, n in sorted(fam2set.items(), key=lambda kv: -len(kv[0] or "")):
            if f2 and e["show_name"].startswith(f2):
                setname, fam = n, f2
                slot = e["show_name"][len(f2):].strip(" :-+") or slot
                break
    gear.append({"id": e["id"], "name": e["show_name"], "family": fam, "set": setname, "slot": slot,
                 "rarity": e["rarity"], "season": e["season"], "icon": e["iconPath"]})
artitems = [{"id": e["id"], "name": e["show_name"], "rarity": e["rarity"], "season": e["season"], "icon": e["iconPath"]}
            for e in db["equipList"] if e["type"] == 1]
runes = [{"id": e["id"], "name": e["show_name"], "rarity": e["rarity"], "season": e["season"], "icon": e["iconPath"]}
         for e in db["equipList"] if e["type"] == 3]
out = {"rune_items": runes, "heroes": heroes, "sets": sets, "artifacts": arts, "gear_items": gear, "artifact_items": artitems}
json.dump(out, open("dhreader/data/game.json", "w", encoding="utf-8"), ensure_ascii=False, separators=(",", ":"))
print(len(heroes), "heroes", len(sets), "sets", len(arts), "artifacts", len(gear), "gear items",
      sum(1 for g in gear if g["set"]), "with set")
