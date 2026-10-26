"""Hero cards (roster grid in Overview / Manage, and the column on the Manage tabs).

A card = portrait, power number with a fist icon, and a row of 6 diamonds
(lit = earned). We find the power numbers with OCR, rebuild the card grid from
their spacing, then name each card by matching its picture against the
game's hero card icons."""
import re

import cv2
import numpy as np

from ..parse import int_or_none

# Card geometry in units of the horizontal card pitch P, relative to the power text centre.
TOP, BOTTOM, HALF_W = -0.96, 0.30, 0.475
STAR_X = [0.175, 0.305, 0.435, 0.565, 0.70, 0.835]   # fraction of card width
STAR_Y = 0.903                                        # fraction of card height


def power_items(items):
    out = []
    for it in items:
        t = it.text.replace(" ", "")
        m = re.fullmatch(r"\D{0,2}(\d{3,6})", t)
        if m and it.h > 6:
            out.append((it, int(m.group(1))))
    return out


def _cluster(vals, tol):
    vals = sorted(vals)
    groups = [[vals[0]]]
    for v in vals[1:]:
        if v - groups[-1][-1] <= tol:
            groups[-1].append(v)
        else:
            groups.append([v])
    return [float(np.median(g)) for g in groups]


def grid(items):
    """Card boxes [(x0, y0, x1, y1, power or None)] or [] when this is not a card grid."""
    pw = power_items(items)
    if len(pw) < 3:
        return []
    hmed = float(np.median([it.h for it, _ in pw]))
    # Keep numbers that line up with at least one other number in their row or column
    # (drops the big power figure on a hero detail panel).
    pw = [(it, v) for it, v in pw if abs(it.h - hmed) < hmed * 0.35]
    pw = [(it, v) for it, v in pw
          if sum(1 for o, _ in pw if o is not it and abs(o.x1 - it.x1) < hmed * 1.5) >= 1
          or sum(1 for o, _ in pw if o is not it and abs(o.cy - it.cy) < hmed * 0.8) >= 1]
    if len(pw) < 3:
        return []
    xs = _cluster([it.x1 for it, _ in pw], hmed * 1.5)
    ys = _cluster([it.cy for it, _ in pw], hmed * 1.2)
    if len(xs) < 2 and len(ys) < 2:
        return []
    # Pitch = typical distance to the nearest card in the same row.
    near = []
    for it, _ in pw:
        d = [abs(o.cx - it.cx) for o, _ in pw if o is not it and abs(o.cy - it.cy) < hmed * 0.8 and abs(o.cx - it.cx) > hmed * 2]
        if d:
            near.append(min(d))
    if near:
        P = float(np.median(near))
    else:
        d = np.diff(ys)
        P = float(np.min(d)) / 1.37 if len(d) else None
    if not P:
        return []
    # Drop numbers that sit apart from the main block (e.g. the selected hero's power on a side panel).
    pw = _main_block(pw, P, hmed)
    if len(pw) < 3:
        return []
    ys = _cluster([it.cy for it, _ in pw], hmed * 1.2)
    # Fit a regular lattice through the number centres (columns every P, rows every R).
    cols = _lattice([it.cx for it, _ in pw], P)
    R = _row_pitch(ys, P)
    rows = _lattice([it.cy for it, _ in pw], R)
    cards = []
    for cy in rows:
        for cx in cols:
            p = None
            for it, v in pw:
                if abs(it.cy - cy) < hmed and abs(it.cx - cx) < P * 0.45:
                    p = v
            cards.append((cx - HALF_W * P, cy + TOP * P, cx + HALF_W * P, cy + BOTTOM * P, p))
    return cards


def _main_block(pw, P, hmed):
    xs = sorted(it.cx for it, _ in pw)
    runs, cur = [], [xs[0]]
    for x in xs[1:]:
        if x - cur[-1] > P * 1.6:
            runs.append(cur)
            cur = [x]
        else:
            cur.append(x)
    runs.append(cur)
    main = max(runs, key=len)
    lo, hi = main[0] - 1, main[-1] + 1
    return [(it, v) for it, v in pw if lo <= it.cx <= hi]


