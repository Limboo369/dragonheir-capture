"""Read real game screenshots and check the values (run in CI on Windows before building)."""
import json
import sys
import tempfile
from pathlib import Path

import cv2

from dhreader.apply import apply
from dhreader.heroes import HeroMatcher
from dhreader.icons import Icons
from dhreader.pipeline import Reader
from dhreader.store import Store

FX = Path(__file__).parent / "fixtures"
fails = []


def check(name, got, want):
    ok = got == want
    print(("ok  " if ok else "FAIL"), name, got, "" if ok else f"(want {want})")
    if not ok:
        fails.append(name)


store = Store(Path(tempfile.mkdtemp()) / "account.json")
reader = Reader(icons=Icons.load(), heroes=HeroMatcher.load())

r = reader.read(cv2.imread(str(FX / "popup_oggok.jpg")))
apply(store, r, reader.context)
check("popup screen", r["screen"], "hero_popup")
check("popup hero", r["hero"]["name"], "Oggok")
check("popup level", r.get("level"), 59)
check("popup power", r.get("power"), 13005)
check("popup stats", r["stats"], {"hp": 22099, "atk": 974, "critRate": 41.4, "acc": 73, "def": 704, "ench": 72,
                                   "critDmg": 67.3, "res": 36, "haste": 0})
check("popup skills", r["skill_levels"], [1, 1, 1, 1])
check("popup artifact", (r["artifact"]["name"], r["artifact"]["level"]), ("Rift Hourglass", 12))
check("popup gear", [(g.get("set"), g.get("slot"), g.get("level")) for g in r["gear"] if not g.get("locked")],
      [("Barbarian", "Helm", 12), ("Barbarian", "Weapon", 12), ("Predator", "Armor", 12), ("Barbarian", "Gloves", 12)])

r = reader.read(cv2.imread(str(FX / "overview.jpg")))
apply(store, r, reader.context)
check("overview screen", r["screen"], "overview")
check("overview hero", r["hero"]["name"], "Lossenia")
check("overview power", r.get("power"), 11579)
named = {c["hero"]["name"]: (c.get("power"), c.get("stars")) for c in r["roster"] if c.get("hero")}
check("overview Auster card", named.get("Auster"), (10825, 2))
check("overview Ergander card", named.get("Ergander"), (9032, 1))
check("overview cards named", len(named) >= 6, True)

r = reader.read(cv2.imread(str(FX / "talent_auster.jpg")))
apply(store, r, reader.context)
check("talent screen", r["screen"], "manage_talent")
check("talent hero", (r.get("hero") or {}).get("name"), "Auster")
check("talent tiers", r["talents"], {"tiers_activated": 2, "branch": "top"})

exp = store.export()
check("export heroes", len(exp["heroes"]) >= 6, True)
json.dumps(exp)
print("FAILED:" if fails else "all passed", fails)
sys.exit(1 if fails else 0)
