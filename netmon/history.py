"""Every game server ever connected to, with one quality grade per minute played on it.

Kept in data/servers.json so it survives restarts. Only quality is kept long term, plus the
minute's few numbers so a grade can be explained on hover.
"""
import json
import threading
import time

LEVELS = ("Excellent", "Good", "OK", "Poor", "Bad")
SCORE = {lv: 4 - i for i, lv in enumerate(LEVELS)}  # Excellent 4 ... Bad 0
KEEP_MINUTES = 20000  # per server, about two weeks of daily play

# What each grade means, for the hover tip. Ping is judged against the server's own best
# minute, because ~220 ms is simply the distance to Singapore and not a fault.
RULES = (
    ("Excellent", "no resent packets, no freezes, steady ping"),
    ("Good", "under 0.5% resent, no freezes, jitter under 30 ms"),
    ("OK", "under 2% resent, at most 1 freeze, jitter under 50 ms"),
    ("Poor", "under 5% resent, at most 3 freezes, jitter under 80 ms"),
    ("Bad", "anything worse, or ping twice its best"),
)


def grade_minute(ping, loss, jitter, stalls, best_ping=None):
    loss, jitter, stalls = loss or 0, jitter or 0, stalls or 0
    if loss < 0.2 and stalls == 0 and jitter < 15:
        i = 0
    elif loss < 0.5 and stalls == 0 and jitter < 30:
        i = 1
    elif loss < 2 and stalls <= 1 and jitter < 50:
        i = 2
    elif loss < 5 and stalls <= 3 and jitter < 80:
        i = 3
    else:
        i = 4
    if ping and best_ping:
        if ping > best_ping * 2:
            i = 4
        elif ping > best_ping * 1.5:
            i = max(i, 3)
        elif ping > best_ping * 1.25:
            i = max(i, 2)
    return LEVELS[i]


def overall(minutes):
    """One grade for a list of minute records: the average score, rounded toward the worse grade."""
    if not minutes:
        return None
    avg = sum(SCORE[m["q"]] for m in minutes) / len(minutes)
    return LEVELS[min(4, max(0, 4 - int(avg + 0.25)))]


def blocks(minutes, size=10, count=36):
    """The most recent minutes grouped in blocks of `size`: [(start_time, grade, n)], oldest first."""
    out, cur = [], []
    for m in minutes:
        if cur and (m["t"] - cur[0]["t"] >= size * 60):
            out.append(cur)
            cur = []
        cur.append(m)
    if cur:
        out.append(cur)
    return [(b[0]["t"], overall(b), len(b)) for b in out[-count:]]


class History:
    def __init__(self, path=None):
        self.path = path
        self.lock = threading.Lock()
        self.servers = {}
        if path:
            try:
                self.servers = json.loads(path.read_text(encoding="utf-8")).get("servers", {})
            except (OSError, ValueError, AttributeError):
                self.servers = {}

    def seen(self, ip, port, place=None):
        with self.lock:
            s = self.servers.setdefault(ip, {"port": port, "first": time.time(), "minutes": []})
            s["port"], s["last"] = port, time.time()
            if place:
                s["place"] = place

    def add_minute(self, ip, port, ping, loss, jitter, stalls, t=None):
        t = t or time.time()
        with self.lock:
            s = self.servers.setdefault(ip, {"port": port, "first": t, "minutes": []})
            pings = [m["p"] for m in s["minutes"] if m.get("p")]
            best = min(pings + ([ping] if ping else [])) if (pings or ping) else None
            q = grade_minute(ping, loss, jitter, stalls, best)
            s["minutes"].append({"t": round(t), "q": q, "p": None if ping is None else round(ping),
                                 "l": None if loss is None else round(loss, 2),
                                 "j": None if jitter is None else round(jitter), "s": stalls or 0})
            del s["minutes"][:-KEEP_MINUTES]
            s["last"] = t
        self.save()
        return q

    def save(self):
        if not self.path:
            return
        with self.lock:
            data = json.dumps({"version": 1, "servers": self.servers})
        try:
            tmp = self.path.with_suffix(".tmp")
            tmp.write_text(data, encoding="utf-8")
            tmp.replace(self.path)
        except OSError:
            pass

    def summary(self):
        """Servers newest first, each with its overall grade, grade shares and recent blocks."""
        with self.lock:
            items = [(ip, dict(s, minutes=list(s["minutes"]))) for ip, s in self.servers.items()]
        out = []
        for ip, s in items:
            mins = s["minutes"]
            share = {lv: 0 for lv in LEVELS}
            for m in mins:
                share[m["q"]] += 1
            pings = sorted(m["p"] for m in mins if m.get("p"))
            out.append({"ip": ip, "port": s.get("port"), "place": s.get("place") or {}, "first": s.get("first"),
                        "last": s.get("last") or s.get("first"), "minutes": len(mins), "grade": overall(mins),
                        "share": share, "blocks": blocks(mins), "ping": pings[len(pings) // 2] if pings else None})
        out.sort(key=lambda x: -(x["last"] or 0))
        return out
