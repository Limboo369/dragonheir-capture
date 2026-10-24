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


# Screens worth a full read; everything else is skipped after the precheck.
DATA_SCREENS = {"hero_detail", "hero_gear", "gear_detail", "hero_list", "artifact_detail",
                "artifact_list", "inventory", "resources", "team_setup", "player_profile"}


def _nullable(t):
    return {"anyOf": [{"type": t}, {"type": "null"}]}


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
    "player_profile: account profile. battle, menu (other menus, shops, map, chat), loading, other."
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
    "account state. Report only what is clearly visible on this screenshot; never guess or "
    "fill in values from general game knowledge. Use null for anything not shown.\n"
    "- Pick screen_type from the enum. Battles, cutscenes, loading screens, chat and shops "
    "carry no account data: return empty arrays for them.\n"
    "- Write hero, artifact, skill and gear set names exactly as the game shows them. When a "
    "name matches one of the known names below (ignoring apostrophes and case), use the known spelling exactly; gear set and artifact names especially must use the known spelling.\n"
    "- Convert abbreviated amounts to plain numbers (1.2K -> 1200, 3.4M -> 3400000).\n"
    "- In a roster grid, list every hero card you can read, with level and stars if shown.\n"
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
        except anthropic.APIStatusError as e:
            return None, 0.0, f"API error {e.status_code}: {e.message}"
        except anthropic.APIConnectionError:
            return None, 0.0, "no connection to the API"

        cost = self.cost(resp.usage)
        if resp.stop_reason == "refusal":
            return None, cost, "model declined this screenshot"
        if resp.stop_reason == "max_tokens":
            return None, cost, "answer was cut off"
        text = "".join(b.text for b in resp.content if b.type == "text")
        try:
            return json.loads(text), cost, None
        except json.JSONDecodeError:
            return None, cost, "could not parse the answer"
