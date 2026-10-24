"""CI check: build the window, feed it one status update, close it."""
from dhcapture.gui import App

app = App()
app.q.put({
    "captured": 3, "read": 1, "skipped": 2, "last": "hero_detail: 4 items", "error": "",
    "counts": {"heroes": 2, "gear": 1, "artifacts": 1, "resources": 0},
    "sweep": {"done": 1, "total": 2, "todo": ["Auster"]},
    "heroes": [
        {"name": "Auster", "level": None, "power": 55000, "detailed": False, "gear": 0, "artifact": None},
        {"name": "Hvitar", "level": 48, "power": 51234, "detailed": True, "gear": 1, "artifact": "Misty Conch"},
    ],
    "spent_today": 0.01, "spent_total": 0.02, "event": (1, "done", "Hero detail · 4 items"),
})
app.root.after(1500, app.quit)
app.run()
print("gui ok")
