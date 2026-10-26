"""Screens that print the selected hero's NAME next to a card list:
Manage -> first tab (big "Resonance Level" number, name, power) and the Overview
roster grid (name, power on the right). They teach us which card is which hero."""
import re

from ..layout import simplify
from . import roster


def _name_item(items, names, W):
    best = None
    for it in items:
        if it.cx < W * 0.45 or len(simplify(it.text)) < 3:
            continue
        h = names.hero(it.text, min_ratio=0.86)
        if h and (best is None or it.h > best[0].h):
            best = (it, h)
    return best


def detect(img, items, names):
    H, W = img.shape[:2]
    res = [it for it in items if simplify(it.text).startswith("resonancelevel")]
    over = [it for it in items if simplify(it.text).startswith("overview") and it.cx < W * 0.3]
    if not res and not over:
        return None
    nm = _name_item(items, names, W)
    if nm is None:
        return None
    if res:
        left = [it for it in items if it.cx < W * 0.2]
        kind = "manage_info"
    else:
        left = [it for it in items if it.cx < W * 0.55]
        kind = "overview"
    cards = roster.grid(left)
    return kind, res[0] if res else None, nm, cards


def parse(img, items, det, icons=None, names=None, context=None):
    kind, res, (nit, hero), cards = det
    out = {"screen": kind, "hero": hero}
    if res is not None:
        above = [it for it in items if it.y1 <= res.y0 + res.h * 0.5 and res.y0 - it.y1 < res.h * 4
                 and abs(it.cx - res.cx) < res.h * 4 and re.fullmatch(r"\d{1,3}", it.text.strip())]
        if above:
            out["level"] = int(max(above, key=lambda it: it.y1).text.strip())
    # power: the number closest to the name in the right-hand panel
    nums = []
    for it in items:
        m = re.fullmatch(r"\D{0,2}(\d{3,6})", it.text.replace(" ", ""))
        if m and it.x0 > nit.x0 - nit.h * 1.0 and abs(it.cy - nit.cy) < nit.h * 12 and it is not nit:
            nums.append((abs(it.cy - nit.cy) + abs(it.cx - nit.cx) * 0.3, int(m.group(1))))
    if nums:
        out["power"] = min(nums)[1]
    if cards:
        cards = roster.refine(img, cards)
        sel = roster.selected(img, cards)
        if sel is not None:
            c = cards[sel]
            out["card"] = {"power": c[4], "stars": roster.stars(img, c), "box": [int(v) for v in c[:4]]}
            if out["card"]["stars"] is not None:
                out["stars"] = out["card"]["stars"]
            if out.get("power") is None:
                out["power"] = c[4]
        out["roster"] = roster.cards_info(img, cards, icons)
    return out
