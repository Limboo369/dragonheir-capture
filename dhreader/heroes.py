"""Name a hero from its roster card picture.

The game's card is a crop of the hero's full "show" art (scale and offset differ
per hero), so we search the card's face area inside every show art: a coarse
pass at low resolution picks a shortlist, a fine pass decides. Once a hero has
been found we remember the crop, so the next time is a single comparison."""
import hashlib
import json

import cv2
import numpy as np

from .paths import app_dir, data_file

SCALES_COARSE = np.arange(0.48, 0.80, 0.04)
SCALES_FINE = np.arange(0.46, 0.82, 0.02)


class HeroMatcher:
    def __init__(self, ids, arts):
        self.ids = [str(i) for i in ids]
        self.arts = arts                      # 145x218 BGR (half of the 290x436 show art)
        self.small = np.stack([cv2.resize(cv2.cvtColor(a, cv2.COLOR_BGR2GRAY), (72, 109), interpolation=cv2.INTER_AREA) for a in arts])
        self.cache = {}
        self.known_path = app_dir() / "data" / "card_crops.json"
        try:
            self.known = json.loads(self.known_path.read_text())
        except Exception:
            self.known = {}

    def _save(self):
        try:
            self.known_path.parent.mkdir(parents=True, exist_ok=True)
            self.known_path.write_text(json.dumps(self.known))
        except Exception:
            pass

    @classmethod
    def load(cls):
        p = data_file("heroart.npz")
        if not p.exists():
            return None
        z = np.load(p)
        return cls(z["ids"], z["arts"])

    @staticmethod
    def face(card):
        h, w = card.shape[:2]
        return card[int(h * 0.11):int(h * 0.57), int(w * 0.25):int(w * 0.9)]

    def _best(self, art, patch, card_w, scales, art_w):
        best = (-1.0, None)
        for s in scales:
            f = s * art_w / 290.0 * 200.0 / card_w
            p = cv2.resize(patch, None, fx=f, fy=f, interpolation=cv2.INTER_AREA)
            if p.shape[0] < 6 or p.shape[1] < 6 or p.shape[0] > art.shape[0] or p.shape[1] > art.shape[1]:
                continue
            r = cv2.matchTemplate(art, p, cv2.TM_CCOEFF_NORMED)
            _, mx, _, loc = cv2.minMaxLoc(r)
            if mx > best[0]:
                best = (float(mx), (float(s), loc))
        return best

    def _key(self, card):
        return hashlib.md5(cv2.resize(self.face(card), (16, 16)).tobytes()).hexdigest()

    def is_cached(self, card):
        return self._key(card) in self.cache

    def identify(self, card, candidates=None):
        """card: BGR crop of one roster card. Returns (hero_id, score) or (None, score)."""
        if card is None or card.size == 0:
            return None, 0.0
        key = self._key(card)
        if key in self.cache:
            return self.cache[key]
        h, w = card.shape[:2]
        patch = self.face(card)
        # Fast path: heroes already seen, at the crop we found for them before.
        quick = []
        for hid, (sc, (lx, ly)) in self.known.items():
            if hid not in self.ids:
                continue
            i = self.ids.index(hid)
            f = sc * 145 / 290.0 * 200.0 / w
            p = cv2.resize(patch, None, fx=f, fy=f, interpolation=cv2.INTER_AREA)
            a = self.arts[i]
            x0, y0 = max(0, lx - 4), max(0, ly - 4)
            win = a[y0: ly + p.shape[0] + 4, x0: lx + p.shape[1] + 4]
            if win.shape[0] < p.shape[0] or win.shape[1] < p.shape[1]:
                continue
            quick.append((float(cv2.matchTemplate(win, p, cv2.TM_CCOEFF_NORMED).max()), hid))
        quick.sort(reverse=True)
        if quick and quick[0][0] > 0.8 and (len(quick) < 2 or quick[0][0] - quick[1][0] > 0.08):
            res = (quick[0][1], round(quick[0][0], 3))
            self.cache[key] = res
            return res
        pool = range(len(self.ids)) if candidates is None else [i for i, x in enumerate(self.ids) if x in candidates]
        gpatch = cv2.cvtColor(patch, cv2.COLOR_BGR2GRAY)
        coarse = []
        for i in pool:
            sc, _ = self._best(self.small[i], gpatch, w, SCALES_COARSE, 72)
            coarse.append((sc, i))
        coarse.sort(reverse=True)
        fine = []
        for _, i in coarse[:8]:
            sc, where = self._best(self.arts[i], patch, w, SCALES_FINE, 145)
            fine.append((sc, i, where))
        fine.sort(key=lambda x: -x[0])
        s, i, where = fine[0]
        second = fine[1][0] if len(fine) > 1 else 0
        ok = s > 0.75 and s - second > 0.05
        res = (self.ids[i], round(s, 3)) if ok else (None, round(s, 3))
        if ok and where:
            self.known[self.ids[i]] = [where[0], [int(where[1][0]), int(where[1][1])]]
            self._save()
        self.cache[key] = res
        return res


def learn(self, card, hero_id):
    """We know which hero this card is (its name was on screen): remember the crop."""
    hid = str(hero_id)
    if card is None or card.size == 0 or hid not in self.ids:
        return
    if hid in self.known:
        return
    i = self.ids.index(hid)
    sc, where = self._best(self.arts[i], self.face(card), card.shape[1], SCALES_FINE, 145)
    if where and sc > 0.55:
        self.known[hid] = [where[0], [int(where[1][0]), int(where[1][1])]]
        self._save()


HeroMatcher.learn = learn
