"""Decide which captures are worth reading.

A capture is kept only when
  1. it is the same screen as the previous capture (stable, not a battle or animation),
  2. it differs from every screen already read recently (perceptual-hash dedup),
  3. the hourly call cap and the daily budget still allow it.
"""
import time
from collections import deque

import imagehash


class Gate:
    def __init__(self, settings, recent_size=300):
        self.s = settings
        self.prev_hash = None
        self.still_count = 0
        self.recent = deque(maxlen=recent_size)  # hashes already read
        self.calls = deque()  # timestamps of calls in the last hour

    @staticmethod
    def hash(img):
        # 256-bit hash: fine enough that two hero screens with the same layout differ.
        return imagehash.phash(img.convert("L").resize((512, 512)), hash_size=16)

    def seen(self, h) -> bool:
        return any(h - r <= self.s.same_screen_threshold for r in self.recent)

    def check(self, img, spent_today: float):
        """Return (keep: bool, reason: str, hash)."""
        h = self.hash(img)
        # "Still" is looser than "same screen": an idling 3D hero model moves a little,
        # a battle changes a lot.
        if self.prev_hash is not None and h - self.prev_hash <= self.s.still_threshold:
            self.still_count += 1
        else:
            self.still_count = 1
        self.prev_hash = h

        if self.still_count < self.s.stable_frames:
            return False, "moving", h
        if self.seen(h):
            return False, "duplicate", h
        now = time.time()
        while self.calls and now - self.calls[0] > 3600:
            self.calls.popleft()
        if self.s.mode == "api":
            if len(self.calls) >= self.s.max_calls_per_hour:
                return False, "hourly cap", h
            if spent_today >= self.s.daily_budget_usd:
                return False, "daily budget", h
        return True, "new", h

    def mark_read(self, h):
        self.recent.append(h)
        self.calls.append(time.time())
