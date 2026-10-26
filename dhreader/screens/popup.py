"""Hero info popup: "Lv.59 Oggok", power, 10 stats as "base +bonus", skill levels,
artifact and gear icons with their +levels.

Reference image: 2560x1600 (Darko's Oggok popup, 2026-10-25)."""
import re

import cv2

from .. import ocr
from ..layout import fit
from ..parse import base_bonus, int_or_none, plus_level

ANCHORS = {
    "HP": (910, 495.5),
    "Attack": (912, 563),
    "Crit Rate": (914, 628.5),
    "Accuracy": (913, 693),
    "ATK Interval": (913, 763),
    "Defense": (1322, 496.5),
    "Enlightenment": (1321, 560),
    "Crit Damage": (1323, 628),
    "Resistance": (1323, 695.5),
    "Skill Haste": (1325, 763),
}
# stat key -> (label, row centre y, column: 0 left, 1 right)
STATS = {
    "hp": ("HP", 495, 0), "atk": ("Attack", 562, 0), "critRate": ("Crit Rate", 628, 0), "acc": ("Accuracy", 694, 0),
    "def": ("Defense", 495, 1), "ench": ("Enlightenment", 562, 1), "critDmg": ("Crit Damage", 628, 1), "res": ("Resistance", 694, 1),
}
VALUE_X = {0: (1080, 1318), 1: (1488, 1722)}
TITLE = (900, 388, 1460, 458)
POWER = (1596, 398, 1760, 452)
RARITY = (560, 455, 820, 515)
INTERVAL = (1080, 740, 1240, 788)
# Starts on the last letter of the label: a lone "0" is not read on its own.
HASTE = (1470, 735, 1620, 795)
SKILL_BADGES = [(958, 815, 1010, 870), (1158, 815, 1210, 870), (1356, 815, 1408, 870), (1556, 815, 1608, 870)]
SKILL_ICONS = [(966, 826, 1084, 944), (1166, 826, 1284, 944), (1366, 826, 1484, 944), (1566, 826, 1684, 944)]
ARTIFACT = (1838, 448, 1958, 567)
GEAR = [(1771, 586, 1884, 699), (1912, 586, 2027, 699), (1771, 718, 1884, 832), (1912, 718, 2027, 832),
        (1771, 851, 1884, 964), (1912, 851, 2027, 964)]


def plus_box(b):
    """Bottom-right corner of an icon where the game prints +12."""
    x0, y0, x1, y1 = b
    return (x0 + (x1 - x0) * 0.45, y0 + (y1 - y0) * 0.68, x1, y1)


def badge(c):
    """Small level number in a circle: trim the ring and enlarge so the recogniser sees a digit."""
    if c is None:
        return None
    h, w = c.shape[:2]
    c = c[int(h * 0.15): int(h * 0.85), int(w * 0.18): int(w * 0.82)]
    return cv2.resize(c, None, fx=2, fy=2, interpolation=cv2.INTER_CUBIC)


def locked(img, f, b):
    x0, y0, x1, y1 = b
    t, _ = ocr.read([f.crop(img, (x0, y0 + (y1 - y0) * 0.4, x1, y0 + (y1 - y0) * 0.85))])[0]
    return bool(re.search(r"L\s*v", t))


def match(items):
    f, found = fit(items, ANCHORS, min_found=5)
    if f is None:
        return None
    # The popup has a "Lv.NN Name" title above the stats.
    return f


def parse(img, items, f, icons=None, names=None, context=None):
    out = {"screen": "hero_popup", "stats": {}, "stats_base": {}, "stats_bonus": {}}
    crops, keys = [], []
    for k, (_, y, col) in STATS.items():
        x0, x1 = VALUE_X[col]
        crops.append(f.crop(img, (x0, y - 27, x1, y + 27)))
        keys.append(k)
    for k, b in (("_title", TITLE), ("_power", POWER), ("_rarity", RARITY), ("_interval", INTERVAL), ("_haste", HASTE)):
        crops.append(f.crop(img, b))
        keys.append(k)
    for i, b in enumerate(SKILL_BADGES):
        crops.append(badge(f.crop(img, b)))
        keys.append(f"_sk{i}")
    for i, b in enumerate([ARTIFACT] + GEAR):
        crops.append(f.crop(img, plus_box(b)))
        keys.append(f"_lv{i}")
    reads = dict(zip(keys, ocr.read(crops)))

    pct = {"critRate", "critDmg"}
    for k in STATS:
        t, c = reads[k]
        b, x = base_bonus(t)
        if b is None and x is None:
            continue
        out["stats_base"][k] = b
        out["stats_bonus"][k] = x or 0
        tot = (b or 0) + (x or 0)
        out["stats"][k] = round(tot, 1) if k in pct else int(round(tot))
    m = re.search(r"(\d+)\s*$", reads["_haste"][0])
    v = int(m.group(1)) if m else None
    if v is not None:
        out["stats"]["haste"] = v
    m = re.search(r"(\d+(?:\.\d+)?)\s*s", reads["_interval"][0])
    if m:
        out["atk_interval"] = float(m.group(1))

    title = reads["_title"][0]
    m = re.search(r"L\s*[vV]\s*\.?\s*(\d{1,3})\s*(.*)", title)
    if m:
        out["level"] = int(m.group(1))
        out["name_raw"] = m.group(2).strip()
    else:
        out["name_raw"] = title
    if names is not None and out.get("name_raw"):
        out["hero"] = names.hero(out["name_raw"])
    p = int_or_none(reads["_power"][0])
    if p:
        out["power"] = p
    r = reads["_rarity"][0].strip().title()
    if r in ("Legendary", "Epic", "Rare", "Common", "Mythic", "Uncommon"):
        out["rarity"] = r

    skills = []
    for i in range(4):
        v = int_or_none(reads[f"_sk{i}"][0])
        skills.append(v if v and 1 <= v <= 10 else None)
    out["skill_levels"] = skills

    slots = [ARTIFACT] + GEAR
    pieces = []
    for i, b in enumerate(slots):
        crop = f.crop(img, b)
        lv = plus_level(reads[f"_lv{i}"][0])
        info = {"slot_index": i, "level": lv}
        if i >= 5 and locked(img, f, b):
            info = {"slot_index": i, "locked": True}
            pieces.append(info)
            continue
        if icons is not None and crop is not None:
            info.update(icons.classify(crop, kind="artifact" if i == 0 else "gear"))
        pieces.append(info)
    out["artifact"] = pieces[0]
    out["gear"] = [p for p in pieces[1:]]
    return out
