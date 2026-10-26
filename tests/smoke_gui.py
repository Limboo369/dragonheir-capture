"""Open the window with a temporary store, feed it one read event, close it."""
import os
import pathlib
import sys
import tempfile

os.chdir(tempfile.mkdtemp())


def main():
    from dhreader.gui import App
    from dhreader.store import Store

    store = Store(path=pathlib.Path(os.getcwd()) / "account.json")
    store.merge("Oggok", {"level": 59, "stars": 3, "power": 13005, "stats": {"hp": 22099}})
    app = App(reader=None, store=store)
    app.on_event({"kind": "read", "hero": "Oggok", "changed": ["stats.hp"]})
    app.root.after(1500, app.root.destroy)
    app.run()
    print("window ok")


if __name__ == "__main__":
    sys.exit(main())
