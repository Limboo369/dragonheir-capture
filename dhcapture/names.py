"""Snap names read from screenshots to the AllClash spelling the Companion app uses."""
import difflib
import json
from pathlib import Path

_LISTS = json.loads(Path(__file__).with_name("known_names.json").read_text(encoding="utf-8"))


def _key(s):
    return "".join(ch for ch in (s or "").lower() if ch.isalnum())


_INDEX = {kind: {_key(n): n for n in _LISTS[kind]} for kind in ("heroes", "artifacts", "gear_sets")}


def canonical(name, kind):
    """Return the known spelling for name (exact after ignoring case/punctuation, else a
    close fuzzy match), or the name unchanged when nothing is close enough."""
    if not name:
        return name
    idx = _INDEX[kind]
    k = _key(name)
    if k in idx:
        return idx[k]
    hit = difflib.get_close_matches(k, idx.keys(), n=1, cutoff=0.82)
    return idx[hit[0]] if hit else name


def is_known_hero(name):
    return _key(name) in _INDEX["heroes"]


def normalize(data):
    # Hero names that match nothing in the known list are misreads (e.g. "Fraander"
    # for Ergander); drop them rather than create phantom heroes.
    heroes = []
    for h in data.get("heroes", []):
        h["name"] = canonical(h.get("name"), "heroes")
        if h["name"] and is_known_hero(h["name"]):
            heroes.append(h)
    data["heroes"] = heroes
    for g in data.get("gear", []):
        g["hero"] = canonical(g.get("hero"), "heroes")
        g["set"] = canonical(g.get("set"), "gear_sets")
    for a in data.get("artifacts", []):
        a["name"] = canonical(a.get("name"), "artifacts")
        a["equipped_on"] = canonical(a.get("equipped_on"), "heroes")
    return data
