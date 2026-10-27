"""Local OCR (RapidOCR / PaddleOCR models on onnxruntime). No network, no API."""
import re
import threading
import unicodedata
from dataclasses import dataclass

import numpy as np

_engine = None
_lock = threading.Lock()


def engine():
    global _engine
    with _lock:
        if _engine is None:
            import rapidocr_onnxruntime.utils as ru
            from rapidocr_onnxruntime import RapidOCR

            # Two threads: reading stays fast enough and leaves the CPU to the game.
            base = ru.SessionOptions

            def opts():
                o = base()
                o.intra_op_num_threads = 2
                o.inter_op_num_threads = 1
                return o

            ru.SessionOptions = opts
            _engine = RapidOCR()
    return _engine


def norm(t: str) -> str:
    t = unicodedata.normalize("NFKC", t or "")
    t = t.replace("　", " ")
    return re.sub(r"\s+", " ", t).strip()


@dataclass
class Item:
    x0: float
    y0: float
    x1: float
    y1: float
    text: str
    conf: float

    @property
    def cx(self):
        return (self.x0 + self.x1) / 2

    @property
    def cy(self):
        return (self.y0 + self.y1) / 2

    @property
    def h(self):
        return self.y1 - self.y0

    def __repr__(self):
        return f"<{self.text!r} {int(self.x0)},{int(self.y0)}-{int(self.x1)},{int(self.y1)}>"


def detect(img: np.ndarray, max_side=1700):
    """Find and read all text on a BGR image. Coordinates are in the input image's pixels."""
    h, w = img.shape[:2]
    s = min(1.0, max_side / max(h, w))
    small = img if s >= 1 else _resize(img, s)
    res, _ = engine()(small)
    out = []
    for box, text, conf in res or []:
        xs = [p[0] / s for p in box]
        ys = [p[1] / s for p in box]
        out.append(Item(min(xs), min(ys), max(xs), max(ys), norm(text), float(conf)))
    return out


def read(crops):
    """Read one text line from each crop (no detection step). Returns [(text, conf)]."""
    crops = [c for c in crops]
    if not crops:
        return []
    ok = [i for i, c in enumerate(crops) if c is not None and c.size and min(c.shape[:2]) >= 4]
    res, _ = engine().text_recognizer([crops[i] for i in ok])
    out = [("", 0.0)] * len(crops)
    for i, (t, c) in zip(ok, res):
        out[i] = (norm(t), float(c))
    # Retry lines that came back empty or with no digits/letters on an enlarged, padded copy.
    retry = [i for i in ok if not re.search(r"\w", out[i][0]) or out[i][1] < 0.5]
    if retry:
        res2, _ = engine().text_recognizer([_prep(crops[i]) for i in retry])
        for i, (t, c) in zip(retry, res2):
            t = norm(t)
            if re.search(r"\w", t) and float(c) > out[i][1]:
                out[i] = (t, float(c))
    return out


def _resize(img, s):
    import cv2

    return cv2.resize(img, (max(1, int(img.shape[1] * s)), max(1, int(img.shape[0] * s))), interpolation=cv2.INTER_AREA)


def _prep(c):
    """Small crops read better a bit larger and with a margin around the text."""
    import cv2

    h = c.shape[0]
    if h < 40:
        f = 48.0 / h
        c = cv2.resize(c, None, fx=f, fy=f, interpolation=cv2.INTER_CUBIC)
    p = max(4, c.shape[0] // 6)
    return cv2.copyMakeBorder(c, p, p, p, p, cv2.BORDER_REPLICATE)

