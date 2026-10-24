"""Read one Dragonheir screenshot with Claude and return structured data."""
import base64
import io
import json
from pathlib import Path

import anthropic

SCREEN_TYPES = [
    "hero_detail",      # one hero: level, stars, stats, skills
    "hero_gear",        # one hero's equipped gear
    "gear_detail",      # one gear piece opened
    "hero_list",        # roster grid
    "artifact_detail",
    "artifact_list",
    "inventory",
    "resources",        # currencies / materials shown
    "team_setup",
    "player_profile",
    "battle",
    "menu",
    "loading",
    "other",
]


# The precheck only drops screens that surely carry no account data. Anything else,
# including menus it is unsure about, gets the full read (a Haiku read is ~$0.001).
SKIP_SCREENS = {"battle", "loading"}


# Structured outputs allow at most 16 union-typed (nullable) fields per schema, so
# fields are plain types and "not shown on screen" is sent as "" or 0; unshow()
# turns those back into None before merging.
def _nullable(t):
    return {"type": t}


def _obj(props, required=None):
    return {
        "type": "object",
        "properties": props,
        "required": required if required is not None else list(props),
        "additionalProperties": False,
    }


STAT = _obj({"stat": {"type": "string"}, "value": {"type": "string"}})

SCHEMA = _obj({
    "screen_type": {"type": "string", "enum": SCREEN_TYPES},
    "confidence": {"type": "string", "enum": ["high", "medium", "low"]},
    "player": _obj({
        "name": _nullable("string"),
        "level": _nullable("integer"),
        "power": _nullable("number"),
        "season": _nullable("string"),
    }),
    "heroes": {"type": "array", "items": _obj({
        "name": {"type": "string"},
        "rarity": _nullable("string"),
        "level": _nullable("integer"),
        "stars": _nullable("integer"),
        "awakening": _nullable("string"),
        "power": _nullable("number"),
        "element": _nullable("string"),
        "school": _nullable("string"),
        "stats": {"type": "array", "items": STAT},
        "skills": {"type": "array", "items": _obj({
            "name": {"type": "string"},
            "level": _nullable("integer"),
        })},
    })},
    "gear": {"type": "array", "items": _obj({
        "hero": _nullable("string"),
        "slot": _nullable("string"),
        "set": _nullable("string"),
        "rarity": _nullable("string"),
        "level": _nullable("integer"),
        "main_stat": _nullable("string"),
        "substats": {"type": "array", "items": STAT},
    })},
    "artifacts": {"type": "array", "items": _obj({
        "name": {"type": "string"},
        "rarity": _nullable("string"),
        "level": _nullable("integer"),
        "stars": _nullable("integer"),
        "equipped_on": _nullable("string"),
    })},
    "resources": {"type": "array", "items": _obj({
        "name": {"type": "string"},
        "amount": {"type": "number"},
    })},
    "notes": {"type": "string"},
})


PRECHECK_SCHEMA = {
    "type": "object",
    "properties": {"screen_type": {"type": "string", "enum": SCREEN_TYPES}},
    "required": ["screen_type"],
    "additionalProperties": False,
}

PRECHECK_SYSTEM = (
    "Classify a small screenshot from the PC game Dragonheir: Silent Gods by screen type. "
    "hero_detail: one hero's level/stars/stats/skills. hero_gear / gear_detail: equipment. "
    "hero_list: roster grid of hero cards. artifact_detail / artifact_list: artifacts. "
    "inventory / resources: items, materials, currencies. team_setup: team formation. "
    "player_profile: account profile. battle: a fight in progress (combat field, health bars, "
    "skill buttons). loading: loading or splash screen. menu: any other menu. other: anything else. "
    "When unsure between a data screen and menu/other, pick the data screen."
)


def _known_names_text():
    p = Path(__file__).with_name("known_names.json")
    try:
        d = json.loads(p.read_text(encoding="utf-8"))
    except Exception:
        return ""
    return (
        "Known hero names: " + ", ".join(d["heroes"]) + "\n"
        "Known artifact names: " + ", ".join(d["artifacts"]) + "\n"
        "Known gear set names: " + ", ".join(d["gear_sets"]) + "\n"
    )


SYSTEM = (
    "You read screenshots from the PC game Dragonheir: Silent Gods and extract the player's "
    "account state. Report only what is visible on this screenshot. For anything not shown, "
    "use \"\" for text and 0 for numbers.\n\n"
    "Pick screen_type first. Battles, cutscenes, loading screens, chat and shops carry no "
    "account data: return empty arrays for them.\n\n"
    "Traps to avoid:\n"
    "- The bar at the top or corner of most screens shows the PLAYER's own name, level and "
    "power. Put those in player only, never on a hero.\n"
    "- A hero's level and power are the numbers next to that hero's portrait or name "
    "(e.g. 'Lv. 45/60', a power or combat-rating number). If a number is not clearly tied to "
    "the hero, leave it 0.\n"
    "- Skills: the skill NAME is the title of the skill (e.g. 'Call of Blizzard'). The small "
    "labels under or beside it (Damage, Buff, Recharge, Inflict Frost, Splash, Healing...) are "
    "tags, not names: never output a tag as a skill name. Skill level is the 'Lv. N' on the "
    "skill; 0 if not shown. If only icons are visible, return no skills.\n"
    "- Rarity: use the word if shown; otherwise the card frame colour: gold/orange = "
    "Legendary, purple = Epic, blue = Rare, green = Uncommon. Stars = the number of filled "
    "stars shown.\n\n"
    "Per screen:\n"
    "- hero_list (roster grid): one entry per hero card that shows a readable name, with level, "
    "rarity and stars if shown. Skip cards whose name you cannot read; never invent names.\n"
    "- hero_detail / hero_gear / gear_detail / artifact screens about one hero: put that hero "
    "in heroes (name at least). Give every gear piece hero = that hero and a slot (slot name "
    "the game shows, else Weapon/Helmet/Armor/Gloves/Boots/Ring/Necklace by the icon, else "
    "'Slot 1'..'Slot 6' in order). List every equipped piece you can see, even if only set, "
    "rarity and level show. An equipped artifact goes in artifacts with equipped_on = the hero.\n"
    "- Names: use the spelling from the known names below when the screen's name matches one "
    "(ignore apostrophes and case). Gear set and artifact names must use the known spelling.\n"
    "- Convert abbreviated amounts to plain numbers (1.2K -> 1200, 3.4M -> 3400000).\n"
    "- Stats keep the game's wording and unit, e.g. {stat: 'Crit Rate', value: '35.2%'}.\n"
    "- notes: one short line on anything useful that did not fit the fields, else ''.\n\n"
    + _known_names_text()
)


