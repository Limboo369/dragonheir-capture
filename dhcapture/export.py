"""Write dragonheir-account.json, the file the Dragonheir Companion app imports."""
import json

from .store import now_iso

FORMAT = "dragonheir-account"
VERSION = 1


def build(store):
    def load(v):
        return json.loads(v) if v else []

    heroes = []
    for h in store.rows("heroes"):
        heroes.append({
            "name": h["name"], "rarity": h["rarity"], "level": h["level"], "stars": h["stars"],
            "awakening": h["awakening"], "power": h["power"], "element": h["element"],
            "school": h["school"], "stats": load(h["stats"]), "skills": load(h["skills"]),
            "gear": [], "updated": h["updated"],
        })
    by_key = {"".join(c for c in x["name"].lower() if c.isalnum()): x for x in heroes}
    loose_gear = []
    for g in store.rows("gear"):
        piece = {"slot": g["slot"], "set": g["set_name"], "rarity": g["rarity"], "level": g["level"],
                 "main_stat": g["main_stat"], "substats": load(g["substats"]), "updated": g["updated"]}
        owner = by_key.get(g["key"].split(":")[0])
        (owner["gear"] if owner else loose_gear).append({**piece, "hero": g["hero"]} if not owner else piece)

    return {
        "format": FORMAT,
        "version": VERSION,
        "exported": now_iso(),
        "player": {r["key"]: json.loads(r["v"]) for r in store.rows("player")},
        "heroes": heroes,
        "artifacts": [{k: a[k] for k in ("name", "rarity", "level", "stars", "equipped_on", "updated")}
                      for a in store.rows("artifacts")],
        "resources": [{"name": r["name"], "amount": r["amount"], "updated": r["updated"]}
                      for r in store.rows("resources")],
        "unassigned_gear": loose_gear,
    }


def write(store, path):
    path.parent.mkdir(parents=True, exist_ok=True)
    tmp = path.with_suffix(".tmp")
    tmp.write_text(json.dumps(build(store), indent=2, ensure_ascii=False), encoding="utf-8")
    tmp.replace(path)
    return path
