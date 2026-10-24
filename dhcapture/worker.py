"""Background loop: capture -> gate -> read with Claude -> merge -> export."""
import threading
import time
from pathlib import Path

from . import export, winlist
from .extract import Extractor, to_jpeg
from .gate import Gate
from .store import Store


class Worker:
    def __init__(self, settings, on_status):
        self.s = settings
        self.on_status = on_status  # callable(dict), called from the worker thread
        self.store = Store(settings.db_path)
        self.gate = Gate(settings)
        self.extractor = Extractor(settings) if settings.mode == "api" else None
        self.hwnd = None
        self._stop = threading.Event()
        self._pause = threading.Event()
        self._thread = None
        self.stats = {"captured": 0, "read": 0, "skipped": 0, "last": "", "error": ""}

    # --- control -------------------------------------------------------------
    def start(self, hwnd):
        self.hwnd = hwnd
        self._pause.clear()
        if not (self._thread and self._thread.is_alive()):
            self._stop.clear()
            self._thread = threading.Thread(target=self._run, daemon=True)
            self._thread.start()

    def pause(self):
        self._pause.set()

    def resume(self):
        self._pause.clear()

    def stop(self):
        self._stop.set()

    @property
    def paused(self):
        return self._pause.is_set()

    # --- loop ----------------------------------------------------------------
    def _emit(self, **kw):
        self.stats.update(kw)
        self.on_status({**self.stats, "counts": self.store.counts(),
                        "spent_today": self.store.spent_today(), "spent_total": self.store.spent_total()})

    def _run(self):
        last_retry = 0.0
        while not self._stop.is_set():
            t0 = time.time()
            if not self._pause.is_set() and self.hwnd:
                try:
                    self._tick()
                    if self.extractor and time.time() - last_retry > 60:
                        last_retry = time.time()
                        self._retry_pending()
                except Exception as e:  # keep running whatever happens
                    self._emit(error=f"{type(e).__name__}: {e}")
            self._stop.wait(max(0.5, self.s.interval_s - (time.time() - t0)))

    def _tick(self):
        img = winlist.capture(self.hwnd)
        if img is None:
            self._emit(last="game window hidden or minimized")
            return
        self.stats["captured"] += 1
        keep, reason, h = self.gate.check(img, self.store.spent_today())
        if not keep:
            self.stats["skipped"] += 1
            self._emit(last=reason)
            return
        jpeg = to_jpeg(img, self.s.max_image_edge, self.s.jpeg_quality)
        del img
        self.gate.mark_read(h)
        name = time.strftime("%Y%m%d-%H%M%S") + f"-{h}.jpg"

        if self.s.mode != "api":  # collect mode: just save the unique screen
            self._save(self.s.captures_dir / name, jpeg)
            self.store.log_capture(h, name, None, 0.0, None)
            self.stats["read"] += 1
            self._emit(last="saved " + name, error="")
            return
        self._read_and_merge(jpeg, h, name)

    def _read_and_merge(self, jpeg, h, name, pending_path: Path = None):
        self._emit(last="reading screen...")
        data, cost, err = self.extractor.read(jpeg)
        if err:
            if "declined" in err:
                if pending_path is not None:
                    pending_path.unlink(missing_ok=True)
            elif pending_path is None:
                self._save(self.s.pending_dir / name, jpeg)  # retry later
            self.store.log_capture(h, None, None, cost, err)
            self._emit(error=err, last="will retry later")
            return False
        image_ref = None
        if self.s.keep_images:
            self._save(self.s.captures_dir / name, jpeg)
            image_ref = name
        if pending_path is not None:
            pending_path.unlink(missing_ok=True)
        self.store.log_capture(h, image_ref, data, cost, None)
        n = self.store.merge(data)
        export.write(self.store, self.s.export_path)
        self.stats["read"] += 1
        self._emit(last=f"{data.get('screen_type')}: {n} items", error="")
        return True

    def _retry_pending(self):
        for p in sorted(self.s.pending_dir.glob("*.jpg"))[:3]:
            if self._stop.is_set() or self._pause.is_set():
                return
            h = p.stem.split("-")[-1]
            if not self._read_and_merge(p.read_bytes(), h, p.name, pending_path=p):
                return

    @staticmethod
    def _save(path, jpeg):
        path.parent.mkdir(parents=True, exist_ok=True)
        path.write_bytes(jpeg)
