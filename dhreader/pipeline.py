"""One frame in, what it shows out (plus which hero it belongs to)."""
import logging
import time

from . import ocr
from .names import Names
from .screens import equip, panel, popup, talent, tooltip

log = logging.getLogger("dhreader")
CONTEXT_TTL = 600  # seconds a hero stays "current" for item cards that do not name their owner


class Reader:
    def __init__(self, icons=None, heroes=None):
        self.names = Names()
        self.icons = icons
        self.heroes = heroes            # HeroMatcher (card pictures)
        self.context = {"hero": None, "hero_at": 0}
        self.power_map = {}             # power shown on a card -> hero (learned when a name is on screen)
        self.max_new_cards = 6          # unknown roster cards identified per frame (each takes ~0.5 s)

    def _screen(self, img, items):
        f = popup.match(items)
        if f is not None:
            return popup.parse(img, items, f, icons=self.icons, names=self.names)
        d = tooltip.match(items)
        if d is not None:
            return tooltip.parse(img, items, d, icons=self.icons, names=self.names)
        d = panel.detect(img, items, self.names)
        if d is not None:
            return panel.parse(img, items, d, names=self.names)
        d = talent.detect(img, items)
        if d is not None:
            return talent.parse(img, items, d)
        d = equip.detect(img, items)
        if d is not None:
            return equip.parse(img, items, d, icons=self.icons)
        return None

    def _crop(self, img, box):
        x0, y0, x1, y1 = [int(v) for v in box]
        if x0 < 0 or y0 < 0 or x1 > img.shape[1] or y1 > img.shape[0] or x1 - x0 < 10:
            return None
        return img[y0:y1, x0:x1]

    def _who(self, img, card):
        """Hero on a card: by its power (learned) or by its picture."""
        if card.get("power") and card["power"] in self.power_map:
            return self.power_map[card["power"]]
        if self.heroes is not None and card.get("box"):
            hid, s = self.heroes.identify(self._crop(img, card["box"]))
            if hid:
                return self.names.by_id.get(hid)
        return None

    def read(self, img):
        t = time.time()
        items = ocr.detect(img)
        res = self._screen(img, items)
        if res is None:
            return {"screen": None, "ms": int((time.time() - t) * 1000), "texts": [i.text for i in items[:12]]}
        card = res.get("card")
        hero = res.get("hero")
        if hero and card:
            # The name is on screen: learn the card picture and its power.
            if card.get("power"):
                self.power_map[card["power"]] = hero
            if self.heroes is not None:
                self.heroes.learn(self._crop(img, card["box"]), hero["id"])
        if not hero and card:
            hero = self._who(img, card)
            if hero:
                res["hero"] = hero
        if not hero and res.get("uses_context") and res["screen"].startswith("item_"):
            if self.context["hero"] and time.time() - self.context["hero_at"] < CONTEXT_TTL:
                res["hero"] = self.context["hero"]
                res["hero_from_context"] = True
        if res.get("hero") and not res.get("hero_from_context"):
            self.context.update(hero=res["hero"], hero_at=time.time())
        # Every other card on screen: power and stars, when we can tell who it is.
        new = 0
        for c in res.get("roster") or []:
            h = self.power_map.get(c.get("power")) if c.get("power") else None
            if h is None and self.heroes is not None:
                crop = self._crop(img, c["box"])
                if crop is None:
                    continue
                cached = self.heroes.is_cached(crop)
                if not cached and new >= self.max_new_cards:
                    continue
                new += 0 if cached else 1
                hid, _ = self.heroes.identify(crop)
                h = self.names.by_id.get(hid) if hid else None
            if h:
                c["hero"] = h
                f = {}
                if c.get("power") and c["power"] > 100:
                    f["power"] = c["power"]
                if c.get("stars") is not None:
                    f["stars"] = c["stars"]
                c["fields"] = f
        res["ms"] = int((time.time() - t) * 1000)
        return res
