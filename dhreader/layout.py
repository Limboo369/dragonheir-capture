"""Map regions drawn on a reference screenshot onto a live frame.

Each screen parser knows where its text labels sit on one reference image
(2560x1600). On a live frame we find the same labels with OCR, fit a scale and
offset from their positions (least squares), and move every region with it.
That works for any window size and for popups that are not centred.
"""
import re
from difflib import SequenceMatcher

import numpy as np


def simplify(t):
    return re.sub(r"[^a-z0-9]", "", t.lower())


def find_label(items, label, used=None, min_ratio=0.86):
    """Best OCR item whose text starts with `label` (fuzzy). Returns the item or None."""
    want = simplify(label)
    best, best_r = None, 0
    for it in items:
        if used is not None and id(it) in used:
            continue
        got = simplify(it.text)
        if not got:
            continue
        head = got[: len(want)]
        r = SequenceMatcher(None, want, head).ratio()
        if r > best_r:
            best, best_r = it, r
    if best is not None and best_r >= min_ratio:
        return best
    return None


class Fit:
    """x' = s*x + tx, y' = s*y + ty from reference points to frame points."""

    def __init__(self, s, tx, ty, n, err):
        self.s, self.tx, self.ty, self.n, self.err = s, tx, ty, n, err

    def pt(self, x, y):
        return self.s * x + self.tx, self.s * y + self.ty

    def box(self, b, shape=None):
        x0, y0 = self.pt(b[0], b[1])
        x1, y1 = self.pt(b[2], b[3])
        x0, y0, x1, y1 = int(round(x0)), int(round(y0)), int(round(x1)), int(round(y1))
        if shape is not None:
            h, w = shape[:2]
            x0, x1 = max(0, x0), min(w, x1)
            y0, y1 = max(0, y0), min(h, y1)
        return x0, y0, x1, y1

    def crop(self, img, b):
        x0, y0, x1, y1 = self.box(b, img.shape)
        if x1 - x0 < 2 or y1 - y0 < 2:
            return None
        return img[y0:y1, x0:x1]


def fit(items, anchors, min_found=4):
    """anchors: {label: (ref_x0, ref_cy)}. Returns (Fit, {label: item}) or (None, found)."""
    used, found = set(), {}
    # Longer labels first so "Crit Damage" is not taken by "Crit Rate".
    for label in sorted(anchors, key=len, reverse=True):
        it = find_label(items, label, used)
        if it is not None:
            used.add(id(it))
            found[label] = it
    if len(found) < min_found:
        return None, found
    ref = np.array([anchors[k] for k in found], float)
    got = np.array([(found[k].x0, found[k].cy) for k in found], float)
    # Solve [x 1 0; y 0 1] [s tx ty] = [x'; y'].
    a = np.zeros((2 * len(ref), 3))
    b = np.zeros(2 * len(ref))
    a[0::2, 0], a[0::2, 1], b[0::2] = ref[:, 0], 1, got[:, 0]
    a[1::2, 0], a[1::2, 2], b[1::2] = ref[:, 1], 1, got[:, 1]
    sol, *_ = np.linalg.lstsq(a, b, rcond=None)
    s, tx, ty = sol
    res = a @ sol - b
    err = float(np.sqrt(np.mean(res ** 2))) / max(s, 1e-6)
    # Drop one bad anchor (a mis-read label) and refit if needed.
    if err > 12 and len(found) > min_found:
        worst = int(np.argmax(np.abs(res[0::2]) + np.abs(res[1::2])))
        k = list(found)[worst]
        rest = {kk: anchors[kk] for kk in found if kk != k}
        sub = {kk: v for kk, v in found.items() if kk != k}
        return _refit(sub, rest, min_found)
    if s <= 0.2 or s > 5:
        return None, found
    return Fit(s, tx, ty, len(found), err), found


def _refit(found, anchors, min_found):
    ref = np.array([anchors[k] for k in found], float)
    got = np.array([(found[k].x0, found[k].cy) for k in found], float)
    a = np.zeros((2 * len(ref), 3))
    b = np.zeros(2 * len(ref))
    a[0::2, 0], a[0::2, 1], b[0::2] = ref[:, 0], 1, got[:, 0]
    a[1::2, 0], a[1::2, 2], b[1::2] = ref[:, 1], 1, got[:, 1]
    sol, *_ = np.linalg.lstsq(a, b, rcond=None)
    s, tx, ty = sol
    err = float(np.sqrt(np.mean((a @ sol - b) ** 2))) / max(s, 1e-6)
    if err > 12 or s <= 0.2 or s > 5:
        return None, found
    return Fit(s, tx, ty, len(found), err), found
