"""What we know about the account, kept in data/account.json next to the program."""
import json
import threading
import time
from datetime import datetime, timezone

from .paths import app_dir

STAT_LABELS = [("hp", "HP", ""), ("atk", "Attack", ""), ("def", "Defense", ""), ("critRate", "Crit Rate", "%"),
               ("critDmg", "Crit Damage", "%"), ("acc", "Accuracy", ""), ("res", "Resistance", ""),
               ("ench", "Enlightenment", ""), ("haste", "Skill Haste", "")]
GEAR_SLOTS = ["Helm", "Weapon", "Armor", "Gloves", "Slot 5", "Slot 6"]


class Store:
    def __init__(self, path=None):
        self.path = path or (app_dir() / "data" / "account.json")
        self.lock = threading.Lock()
        self.data = {"heroes": {}, "player": {}}
        if self.path.exists():
            try:
                self.data = json.loads(self.path.read_text(encoding="utf-8"))
            except Exception:
                self.path.rename(self.path.with_suffix(".broken.json"))

    def save(self):
        self.path.parent.mkdir(parents=True, exist_ok=True)
        tmp = self.path.with_suffix(".tmp")
        tmp.write_text(json.dumps(self.data, indent=1, ensure_ascii=False), encoding="utf-8")
        tmp.replace(self.path)

    def reset(self):
        with self.lock:
            self.data = {"heroes": {}, "player": {}}
            self.save()

    def hero(self, hero):
        """Record for a hero dict from names.game() (created if new)."""
        hid = str(hero["id"])
        h = self.data["heroes"].setdefault(hid, {"id": hero["id"], "name": hero["name"]})
        for k in ("rarity", "element", "school"):
            if hero.get(k):
                h.setdefault(k, hero[k])
        return h

    def merge(self, hero, fields):
        """Put what one screen showed into the hero's record. Returns the list of fields changed."""
        changed = []
        with self.lock:
            h = self.hero(hero)
            now = time.time()
            for k, v in fields.items():
                if v is None or v == {} or v == []:
                    continue
                if isinstance(v, dict) and isinstance(h.get(k), dict) and k not in ("artifact", "talents"):
                    for kk, vv in v.items():
                        if vv is not None and h[k].get(kk) != vv:
                            h[k][kk] = vv
                            changed.append(f"{k}.{kk}")
                elif h.get(k) != v:
                    h[k] = v
                    changed.append(k)
            if changed:
                h["updated"] = now
                self.save()
        return changed

    def heroes(self):
        return sorted(self.data["heroes"].values(), key=lambda h: -(h.get("power") or 0))

    # ---- export in the Companion's "dragonheir-account" format ----
    def export(self):
        heroes, arts = [], []
        for h in self.heroes():
            stats = []
            for k, label, unit in STAT_LABELS:
                v = (h.get("stats") or {}).get(k)
                if v is not None:
                    stats.append({"stat": label, "value": f"{v}{unit}"})
            gear = []
            for g in h.get("gear") or []:
                if g.get("locked") or not (g.get("set") or g.get("level") is not None):
                    continue
                gear.append({k: g.get(k) for k in ("slot", "set", "rarity", "level", "main_stat", "substats") if g.get(k) is not None})
            a = h.get("artifact") or {}
            art = None
            if a.get("name"):
                art = {k: a.get(k) for k in ("name", "rarity", "level", "stars") if a.get(k) is not None}
                arts.append(dict(art, equipped_on=h["name"]))
            heroes.append({
                "name": h["name"], "game_id": h["id"], "level": h.get("level"), "stars": h.get("stars"),
                "rarity": h.get("rarity"), "element": h.get("element"), "school": h.get("school"), "power": h.get("power"),
                "stats": stats, "stats_base": h.get("stats_base"), "stats_bonus": h.get("stats_bonus"),
                "skills": [{"level": v} for v in (h.get("skill_levels") or [])],
                "artifact": art, "gear": gear, "talents": h.get("talents"),
            })
        return {
            "format": "dragonheir-account", "version": 2, "v": 2, "source": "dragonheir-reader",
            "exported": datetime.now(timezone.utc).isoformat(timespec="seconds"),
            "player": self.data.get("player") or {}, "heroes": heroes, "artifacts": arts,
        }

    def write_export(self, path=None):
        path = path or (app_dir() / "data" / "dragonheir-account.json")
        path.parent.mkdir(parents=True, exist_ok=True)
        path.write_text(json.dumps(self.export(), indent=1, ensure_ascii=False), encoding="utf-8")
        return path
