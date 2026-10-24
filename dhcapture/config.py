"""Settings, read from the .env file next to the program (or the current folder)."""
import os
import sys
from dataclasses import dataclass
from pathlib import Path

from dotenv import load_dotenv


def app_dir() -> Path:
    # Next to the .exe when frozen by PyInstaller, else the project root.
    if getattr(sys, "frozen", False):
        return Path(sys.executable).resolve().parent
    return Path(__file__).resolve().parent.parent


APP_DIR = app_dir()
load_dotenv(APP_DIR / ".env")
load_dotenv()  # also the current folder, if different


def _f(name, default):
    try:
        return float(os.getenv(name, default))
    except ValueError:
        return float(default)


def _b(name, default):
    return os.getenv(name, str(default)).strip().lower() in ("1", "true", "yes", "on")


# USD per million tokens (input, output). Anthropic first-party prices, Oct 2026.
PRICES = {
    "claude-opus-5-5": (4.00, 20.00),
    "claude-sonnet-5-5": (2.00, 10.00),
    "claude-haiku-5-5": (0.10, 0.50),
}


@dataclass
class Settings:
    api_key: str = os.getenv("ANTHROPIC_API_KEY", "")
    model: str = os.getenv("MODEL", "claude-haiku-5-5")
    # Cheap first look at a small image: is this a screen with account data?
    precheck: bool = _b("PRECHECK", True)
    precheck_model: str = os.getenv("PRECHECK_MODEL", "claude-haiku-5-5")
    # Read screens automatically every INTERVAL_SECONDS; the hotkey always works.
    auto: bool = _b("AUTO", True)
    hotkey: str = os.getenv("HOTKEY", "F8").strip().upper()
    effort: str = os.getenv("EFFORT", "medium")
    interval_s: float = _f("INTERVAL_SECONDS", 5)
    # Hamming distance on a 256-bit perceptual hash: <= this means "same screen"
    # (already read), and <= still_threshold means "not moving" between two captures.
    same_screen_threshold: int = int(_f("SAME_SCREEN_THRESHOLD", 14))
    still_threshold: int = int(_f("STILL_THRESHOLD", 40))
    # A screen must stay still this many captures in a row before it is sent
    # (filters out battles and animations, which change every frame).
    stable_frames: int = int(_f("STABLE_FRAMES", 2))
    max_calls_per_hour: int = int(_f("MAX_CALLS_PER_HOUR", 120))
    daily_budget_usd: float = _f("DAILY_BUDGET_USD", 1.0)
    max_image_edge: int = int(_f("MAX_IMAGE_EDGE", 1568))
    # False (default): a screenshot lives only in memory and is gone once Claude has
    # read it; only the extracted text is kept. Screens that failed to be read wait
    # as small JPEGs in data/pending and are deleted after a successful retry.
    keep_images: bool = _b("KEEP_IMAGES", False)
    jpeg_quality: int = int(_f("JPEG_QUALITY", 80))
    # "api" = read screens with Claude (costs credit); "collect" = only save
    # unique screens to the captures folder, no API calls.
    mode: str = os.getenv("MODE", "api").strip().lower()
    data_dir: Path = Path(os.getenv("DATA_DIR", str(APP_DIR / "data")))

    @property
    def captures_dir(self) -> Path:
        return self.data_dir / "captures"

    @property
    def pending_dir(self) -> Path:
        return self.data_dir / "pending"

    @property
    def db_path(self) -> Path:
        return self.data_dir / "dragonheir.db"

    @property
    def export_path(self) -> Path:
        return self.data_dir / "dragonheir-account.json"

    def price(self, model=None):
        return PRICES.get(model or self.model, PRICES["claude-opus-5-5"])