def refine(img, cards):
    """Snap card edges to the dark gaps between cards."""
    if not cards:
        return cards
    g = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY).astype(np.float32)
    H, W = g.shape
    out = []
    for (x0, y0, x1, y1, p) in cards:
        w, h = x1 - x0, y1 - y0
        ya, yb = int(max(0, y0 + h * 0.2)), int(min(H, y1 - h * 0.2))
        xa, xb = int(max(0, x0 + w * 0.2)), int(min(W, x1 - w * 0.2))

        def snap(lo, hi, prof_fn):
            lo, hi = int(lo), int(hi)
            if hi - lo < 3:
                return None
            prof = prof_fn(lo, hi)
            if prof is None or not len(prof):
                return None
            # strongest brightness step = frame edge
            d = np.abs(np.diff(prof))
            return lo + int(np.argmax(d)) if d.size else None

        colp = lambda lo, hi: g[ya:yb, max(0, lo):min(W, hi)].mean(axis=0) if ya < yb else None
        rowp = lambda lo, hi: g[max(0, lo):min(H, hi), xa:xb].mean(axis=1) if xa < xb else None
        m = 0.12
        nx0 = snap(x0 - w * m, x0 + w * m, colp)
        nx1 = snap(x1 - w * m, x1 + w * m, colp)
        ny0 = snap(y0 - h * m * 0.6, y0 + h * m * 0.6, rowp)
        ny1 = snap(y1 - h * m * 0.6, y1 + h * m * 0.6, rowp)
        nx0 = x0 if nx0 is None else nx0
        nx1 = x1 if nx1 is None else nx1
        ny0 = y0 if ny0 is None else ny0
        ny1 = y1 if ny1 is None else ny1
        # Keep the card shape sane.
        if abs((nx1 - nx0) - w) > w * 0.1:
            nx0, nx1 = x0, x1
        if abs((ny1 - ny0) - h) > h * 0.1:
            ny0, ny1 = y0, y1
        out.append((nx0, ny0, nx1, ny1, p))
    return out


def _lattice(vals, step):
    """Positions o + i*step (i = 0..n) that best fit vals."""
    vals = np.asarray(vals, float)
    lo = vals.min()
    idx = np.round((vals - lo) / step)
    # least squares for o and step
    A = np.stack([np.ones_like(idx), idx], 1)
    if len(set(idx)) >= 2:
        (o, st), *_ = np.linalg.lstsq(A, vals, rcond=None)
        if not (0.8 * step < st < 1.2 * step):
            o, st = float(np.median(vals - idx * step)), step
    else:
        o, st = float(np.median(vals - idx * step)), step
    return [o + i * st for i in range(int(idx.max()) + 1)]


def _row_pitch(ys, P):
    if len(ys) < 2:
        return P * 1.37
    d = np.diff(sorted(ys))
    d1 = d[d > P * 0.8]
    if not len(d1):
        return P * 1.37
    m = float(np.min(d1))
    return m / max(1, round(m / (P * 1.37)))


def _fill(vals, step):
    if len(vals) < 2:
        return list(vals)
    out = [vals[0]]
    for v in vals[1:]:
        gap = v - out[-1]
        n = int(round(gap / step))
        for k in range(1, n):
            out.append(out[-1] + gap / n)
        out.append(v)
    return out


def stars(img, box):
    """Count the lit diamonds on a card (0-6). A lit diamond is brighter than the gold
    strip between diamonds, an unlit one is darker."""
    x0, y0, x1, y1 = box[:4]
    w, h = x1 - x0, y1 - y0
    r = max(1, int(w * 0.022))
    g = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)

    def at(fx):
        cx, cy = int(x0 + fx * w), int(y0 + STAR_Y * h)
        p = g[max(0, cy - r): cy + r + 1, max(0, cx - r): cx + r + 1]
        return float(p.mean()) if p.size else None

    centres = [at(fx) for fx in STAR_X]
    gaps = [at((STAR_X[i] + STAR_X[i + 1]) / 2) for i in range(5)]
    if None in centres or None in gaps:
        return None
    ref = float(np.median(gaps))
    n = 0
    while n < 6 and centres[n] > ref + 12:
        n += 1
    return n


def selected(img, cards):
    """Index of the highlighted card (bright gold outline), or None."""
    best, bi = 0, None
    for i, (x0, y0, x1, y1, _) in enumerate(cards):
        x0, y0, x1, y1 = int(x0), int(y0), int(x1), int(y1)
        pad = max(2, int((x1 - x0) * 0.04))
        ring = []
        for (a, b, c, d) in ((x0 - pad, y0 - pad, x1 + pad, y0 + pad), (x0 - pad, y1 - pad, x1 + pad, y1 + pad),
                             (x0 - pad, y0, x0 + pad, y1), (x1 - pad, y0, x1 + pad, y1)):
            p = img[max(0, b):max(0, d), max(0, a):max(0, c)]
            if p.size:
                ring.append(cv2.cvtColor(p, cv2.COLOR_BGR2GRAY).mean())
        v = float(np.mean(ring)) if ring else 0
        if v > best:
            best, bi = v, i
    return bi


def cards_info(img, cards, icons=None):
    """[{power, stars, box}] for every whole card on screen (who it is is decided later)."""
    out = []
    for c in cards:
        x0, y0, x1, y1 = [int(v) for v in c[:4]]
        if x0 < 0 or y0 < 0 or x1 > img.shape[1] or y1 > img.shape[0]:
            continue
        out.append({"power": c[4], "stars": stars(img, c), "box": [x0, y0, x1, y1]})
    return out
