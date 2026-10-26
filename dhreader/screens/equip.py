"""Manage -> armour tab: 10 hero stats (base +bonus), 7 equipment slots, the selected
hero card in the roster column.

Language independent: the stat rows are found as a column of left-aligned
lines on the right side with a regular spacing; the row order is fixed
(HP, Defense, Attack, Enlightenment, Crit Rate, Crit Damage, Accuracy,
Resistance, ATK Interval, Skill Haste). Slots are found by their "+N" level."""
import re

import cv2
import numpy as np

from .. import ocr
from ..parse import base_bonus, int_or_none
from . import roster, slots

ORDER = ["hp", "def", "atk", "ench", "critRate", "critDmg", "acc", "res", "interval", "haste"]
LABELS = {"hp": ["hp"], "def": ["defense"], "atk": ["attack"], "ench": ["enlightenment"], "critRate": ["critrate"],
          "critDmg": ["critdamage"], "acc": ["accuracy"], "res": ["resistance"], "interval": ["atkinterval"],
          "haste": ["skillhaste"]}
INTERVAL = re.compile(r"\d[.,]\d\d\s*(s|sec|сек|c)", re.I)


def stat_column(items, W, H):
    """(x0, y_of_row0, pitch) of the stats list, or None."""
    right = [it for it in items if it.x0 > W * 0.62 and it.h < H * 0.05]
    if len(right) < 6:
        return None
    best = None
    for it in right:
        col = [o for o in right if abs(o.x0 - it.x0) < max(6, it.h * 0.35)]
        if len(col) > (len(best) if best else 0):
            best = col
    if not best or len(best) < 6:
        return None
    best.sort(key=lambda o: o.cy)
    ys = [o.cy for o in best]
    d = np.diff(ys)
    pitch = float(np.median(d))
    if pitch <= 0:
        return None
    x0 = float(np.median([o.x0 for o in best]))
    # Which row is which: the ATK Interval row shows "2.50s"; crit rows show '%'.
    anchors = []
    for o in best:
        k = None
        if INTERVAL.search(o.text):
            k = 8
        anchors.append((o.cy, k))
    ai = [y for y, k in anchors if k == 8]
    if ai:
        y0 = ai[0] - 8 * pitch
    else:
        # The first row under the header is HP; the header sits a little to the left of the column.
        y0 = ys[0]
    keep = [o for o in best if -0.3 < (o.cy - y0) / pitch < 9.3 and abs((o.cy - y0) / pitch - round((o.cy - y0) / pitch)) < 0.3]
    if len(keep) < 6:
        return None
    return x0, y0, pitch, keep


def match(items, W=None, H=None):
    return None  # needs the image size: see detect()


def detect(img, items):
    H, W = img.shape[:2]
    col = stat_column(items, W, H)
    if col is None:
        return None
    left = [it for it in items if it.cx < W * 0.2]
    cards = roster.grid(left)
    if len(cards) < 2:
        return None
    return col, cards


def parse(img, items, det, icons=None, names=None, context=None):
    (x0, y0, p, colitems), cards = det
    H, W = img.shape[:2]
    out = {"screen": "manage_equip", "stats": {}, "stats_base": {}, "stats_bonus": {}}
    crops = []
    for i in range(10):
        y = y0 + i * p
        a, b = int(x0 + 3.45 * p), int(x0 + 8.1 * p)
        crops.append(img[max(0, int(y - 0.45 * p)): int(y + 0.45 * p), max(0, a): min(W, b)])
    reads = ocr.read(crops)
    pct = {"critRate", "critDmg"}
    for k, (t, c) in zip(ORDER, reads):
        if k == "interval":
            m = re.search(r"(\d[.,]\d\d)", t)
            if m:
                out["atk_interval"] = float(m.group(1).replace(",", "."))
            continue
        t = t.replace("%", "% ").strip()
        if t in ("o", "O"):
            t = "0"
        t = re.sub(r"^[^\d]+(?=\d)", "", t)
        b, x = base_bonus(t)
        if b is None and x is None:
            continue
        out["stats_base"][k] = b
        out["stats_bonus"][k] = x or 0
        tot = (b or 0) + (x or 0)
        out["stats"][k] = round(tot, 1) if k in pct else int(round(tot))
    # slots
    # Slot levels are small: read the area between the roster and the stats again at full size.
    xa = int(max(c[2] for c in cards)) + 2
    xb = int(x0 - p * 0.5)
    sub = ocr.detect(img[:, xa:xb], max_side=4000) if xb - xa > 50 else []
    for it in sub:
        it.x0 += xa
        it.x1 += xa
    out["gear"], out["artifact"], out["runes"] = slots.read_slots(img, sub, icons)
    # selected hero card
    sel = roster.selected(img, cards)
    out["card"] = None
    if sel is not None:
        c = cards[sel]
        out["card"] = {"power": c[4], "stars": roster.stars(img, c), "box": [int(v) for v in c[:4]]}
        out["power"] = c[4]
        out["stars"] = out["card"]["stars"]
    out["roster"] = roster.cards_info(img, cards, icons)
    out["uses_context"] = True
    return out
