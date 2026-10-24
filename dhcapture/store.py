"""Local SQLite store: every read capture, plus the merged latest account state."""
import json
import sqlite3
import time

from .names import is_known_hero, normalize
from datetime import datetime, timezone

SCHEMA_SQL = """
CREATE TABLE IF NOT EXISTS captures (
  id INTEGER PRIMARY KEY, ts TEXT, phash TEXT, image TEXT,
  screen_type TEXT, data TEXT, cost REAL, error TEXT
);
CREATE TABLE IF NOT EXISTS heroes (
  key TEXT PRIMARY KEY, name TEXT, rarity TEXT, level INTEGER, stars INTEGER,
  awakening TEXT, power REAL, element TEXT, school TEXT,
  stats TEXT, skills TEXT, updated TEXT, detailed INTEGER
);
CREATE TABLE IF NOT EXISTS gear (
  key TEXT PRIMARY KEY, hero TEXT, slot TEXT, set_name TEXT, rarity TEXT,
  level INTEGER, main_stat TEXT, substats TEXT, updated TEXT
);
CREATE TABLE IF NOT EXISTS artifacts (
  key TEXT PRIMARY KEY, name TEXT, rarity TEXT, level INTEGER, stars INTEGER,
  equipped_on TEXT, updated TEXT
);
CREATE TABLE IF NOT EXISTS resources (key TEXT PRIMARY KEY, name TEXT, amount REAL, updated TEXT);
CREATE TABLE IF NOT EXISTS player (key TEXT PRIMARY KEY, v TEXT, updated TEXT);
"""


def now_iso():
    return datetime.now(timezone.utc).replace(microsecond=0).isoformat()


def norm(name):
    return "".join(ch for ch in (name or "").lower() if ch.isalnum())


