import json
import logging
import sys

from .paths import app_dir


def selftest(image, out):
    """Read one screenshot with the bundled models and data, write the result as JSON (used by CI on the exe)."""
    import cv2

    from .heroes import HeroMatcher
    from .icons import Icons
    from .pipeline import Reader

    reader = Reader(icons=Icons.load(), heroes=HeroMatcher.load())
    res = reader.read(cv2.imread(image)) or {}
    keep = {k: v for k, v in res.items() if k in ("screen", "hero", "level", "power", "stats", "skill_levels")}
    keep["artifact"] = (res.get("artifact") or {}).get("name")
    keep["gear"] = [g.get("set") for g in res.get("gear") or []]
    with open(out, "w", encoding="utf-8") as fh:
        json.dump(keep, fh, default=str)


def main():
    if len(sys.argv) == 4 and sys.argv[1] == "--selftest":
        selftest(sys.argv[2], sys.argv[3])
        return 0
    d = app_dir() / "data"
    d.mkdir(parents=True, exist_ok=True)
    logging.basicConfig(filename=str(d / "reader.log"), level=logging.INFO,
                        format="%(asctime)s %(levelname)s %(message)s")
    from .gui import App
    from .heroes import HeroMatcher
    from .icons import Icons
    from .pipeline import Reader
    from .store import Store
    from .watcher import Watcher

    store = Store()
    reader = Reader(icons=Icons.load(), heroes=HeroMatcher.load())
    app = App(reader=reader, store=store)
    app.watcher = Watcher(reader, store, app.on_event)
    app.run()


if __name__ == "__main__":
    sys.exit(main())
