"""Watch the game window and read every new screen by itself (no hotkey).

A frame is read when it differs from the last frame we read and has stopped
changing (two grabs in a row look the same), so menus are read once, after
their open animation, and the battle scene / idle screens cost almost nothing."""
import logging
import queue
import threading
import time
import traceback

import numpy as np

from . import winlist
from .apply import apply

log = logging.getLogger("dhreader")


def thumb(img):
    """Tiny grey thumbnail for change detection (PIL image in, float array out)."""
    return np.asarray(img.convert("L").resize((96, 60)), dtype=np.float32)


def differs(a, b, thr=6.0):
    if a is None or b is None:
        return True
    return float(np.mean(np.abs(a - b))) > thr


class Watcher:
    def __init__(self, reader, store, on_event, interval=0.6):
        self.reader, self.store, self.on_event = reader, store, on_event
        self.interval = interval
        self.hwnd = None
        self.running = False
        self.paused = False
        self._force = False
        self._t = None
        self.last_frame = None
        self.stats = {"frames": 0, "reads": 0, "screens": 0}

    def start(self, hwnd):
        self.hwnd = hwnd
        if self._t and self._t.is_alive():
            return
        self.running = True
        self._t = threading.Thread(target=self._run, daemon=True)
        self._t.start()

    def stop(self):
        self.running = False

    def read_now(self):
        self._force = True

    def _run(self):
        # A screen is read once it stops changing. Hero screens have animated models and
        # effects, so a screen that keeps moving is also read, at most every few seconds;
        # after several screens that are not ours the pace slows down to spare the CPU.
        last_read, prev, last_try, misses = None, None, 0.0, 0
        while self.running:
            t0 = time.time()
            try:
                if self.paused or not self.hwnd:
                    time.sleep(0.3)
                    continue
                img = winlist.capture(self.hwnd)
                if img is None:
                    self.on_event({"kind": "nowindow"})
                    time.sleep(1.0)
                    continue
                self.stats["frames"] += 1
                self.last_frame = img
                th = thumb(img)
                stable = not differs(th, prev, 3.0)
                prev = th
                gap = 2.5 if misses < 3 else 6.0
                new = differs(th, last_read)
                if self._force or (new and (stable or t0 - last_try > gap)) or (not new and t0 - last_try > 30):
                    self._force = False
                    last_read, last_try = th, t0
                    misses = 0 if self._read(img) else misses + 1
            except Exception as e:
                log.error("watch loop: %s\n%s", e, traceback.format_exc())
                self.on_event({"kind": "error", "text": str(e)})
                time.sleep(1.0)
            time.sleep(max(0.05, self.interval - (time.time() - t0)))

    def _read(self, img):
        import cv2

        bgr = cv2.cvtColor(np.asarray(img.convert("RGB")), cv2.COLOR_RGB2BGR)
        self.stats["reads"] += 1
        res = self.reader.read(bgr)
        if not res or not res.get("screen"):
            log.info("not a hero screen (%sx%s): %s", img.width, img.height, (res or {}).get("texts"))
            self.on_event({"kind": "idle", "result": res, "size": img.size})
            return False
        self.stats["screens"] += 1
        changed, who = apply(self.store, res, self.reader.context)
        log.info("%s %s -> %s", res.get("screen"), who, changed)
        self.on_event({"kind": "read", "result": res, "hero": who, "changed": changed})
        return True
