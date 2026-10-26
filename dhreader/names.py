"""Fuzzy matching of OCR text to known game names."""
import json
import re
from difflib import SequenceMatcher
from functools import lru_cache

from .paths import data_file


def key(t):
    return re.sub(r"[^a-z0-9]", "", (t or "").lower())


@lru_cache(maxsize=1)
def game():
    return json.loads(data_file("game.json").read_text(encoding="utf-8"))


class Names:
    def __init__(self):
        g = game()
        self.heroes = {key(h["name"]): h for h in g["heroes"]}
        self.by_id = {str(h["id"]): h for h in g["heroes"]}

    def hero(self, text, min_ratio=0.72):
        """Hero dict for an OCR'd name, or None."""
        k = key(text)
        if not k:
            return None
        if k in self.heroes:
            return self.heroes[k]
        best, br = None, 0
        for hk, h in self.heroes.items():
            r = SequenceMatcher(None, k, hk).ratio()
            if r > br:
                best, br = h, r
        return best if br >= min_ratio else None