def to_jpeg(img, max_edge, quality):
    """Downscale and JPEG-compress; returns bytes."""
    img = img.convert("RGB")
    w, h = img.size
    scale = min(1.0, max_edge / max(w, h))
    if scale < 1.0:
        img = img.resize((int(w * scale), int(h * scale)))
    buf = io.BytesIO()
    img.save(buf, "JPEG", quality=quality, optimize=True)
    return buf.getvalue()


def unshow(v):
    """Turn the "" / 0 placeholders for "not shown" back into None (resource amounts stay)."""
    if isinstance(v, dict):
        return {k: (v[k] if k in ("amount", "notes") else unshow(v[k])) for k in v}
    if isinstance(v, list):
        return [unshow(x) for x in v]
    if v == "" or (isinstance(v, (int, float)) and not isinstance(v, bool) and v == 0):
        return None
    return v


class Extractor:
    def __init__(self, settings):
        self.s = settings
        self.client = anthropic.Anthropic(api_key=settings.api_key or None, max_retries=3)

    def cost(self, usage, model=None) -> float:
        pin, pout = self.s.price(model)
        inp = (usage.input_tokens or 0) + (getattr(usage, "cache_creation_input_tokens", 0) or 0) * 1.25
        inp += (getattr(usage, "cache_read_input_tokens", 0) or 0) * 0.1
        return inp / 1e6 * pin + (usage.output_tokens or 0) / 1e6 * pout

    def precheck(self, jpeg: bytes):
        """Return (screen_type | None, cost_usd). None means the check failed; then read anyway."""
        model = self.s.precheck_model
        try:
            resp = self.client.messages.create(
                model=model,
                max_tokens=2000,
                system=PRECHECK_SYSTEM,
                messages=[{"role": "user", "content": [
                    {"type": "image", "source": {"type": "base64", "media_type": "image/jpeg",
                                                  "data": base64.standard_b64encode(jpeg).decode("ascii")}},
                    {"type": "text", "text": "Screen type?"},
                ]}],
                output_config={"effort": "low", "format": {"type": "json_schema", "schema": PRECHECK_SCHEMA}},
            )
        except anthropic.APIError:
            return None, 0.0
        cost = self.cost(resp.usage, model)
        try:
            text = "".join(b.text for b in resp.content if b.type == "text")
            return json.loads(text)["screen_type"], cost
        except (json.JSONDecodeError, KeyError):
            return None, cost

    def read(self, jpeg: bytes):
        """Read one JPEG screenshot. Return (data dict | None, cost_usd, error str | None)."""
        kwargs = dict(
            model=self.s.model,
            max_tokens=16000,
            system=[{"type": "text", "text": SYSTEM, "cache_control": {"type": "ephemeral"}}],
            messages=[{
                "role": "user",
                "content": [
                    {"type": "image", "source": {"type": "base64", "media_type": "image/jpeg",
                                                  "data": base64.standard_b64encode(jpeg).decode("ascii")}},
                    {"type": "text", "text": "Extract the account data from this screenshot."},
                ],
            }],
            output_config={"effort": self.s.effort, "format": {"type": "json_schema", "schema": SCHEMA}},
        )
        try:
            if self.s.model.startswith(("claude-opus-5", "claude-sonnet-5-5", "claude-fable-5")):
                # If a safety classifier ever declines a screenshot, retry on Anthropic's
                # recommended fallback model server-side instead of failing.
                resp = self.client.beta.messages.create(
                    betas=["server-side-fallback-2026-07-01"],
                    extra_body={"fallbacks": "default"},
                    **kwargs,
                )
            else:
                resp = self.client.messages.create(**kwargs)
        except anthropic.AuthenticationError:
            return None, 0.0, "API key rejected: check ANTHROPIC_API_KEY in .env"
        except anthropic.RateLimitError:
            return None, 0.0, "rate limited, will retry later"
        except anthropic.BadRequestError as e:
            return None, 0.0, ("Claude API rejected the request (bug in this version). "
                               "The screen is saved and will be read after an update. " + str(e.message)[:160])
        except anthropic.APIStatusError as e:
            return None, 0.0, f"API error {e.status_code}, will retry later"
        except anthropic.APIConnectionError:
            return None, 0.0, "no connection to the API"

        cost = self.cost(resp.usage)
        if resp.stop_reason == "refusal":
            return None, cost, "model declined this screenshot"
        if resp.stop_reason == "max_tokens":
            return None, cost, "answer was cut off"
        text = "".join(b.text for b in resp.content if b.type == "text")
        try:
            return unshow(json.loads(text)), cost, None
        except json.JSONDecodeError:
            return None, cost, "could not parse the answer"
