"""Item detail cards (click a gear piece or an artifact): name, type, +level, main stat,
substats, set name / artifact effect tier, and for artifacts "<Hero> (Equipped)".
Read from the OCR lines only, so position and window size do not matter."""
import re

import cv2
import numpy as np

from ..layout import simplify
from ..names import game, key

STATS = ["Attack", "ATK%", "HP", "HP%", "Defense", "DEF%", "Accuracy", "Resistance", "Enlightenment",
         "Crit Rate", "Crit Damage", "Skill Haste", "Attack Speed", "ATK Interval"]
STAT_KEYS = {simplify(s): s for s in STATS}
GEAR_TYPES = {"armor": "Armor", "helm": "Helm", "helmet": "Helm", "gloves": "Gloves", "weapon": "Weapon",
              "positiverune": "Positive Rune", "negativerune": "Negative Rune"}
VAL = re.compile(r"^\+?\s*(\d[\d,]*(?:\.\d+)?)\s*(%?)$")


def _stat_label(t):
    k = simplify(t.replace("％", "%"))
    k = k.replace("atk", "atk")
    if "%" in t:
        k2 = simplify(t.split("%")[0]) + "%"
        for s in STATS:
            if s.endswith("%") and simplify(s[:-1]) + "%" == k2:
                return s
    for s in STATS:
        if not s.endswith("%") and simplify(s) == k:
            return s
    return None


def _value_right_of(lab, items):
    best = None
    for it in items:
        if it is lab or abs(it.cy - lab.cy) > lab.h * 0.6 or it.x0 < lab.x1:
            continue
        m = VAL.match(it.text.replace(" ", ""))
        if m and (best is None or it.x0 < best[0].x0):
            best = (it, m.group(1).replace(",", "") + m.group(2))
    if best:
        return best[1]
    # label and value read as one line: "Crit Damage +6.6%"
    m = re.search(r"\+\s*(\d[\d,]*(?:\.\d+)?\s*%?)\s*$", lab.text)
    return m.group(1).replace(" ", "") if m else None


def find_type(items):
    for it in items:
        k = simplify(it.text)
        if k in GEAR_TYPES or k == "artifact":
            return it, ("Artifact" if k == "artifact" else GEAR_TYPES[k])
    return None, None


def match(items):
    typ, kind = find_type(items)
    if typ is None:
        return None
    stats = [it for it in items if it.y0 > typ.y0 and _stat_label(it.text.split("+")[0].strip())]
    if not stats:
        return None
    return typ, kind


def parse(img, items, det, icons=None, names=None, context=None):
    typ, kind = det
    g = game()
    # Title: lines just above the type line, left-aligned with it.
    above = sorted([it for it in items if it.y1 <= typ.y0 + 2 and abs(it.x0 - typ.x0) < typ.h * 1.5 and typ.y0 - it.y1 < typ.h * 3],
                   key=lambda it: it.y0)
    title = " ".join(it.text for it in above)
    # Stats in reading order below the type line, within the card's column.
    rows = []
    for it in sorted(items, key=lambda it: it.cy):
        if it.y0 <= typ.y1:
            continue
        lab = _stat_label(re.split(r"\+", it.text)[0].strip())
        if lab:
            v = _value_right_of(it, items)
            if v is not None:
                rows.append({"stat": lab, "value": "+" + v})
    level = None
    for it in items:
        m = re.fullmatch(r"[+t]\s*(\d{1,2})", it.text.replace(" ", ""))
        if m and it.y1 <= typ.y1 + typ.h * 4 and it.x1 <= typ.x0 + typ.h:
            level = int(m.group(1))
    out = {"screen": "item_" + ("artifact" if kind == "Artifact" else "gear"), "uses_context": True}
    if kind == "Artifact":
        an = _best_name(title, [a["name"] for a in g["artifacts"]])
        out["item"] = {"name": an or title, "level": level, "stats": rows, "tier": _tier(img, items, typ)}
        for it in items:
            m = re.match(r"(.+?)\s*\(\s*Equipped\s*\)", it.text)
            if m and names is not None:
                out["hero"] = names.hero(m.group(1))
    else:
        setname = None
        snames = [s["name"] for s in g["sets"]]
        for i, it in enumerate(sorted(items, key=lambda it: it.cy)):
            if re.match(r"^\d\s*-?\s*piece", it.text.replace(" ", ""), re.I):
                prev = [o for o in items if o.y1 <= it.y0 + 2 and it.y0 - o.y1 < it.h * 2.5]
                if prev:
                    cand = max(prev, key=lambda o: o.y1)
                    setname = _best_name(cand.text, snames) or setname
        if setname is None:
            # Set name line sits between the substats and the effect text.
            for it in items:
                n = _best_name(it.text, snames, 0.85)
                if n and it.y0 > typ.y1:
                    setname = n
        item = _best_item(title, g["gear_items"])
        if setname is None and item:
            setname = item.get("set")
        main = rows[0] if rows else None
        out["item"] = {"name": (item or {}).get("name") or title, "slot": kind if kind in ("Helm", "Armor", "Gloves", "Weapon") else kind,
                       "set": setname, "rarity": (item or {}).get("rarity"), "level": level,
                       "main_stat": f"{main['stat']} {main['value']}" if main else None,
                       "substats": [f"{r['stat']} {r['value']}" for r in rows[1:5]]}
        if kind not in ("Helm", "Armor", "Gloves", "Weapon"):
            out["item"]["slot"] = kind
    return out


def _best_name(text, options, min_ratio=0.8):
    from difflib import SequenceMatcher

    k = key(text)
    if not k:
        return None
    best, br = None, 0
    for o in options:
        r = SequenceMatcher(None, k, key(o)).ratio()
        if r > br:
            best, br = o, r
    return best if br >= min_ratio else None


def _best_item(title, items):
    from difflib import SequenceMatcher

    k = key(title)
    if not k:
        return None
    best, br = None, 0
    for it in items:
        r = SequenceMatcher(None, k, key(it["name"]).rstrip("+")).ratio()
        if r > br:
            best, br = it, r
    return best if br >= 0.8 else None


def _tier(img, items, typ):
    """Artifact effect tier: index (1-6) of the yellow value in a '2.5%/3%/3.5%/...' list."""
    for it in sorted(items, key=lambda it: it.cy):
        if it.y0 <= typ.y1 or it.text.count("/") < 2:
            continue
        x0, y0, x1, y1 = int(it.x0), int(it.y0), int(it.x1), int(it.y1)
        crop = img[y0:y1, x0:x1]
        if crop.size == 0:
            continue
        hsv = cv2.cvtColor(crop, cv2.COLOR_BGR2HSV)
        yellow = ((hsv[..., 0] > 15) & (hsv[..., 0] < 40) & (hsv[..., 1] > 120) & (hsv[..., 2] > 150)).sum(axis=0)
        if yellow.sum() < 10:
            continue
        # Map the yellow columns to the n-th value of the list by character position.
        t = it.text
        cx = float(np.average(np.arange(len(yellow)), weights=yellow)) / max(1, len(yellow))
        pos = int(cx * len(t))
        before = t[:pos]
        # values that ended before this line started count too (lists wrap over two lines)
        prev = [o for o in items if o.cy < it.cy and o.y0 > typ.y1 and o.text.count("/") >= 1 and it.cy - o.cy < it.h * 1.6]
        n_prev = sum(o.text.count("/") for o in prev)
        return n_prev + before.count("/") + 1
    return None
