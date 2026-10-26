"""Manage -> Talent tab: which talent tiers are activated (I-VI) and which branch row is chosen.

Geometry comes from the "Lv.90" labels under the locked tiers V and VI, or from
the "Activate Talent" button when those are unlocked (Darko's 1282x752 window
was the reference)."""
import re

import cv2
import numpy as np

from ..layout import simplify
from . import roster

ROMAN = ["I", "II", "III", "IV", "V", "VI"]


def _geometry(items, W, H):
    lv = sorted([it for it in items if re.fullmatch(r"lv\.?90", it.text.replace(" ", "").lower())], key=lambda it: it.cx)
    if len(lv) >= 2:
        pitch = lv[-1].cx - lv[-2].cx
        xs = [lv[-1].cx + (i - 5) * pitch for i in range(6)]
        pill_y = lv[-1].cy - 0.33 * pitch
        return xs, pill_y, pitch
    btn = [it for it in items if simplify(it.text) in ("activatetalent", "activatetalents")]
    if btn:
        b = btn[0]
        pitch = b.h * 5.6
        xs = [b.cx - 0.37 * pitch + (i - 5) * pitch for i in range(6)]
        pill_y = b.cy - 1.51 * pitch
        return xs, pill_y, pitch
    return None


def detect(img, items):
    H, W = img.shape[:2]
    if not any(simplify(it.text).startswith("talent") or simplify(it.text) == "activatetalent" for it in items):
        return None
    g = _geometry(items, W, H)
    if g is None:
        return None
    left = [it for it in items if it.cx < W * 0.2]
    cards = roster.grid(left)
    if len(cards) < 2:
        return None
    return g, cards


def _sample(hsv, x, y, r):
    x, y, r = int(x), int(y), max(2, int(r))
    p = hsv[max(0, y - r): y + r + 1, max(0, x - r): x + r + 1]
    if p.size == 0:
        return 0, 0
    return float(p[..., 2].mean()), float(p[..., 1].mean())


def parse(img, items, det, icons=None, names=None, context=None):
    (xs, py, pitch), cards = det
    hsv = cv2.cvtColor(img, cv2.COLOR_BGR2HSV)
    lit = []
    for x in xs:
        v, s = _sample(hsv, x, py, pitch * 0.07)
        lit.append(v > 170 and s > 70)
    n = 0
    while n < 6 and lit[n]:
        n += 1
    rows_y = [py - 3.08 * pitch, py - 2.04 * pitch, py - 1.0 * pitch]
    branch = None
    bx = xs[5] + 0.55 * pitch
    marks = [_sample(hsv, bx, y, pitch * 0.04) for y in rows_y]
    bright = [v for v, s in marks]
    if max(bright) > 120 and max(bright) - sorted(bright)[1] > 40:
        branch = ["top", "middle", "bottom"][int(np.argmax(bright))]
    out = {"screen": "manage_talent", "uses_context": True,
           "talents": {"tiers_activated": n, "branch": branch}}
    cards = roster.refine(img, cards)
    sel = roster.selected(img, cards)
    if sel is not None:
        c = cards[sel]
        out["card"] = {"power": c[4], "stars": roster.stars(img, c), "box": [int(v) for v in c[:4]]}
        out["power"], out["stars"] = c[4], out["card"]["stars"]
    out["roster"] = roster.cards_info(img, cards, icons)
    return out
