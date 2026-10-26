"""Turn one screen result into store updates."""

GEAR_KEYS = ("slot", "set", "name", "rarity", "level", "main_stat", "substats", "item_id")


def _num_fields(n):
    """A card shows either power or level (depends on the sort)."""
    if not n:
        return {}
    return {"level": n} if n <= 100 else {"power": n}


def _gear_list(old, new):
    """Replace the equipped list but keep details (main stat / substats) read from item cards."""
    out = []
    for p in new:
        if p.get("locked") or not p.get("name"):
            continue
        g = {k: p.get(k) for k in GEAR_KEYS if p.get(k) is not None}
        for o in old or []:
            if o.get("slot") == g.get("slot") and o.get("set") == g.get("set"):
                for k in ("main_stat", "substats"):
                    if o.get(k) and not g.get(k):
                        g[k] = o[k]
        out.append(g)
    return out


def apply(store, res, context):
    """Returns (changed fields, hero name or None)."""
    changed = []
    for card in res.get("roster") or []:
        if card.get("hero") and card.get("fields"):
            f = dict(card["fields"])
            if "power" in f:
                f.update(_num_fields(f.pop("power")))
            changed += store.merge(card["hero"], f)
    hero = res.get("hero")
    if not hero:
        return changed, None
    rec = store.hero(hero)
    guessed = bool(res.get("hero_from_context"))
    fields = {}
    for k in ("level", "rarity", "stars", "stats", "stats_base", "stats_bonus", "skill_levels", "talents", "atk_interval"):
        if res.get(k) is not None:
            fields[k] = res[k]
    if res.get("power"):
        fields.update({k: v for k, v in _num_fields(res["power"]).items() if k not in fields})
    if res.get("skill_levels") and not any(res["skill_levels"]):
        fields.pop("skill_levels", None)
    scr = res.get("screen") or ""
    if res.get("artifact") and res["artifact"].get("name"):
        a = {k: v for k, v in res["artifact"].items() if k in ("name", "rarity", "level", "item_id")}
        old = rec.get("artifact") or {}
        if old.get("name") == a["name"]:
            a = dict(old, **a)
        fields["artifact"] = a
    if scr in ("hero_popup", "manage_equip") and res.get("gear") is not None:
        fields["gear"] = _gear_list(rec.get("gear"), res["gear"])
        if res.get("runes") is not None:
            fields["runes"] = [{k: r.get(k) for k in ("name", "rarity", "level")} for r in res["runes"]]
    if scr == "item_gear" and res.get("item"):
        it = {k: v for k, v in res["item"].items() if v is not None}
        gear = [dict(g) for g in rec.get("gear") or []]
        for g in gear:
            if g.get("slot") == it.get("slot"):
                # A tooltip opened from the bag also shows unequipped items: only add to the
                # recent hero when it matches the item already seen in that slot.
                if not guessed or g.get("name") == it.get("name") or (it.get("set") and g.get("set") == it.get("set")):
                    g.update(it)
                    fields["gear"] = gear
                break
        else:
            if not guessed:
                gear.append(it)
                fields["gear"] = gear
    if scr == "item_artifact" and res.get("item"):
        it = {k: v for k, v in res["item"].items() if v is not None}
        old = rec.get("artifact") or {}
        if guessed and old.get("name") != it.get("name"):
            return changed, hero["name"]
        fields["artifact"] = dict(old, **it) if old.get("name") in (None, it.get("name")) else it
    changed += store.merge(hero, fields)
    return changed, hero["name"]
