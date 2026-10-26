"""Equipment slots anywhere on screen: every "+N" level label marks the bottom-right
corner of an item icon; the icon is then recognised against the game's icons.

Slots sit on a grid (artifact on top, then rows of two gear/rune columns), so
once a few are found the missing cells are checked too (their +N may be too
small for the text detector)."""
import re

import numpy as np

from .. import ocr

PLUS = re.compile(r"^[+tF]\s*(\d{1,2})$")


def plus_items(items, exclude_x=None):
    out = []
    for it in items:
        m = PLUS.match(it.text.replace(" ", ""))
        if not m:
            continue
        n = int(m.group(1))
        if n > 20:
            continue
        if exclude_x is not None and it.x0 > exclude_x:
            continue
        out.append((it, n))
    return out


def icon_box(it, size_k=4.6):
    s = it.h * size_k
    x1, y1 = it.x1 + it.h * 0.15, it.y1 + it.h * 0.1
    return int(x1 - s), int(y1 - s), int(x1), int(y1)


def _level(img, box):
    x0, y0, x1, y1 = box
    w, h = x1 - x0, y1 - y0
    crop = img[int(y0 + h * 0.68): y1, int(x0 + w * 0.45): x1]
    t, _ = ocr.read([crop])[0]
    m = re.search(r"(\d{1,2})", t)
    return int(m.group(1)) if m and int(m.group(1)) <= 20 else None


def read_slots(img, items, icons, exclude_x=None):
    """Returns (gear list, artifact dict or None, rune list)."""
    H, W = img.shape[:2]
    found = []
    pl = plus_items(items, exclude_x)
    if not pl:
        return [], None, []
    hmed = float(np.median([it.h for it, _ in pl]))
    for it, n in pl:
        s = hmed * 4.6
        x1, y1 = it.x1 + hmed * 0.15, it.y1 + hmed * 0.1
        b = (int(x1 - s), int(y1 - s), int(x1), int(y1))
        if b[0] < 0 or b[1] < 0 or b[2] > W or b[3] > H:
            continue
        found.append((b, n))
    if not found or icons is None:
        return [], None, []
    size = float(np.median([b[2] - b[0] for b, _ in found]))
    # Artifact = the slot clearly above all the others.
    found.sort(key=lambda x: x[0][1])
    art_box = None
    if len(found) >= 2 and found[1][0][1] - found[0][0][1] > size * 0.7:
        art_box = found.pop(0)
    # Fill the grid of the remaining slots.
    cells = list(found)
    if len(found) >= 2:
        xs = _groups([b[0] for b, _ in found], size * 0.5)
        ys = _groups([b[1] for b, _ in found], size * 0.5)
        if len(ys) >= 2:
            step = float(np.median(np.diff(ys)))
            ys = list(np.arange(ys[0], ys[-1] + 1, step)) if step > size * 0.8 else ys
        for x in xs:
            for y in ys:
                if any(abs(b[0] - x) < size * 0.4 and abs(b[1] - y) < size * 0.4 for b, _ in cells):
                    continue
                b = (int(x), int(y), int(x + size), int(y + size))
                if b[2] > W or b[3] > H:
                    continue
                cells.append((b, None))
    gear, runes, art = [], [], None
    if art_box is not None:
        b, n = art_box
        info = _multi(img, b, icons, "artifact")
        if info.get("name") and not info.get("unsure"):
            art = dict(info, level=n, pos=_c(b))
    for b, n in cells:
        g = _multi(img, b, icons, "gear")
        r = _multi(img, b, icons, "rune")
        ok = [x for x in (g, r) if x.get("name") and not x.get("unsure")]
        info = max(ok, key=lambda x: x.get("score", 0)) if ok else {}
        if not info.get("name") or info.get("unsure"):
            continue
        if n is None:
            if info.get("score", 0) < 0.7:
                continue
            n = _level(img, b)
        info = dict(info, level=n, pos=_c(b))
        (runes if info.get("kind") == "rune" else gear).append(info)
    return gear, art, runes


def _multi(img, b, icons, kind):
    """The artifact sits in a larger frame: try a few box sizes anchored at the level text."""
    best = {}
    x1, y1 = b[2], b[3]
    s0 = b[2] - b[0]
    for k in ((1.0, 1.12, 1.25, 0.9) if kind == "artifact" else (1.0, 1.1, 0.92)):
        s = int(s0 * k)
        for dx, dy in ((0, 0), (int(s0 * 0.06), int(s0 * 0.04))):
            bb = (x1 + dx - s, y1 + dy - s, x1 + dx, y1 + dy)
            if bb[0] < 0 or bb[1] < 0 or bb[2] > img.shape[1] or bb[3] > img.shape[0]:
                continue
            r = icons.classify(img[bb[1]:bb[3], bb[0]:bb[2]], kind=kind)
            if r.get("name") and not r.get("unsure") and r.get("score", 0) > best.get("score", 0):
                best = r
        if best.get("score", 0) > 0.85:
            break
    return best


def _c(b):
    return [int((b[0] + b[2]) / 2), int((b[1] + b[3]) / 2)]


def _groups(vals, tol):
    vals = sorted(vals)
    out = [[vals[0]]]
    for v in vals[1:]:
        if v - out[-1][-1] <= tol:
            out[-1].append(v)
        else:
            out.append([v])
    return [float(np.median(g)) for g in out]
