"""Recognise item icons (gear pieces, artifacts) by comparing them with the game's own icons.

Two steps: a quick masked colour comparison at 32 px ranks every candidate,
then the best few are checked with masked template matching at a few sizes
(the game draws the picture slightly smaller than its frame)."""
import hashlib
import re

import cv2
import numpy as np

from .names import game
from .paths import data_file

SLOT_WORDS = [
    ("Helm", ("helm", "helmet", "hood", "cowl", "headgear", "hat", "crown", "mask")),
    ("Armor", ("armor", "armour", "tunic", "robe", "mail", "leather", "plate", "vest", "cloak", "garb")),
    ("Gloves", ("gloves", "gauntlets", "bracers", "claw")),
]


def slot_of(name):
    n = (name or "").lower()
    for slot, words in SLOT_WORDS:
        if any(re.search(rf"\b{w}\b", n) for w in words):
            return slot
    return "Weapon"


class Icons:
    def __init__(self, keys, kinds, imgs):
        self.keys, self.kinds = list(keys), list(kinds)
        self.imgs = imgs
        g = game()
        self.items = {}
        for it in g["gear_items"]:
            self.items.setdefault(("gear", it["icon"].split("/img/")[1]), it)
        for it in g["artifact_items"]:
            self.items.setdefault(("artifact", it["icon"].split("/img/")[1]), it)
        for it in g.get("rune_items", []):
            self.items.setdefault(("rune", it["icon"].split("/img/")[1]), it)
        self.heroes = {str(h["id"]): h for h in g["heroes"]}
        small = np.stack([cv2.resize(im, (32, 32), interpolation=cv2.INTER_AREA) for im in imgs]).astype(np.float32)
        self.small_rgb = small[..., :3]
        self.small_m = (small[..., 3] > 128).astype(np.float32)
        self.cache = {}

    @classmethod
    def load(cls):
        p = data_file("icons.npz")
        if not p.exists():
            return None
        z = np.load(p)
        return cls(z["keys"], z["kinds"], z["imgs"])

    def _shortlist(self, crop, kind, n=16, inner=0.85):
        c = _center(crop, inner)
        c = cv2.resize(c, (32, 32), interpolation=cv2.INTER_AREA).astype(np.float32)
        idx = [i for i, k in enumerate(self.kinds) if (k == kind if kind else k != "hero")]
        t, m = self.small_rgb[idx], self.small_m[idx][..., None]
        # masked normalised correlation per candidate
        cnt = m.sum(axis=(1, 2, 3)) * 3 + 1e-6
        tm = (t * m).sum(axis=(1, 2, 3)) / cnt
        cm = (c[None] * m).sum(axis=(1, 2, 3)) / cnt
        td = (t - tm[:, None, None, None]) * m
        cd = (c[None] - cm[:, None, None, None]) * m
        num = (td * cd).sum(axis=(1, 2, 3))
        den = np.sqrt((td ** 2).sum(axis=(1, 2, 3)) * (cd ** 2).sum(axis=(1, 2, 3))) + 1e-6
        score = num / den
        order = np.argsort(-score)[:n]
        return [idx[i] for i in order]

    def classify(self, crop, kind=None):
        """crop: BGR image of one slot (frame included). Returns {name, set, slot, rarity, score} or {}."""
        if crop is None or crop.size == 0:
            return {}
        h = hashlib.md5(cv2.resize(crop, (24, 24)).tobytes()).hexdigest() + str(kind)
        if h in self.cache:
            return self.cache[h]
        if _empty(crop):
            self.cache[h] = {"empty": True}
            return self.cache[h]
        c = cv2.resize(crop, (80, 80), interpolation=cv2.INTER_AREA).astype(np.float32)
        best = []
        for i in self._shortlist(crop, kind):
            t = self.imgs[i]
            for sz in (64, 70, 76):
                tt = cv2.resize(t, (sz, sz), interpolation=cv2.INTER_AREA)
                m = (tt[..., 3] > 100).astype(np.float32)
                m[: int(sz * 0.3), : int(sz * 0.3)] = 0      # set emblem drawn by the game
                m[int(sz * 0.7):, int(sz * 0.55):] = 0        # "+N" level text
                if m.sum() < 50:
                    continue
                r = cv2.matchTemplate(c, np.ascontiguousarray(tt[..., :3]).astype(np.float32), cv2.TM_CCOEFF_NORMED,
                                      mask=cv2.merge([m, m, m]))
                r[~np.isfinite(r)] = -1
                best.append((float(r.max()), i))
        if not best:
            return {}
        best.sort(reverse=True)
        s, i = best[0]
        second = next((x for x, j in best if self.keys[j] != self.keys[i]), 0.0)
        kind = self.kinds[i]
        it = self.items.get((kind, self.keys[i]), {})
        out = {"kind": kind, "name": it.get("name"), "score": round(s, 3), "margin": round(s - second, 3),
               "item_id": it.get("id"), "rarity": it.get("rarity")}
        if kind == "gear":
            out["set"] = it.get("set")
            out["slot"] = slot_of(it.get("slot") or it.get("name"))
        if s < 0.62 or s - second < 0.04:
            out = {"unsure": True, **out}
        self.cache[h] = out
        return out


def _center(img, f):
    h, w = img.shape[:2]
    dy, dx = int(h * (1 - f) / 2), int(w * (1 - f) / 2)
    return img[dy: h - dy, dx: w - dx]


def _empty(crop):
    g = cv2.cvtColor(crop, cv2.COLOR_BGR2GRAY)
    return float(g.std()) < 12