class Store:
    def __init__(self, path):
        path.parent.mkdir(parents=True, exist_ok=True)
        self.db = sqlite3.connect(str(path), check_same_thread=False)
        self.db.row_factory = sqlite3.Row
        self.last_hero = (None, 0.0)  # (name, time) of the last hero screen, for gear without a name
        self.db.executescript(SCHEMA_SQL)
        cols = {r[1] for r in self.db.execute("PRAGMA table_info(heroes)")}
        if "detailed" not in cols:  # databases from v0.1
            self.db.execute("ALTER TABLE heroes ADD COLUMN detailed INTEGER")
        for r in self.db.execute("SELECT key, name FROM heroes").fetchall():
            if not is_known_hero(r["name"]):  # misreads saved by older versions
                self.db.execute("DELETE FROM heroes WHERE key=?", (r["key"],))
        self.db.commit()

    def spent_today(self) -> float:
        day = time.strftime("%Y-%m-%d", time.gmtime())
        r = self.db.execute("SELECT COALESCE(SUM(cost),0) FROM captures WHERE ts LIKE ?", (day + "%",)).fetchone()
        return float(r[0])

    def spent_total(self) -> float:
        return float(self.db.execute("SELECT COALESCE(SUM(cost),0) FROM captures").fetchone()[0])

    def log_capture(self, phash, image, data, cost, error):
        self.db.execute(
            "INSERT INTO captures (ts, phash, image, screen_type, data, cost, error) VALUES (?,?,?,?,?,?,?)",
            (now_iso(), str(phash), image, (data or {}).get("screen_type"),
             json.dumps(data) if data else None, cost, error),
        )
        self.db.commit()

    # Merge: a field shown on a newer screen overwrites the old value; a field the
    # newer screen does not show (null) keeps the old value.
    def _upsert(self, table, key, row):
        old = self.db.execute(f"SELECT * FROM {table} WHERE key=?", (key,)).fetchone()
        if old:
            merged = dict(old)
            merged.update({k: v for k, v in row.items() if v not in (None, "", "[]")})
        else:
            merged = row
        merged["key"], merged["updated"] = key, now_iso()
        cols = ",".join(merged)
        self.db.execute(
            f"INSERT OR REPLACE INTO {table} ({cols}) VALUES ({','.join('?' * len(merged))})",
            list(merged.values()),
        )

    def merge(self, data):
        if not data or data.get("confidence") == "low":
            return 0
        data = normalize(data)
        # A hero's own screen (stats/skills or gear) counts as read in detail for the sweep.
        detail = 1 if data.get("screen_type") == "hero_detail" else None
        n = 0
        for h in data.get("heroes", []):
            if not h.get("name"):
                continue
            self._upsert("heroes", norm(h["name"]), {
                "name": h["name"], "rarity": h.get("rarity"), "level": h.get("level"),
                "stars": h.get("stars"), "awakening": h.get("awakening"), "power": h.get("power"),
                "element": h.get("element"), "school": h.get("school"),
                "stats": json.dumps(h.get("stats") or []), "skills": json.dumps(h.get("skills") or []),
                "detailed": detail,
            })
            n += 1
        # Gear and artifact screens often don't repeat the hero's name: use the one hero
        # on this screen, else the hero opened in the last 3 minutes.
        names = [h["name"] for h in data.get("heroes", []) if h.get("name")]
        if len(names) == 1:
            self.last_hero = (names[0], time.time())
        owner = names[0] if len(names) == 1 else (
            self.last_hero[0] if time.time() - self.last_hero[1] < 180 else None)
        hero_screen = data.get("screen_type") in ("hero_detail", "hero_gear", "gear_detail")
        for i, g in enumerate(data.get("gear", [])):
            g["hero"] = g.get("hero") or (owner if hero_screen else None)
            g["slot"] = g.get("slot") or (f"Slot {i + 1}" if data.get("screen_type") == "hero_gear" else None)
            if not (g["hero"] and g["slot"]):
                continue  # can't tell where this piece belongs
            self._upsert("gear", norm(g["hero"]) + ":" + norm(g["slot"]), {
                "hero": g["hero"], "slot": g["slot"], "set_name": g.get("set"),
                "rarity": g.get("rarity"), "level": g.get("level"), "main_stat": g.get("main_stat"),
                "substats": json.dumps(g.get("substats") or []),
            })
            n += 1
        for a in data.get("artifacts", []):
            if not a.get("name"):
                continue
            if not a.get("equipped_on") and hero_screen and owner:
                a["equipped_on"] = owner
            self._upsert("artifacts", norm(a["name"]), {
                "name": a["name"], "rarity": a.get("rarity"), "level": a.get("level"),
                "stars": a.get("stars"), "equipped_on": a.get("equipped_on"),
            })
            n += 1
        for r in data.get("resources", []):
            if r.get("name") is None:
                continue
            self._upsert("resources", norm(r["name"]), {"name": r["name"], "amount": r.get("amount")})
            n += 1
        for k, v in (data.get("player") or {}).items():
            if v is not None:
                self.db.execute("INSERT OR REPLACE INTO player VALUES (?,?,?)", (k, json.dumps(v), now_iso()))
                n += 1
        self.db.commit()
        return n

    def sweep(self):
        """(heroes done, heroes known, names still missing a step). Done = overview and gear read."""
        rows = self.hero_status()
        todo = [h["name"] for h in rows if not (h["detailed"] and h["gear"])]
        return len(rows) - len(todo), len(rows), todo

    def hero_status(self):
        """Per hero: what is known so far, for the checklist in the window."""
        gear = {}
        for r in self.db.execute("SELECT key FROM gear"):
            k = r["key"].split(":")[0]
            gear[k] = gear.get(k, 0) + 1
        arts = {}
        for r in self.db.execute("SELECT name, equipped_on FROM artifacts WHERE equipped_on IS NOT NULL"):
            arts[norm(r["equipped_on"])] = r["name"]
        out = []
        for r in self.db.execute("SELECT key, name, level, power, detailed FROM heroes"):
            out.append({"name": r["name"], "level": r["level"], "power": r["power"],
                        "detailed": bool(r["detailed"]), "gear": gear.get(r["key"], 0),
                        "artifact": arts.get(r["key"])})
        out.sort(key=lambda x: (bool(x["detailed"] and x["gear"]), -(x["power"] or 0), x["name"]))
        return out

    def reset(self):
        for t in ("heroes", "gear", "artifacts", "resources", "player"):
            self.db.execute(f"DELETE FROM {t}")
        self.db.commit()

    def counts(self):
        return {t: self.db.execute(f"SELECT COUNT(*) FROM {t}").fetchone()[0]
                for t in ("heroes", "gear", "artifacts", "resources")}

    def rows(self, table):
        return [dict(r) for r in self.db.execute(f"SELECT * FROM {table} ORDER BY key")]
