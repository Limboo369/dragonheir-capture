"""Background sampling and the numbers the window shows."""
import csv
import statistics
import threading
import time
from collections import deque
from datetime import datetime

from . import probes
from .game import Tracker

INTERNET = "1.1.1.1"
KEEP = 600  # seconds of history

COUNTRIES = {"SG": "Singapore", "HK": "Hong Kong", "JP": "Japan", "KR": "Korea", "US": "United States",
             "DE": "Germany", "NL": "Netherlands", "FR": "France", "GB": "United Kingdom", "CN": "China",
             "TW": "Taiwan", "BR": "Brazil", "RU": "Russia", "IN": "India", "AU": "Australia",
             "FI": "Finland", "SE": "Sweden", "PL": "Poland", "IE": "Ireland", "CA": "Canada"}


def median(xs):
    return statistics.median(xs) if xs else None


def jitter(xs):
    """Mean change between consecutive replies (ms)."""
    if len(xs) < 3:
        return None
    return sum(abs(a - b) for a, b in zip(xs, xs[1:])) / (len(xs) - 1)


def loss_pct(samples):
    if not samples:
        return None
    return 100.0 * sum(1 for _, v in samples if v is None) / len(samples)


def grade(ping, loss, jit, stalls, base_ping=300):
    """'good' | 'warn' | 'bad' for one hop."""
    if ping is None and loss is None:
        return "idle"
    if (loss or 0) >= 2 or (stalls or 0) >= 2 or (ping or 0) > base_ping + 150 or (jit or 0) > 80:
        return "bad"
    if (loss or 0) >= 0.5 or (stalls or 0) >= 1 or (ping or 0) > base_ping or (jit or 0) > 40:
        return "warn"
    return "good"


def verdict(router, internet, game):
    """Overall status and where the problem sits. Each argument is a grade."""
    worst = "bad" if "bad" in (router, internet, game) else "warn" if "warn" in (router, internet, game) else "good"
    if router in ("bad", "warn"):
        where = "Wi-Fi / router"
    elif internet in ("bad", "warn"):
        where = "Your internet"
    elif game in ("bad", "warn"):
        where = "Route to server"
    else:
        where = None
    if game == "idle" and worst == "good":
        worst = "idle"
    return worst, where


class Series:
    def __init__(self):
        self.d = deque()
        self.lock = threading.Lock()

    def add(self, v, t=None, **extra):
        t = t or time.time()
        with self.lock:
            self.d.append((t, v, extra) if extra else (t, v))
            while self.d and self.d[0][0] < t - KEEP:
                self.d.popleft()

    def since(self, secs):
        cut = time.time() - secs
        with self.lock:
            return [s for s in self.d if s[0] >= cut]


class Monitor:
    def __init__(self, log_dir=None):
        self.router_ip = None
        self.router, self.internet, self.game_icmp, self.game_tcp = Series(), Series(), Series(), Series()
        self.game = Series()  # per second: (t, ms, {"lost": n, "src": ...})
        self.tracker = Tracker()
        self.running = False
        self.server = None  # (lip, lport, rip, rport)
        self.place = {}
        self.link = None
        self.link_prev = None
        self.link_window = deque()  # (t, retrans_delta, segs_delta, timeouts_delta)
        self.servers_seen = []
        self.stop = threading.Event()
        self.log_dir = log_dir
        self._csv = None

    # ---------- threads ----------
    def start(self):
        for fn in (self._watch_game, self._ping_router, self._ping_internet, self._ping_game, self._tcp_game,
                   self._link_loop):
            threading.Thread(target=fn, daemon=True).start()

    def _every(self, secs, fn):
        while not self.stop.is_set():
            t = time.time()
            try:
                fn()
            except Exception:
                pass
            self.stop.wait(max(0.05, secs - (time.time() - t)))

    def _watch_game(self):
        def step():
            self.router_ip = probes.gateway()
            running, best, _ = self.tracker.refresh()
            self.running = running
            if best != self.server:
                self.server = best
                self.link, self.link_prev = None, None
                self.link_window.clear()
                if best:
                    self.link = probes.LinkStats((best[0], best[1]), (best[2], best[3]))
                    if best[2] not in [s[0] for s in self.servers_seen]:
                        self.servers_seen.append((best[2], best[3], time.time()))
                        threading.Thread(target=self._geo, args=(best[2],), daemon=True).start()
        self._every(3, step)

    def _geo(self, ip):
        g = probes.geolocate(ip)
        if g:
            self.place[ip] = g

    def _ping_router(self):
        self._every(1, lambda: self.router.add(probes.icmp_ping(self.router_ip, 900)) if self.router_ip else None)

    def _ping_internet(self):
        self._every(1, lambda: self.internet.add(probes.icmp_ping(INTERNET, 900)))

    def _ping_game(self):
        self._every(1, lambda: self.game_icmp.add(probes.icmp_ping(self.server[2], 900)) if self.server else None)

    def _tcp_game(self):
        self._every(5, lambda: self.game_tcp.add(probes.tcp_ping(self.server[2], self.server[3])) if self.server else None)

    def _link_loop(self):
        self._every(1, self._link_step)

    def _link_step(self):
        """One point per second for the game line: the real game connection when readable, else ICMP."""
        if not self.server:
            return
        now = time.time()
        cur = self.link.read() if self.link else None
        ms, lost, src = None, 0, "icmp"
        if cur:
            src = "link"
            p = self.link_prev
            if p:
                rt = max(0, cur["retrans"] - p["retrans"])
                to = max(0, cur["timeouts"] - p["timeouts"])
                sg = max(0, cur["segs_out"] - p["segs_out"])
                self.link_window.append((now, rt, sg, to))
                lost = rt
                if cur["count_rtt"] > p["count_rtt"]:
                    ms = float(cur["sample_rtt"])
            self.link_prev = cur
            while self.link_window and self.link_window[0][0] < now - 60:
                self.link_window.popleft()
            if ms is None and cur["rtt"]:
                ms = float(cur["rtt"])
        else:
            last = self.game_icmp.since(1.5)
            ms = last[-1][1] if last else None
            lost = 1 if (last and last[-1][1] is None) else 0
        self.game.add(ms, now, lost=lost, src=src)
        self._log(now, ms, lost)

    def _log(self, now, ms, lost):
        if not self.log_dir:
            return
        try:
            day = datetime.fromtimestamp(now).strftime("%Y-%m-%d")
            if not self._csv or self._csv[0] != day:
                path = self.log_dir / f"net-{day}.csv"
                new = not path.exists()
                fh = open(path, "a", newline="", encoding="utf-8")
                w = csv.writer(fh)
                if new:
                    w.writerow(["time", "server", "game_ms", "game_lost", "router_ms", "internet_ms"])
                self._csv = (day, fh, w)
            r, i = self.router.since(1.5), self.internet.since(1.5)
            self._csv[2].writerow([datetime.fromtimestamp(now).strftime("%H:%M:%S"),
                                   f"{self.server[2]}:{self.server[3]}" if self.server else "",
                                   "" if ms is None else round(ms), lost,
                                   "" if not r or r[-1][1] is None else round(r[-1][1]),
                                   "" if not i or i[-1][1] is None else round(i[-1][1])])
            self._csv[1].flush()
        except OSError:
            pass

    # ---------- numbers for the window ----------
    def hop(self, series, secs=60):
        s = series.since(secs)
        ok = [v for _, v in s if v is not None]
        recent = [v for _, v in s[-10:] if v is not None]
        return {"ping": median(recent), "loss": loss_pct(s), "jitter": jitter(ok[-20:]), "n": len(s)}

    def snapshot(self):
        r = self.hop(self.router)
        i = self.hop(self.internet)
        g = {"running": self.running, "server": self.server, "ping": None, "loss": None, "jitter": None,
             "stalls": None, "src": None, "icmp": self.hop(self.game_icmp), "tcp": self.hop(self.game_tcp, 120)}
        if self.server:
            pts = self.game.since(60)
            vals = [p[1] for p in pts if p[1] is not None]
            g["ping"] = median(vals[-10:])
            g["jitter"] = jitter(vals[-20:])
            if self.link and self.link.ok and self.link_prev:
                g["src"] = "link"
                segs = sum(w[2] for w in self.link_window)
                rt = sum(w[1] for w in self.link_window)
                g["loss"] = (100.0 * rt / segs) if segs else 0.0
                g["stalls"] = sum(w[3] for w in self.link_window)
                if self.link_prev.get("rttvar"):
                    g["jitter"] = float(self.link_prev["rttvar"])
            else:
                g["src"] = "icmp"
                g["loss"] = g["tcp"]["loss"]  # ICMP no-replies are normal here, they show under Drops
            ip = self.server[2]
            pl = self.place.get(ip) or {}
            g["place"] = COUNTRIES.get(pl.get("country"), pl.get("country")) if pl else None
            g["city"] = pl.get("city")
            g["org"] = pl.get("org")
        rg = grade(r["ping"], r["loss"], r["jitter"], None, base_ping=30) if self.router_ip else "idle"
        if rg == "bad" and r["loss"] == 100 and (i["loss"] or 0) < 50:
            rg = "idle"  # some routers simply don't answer pings
        ig = grade(i["ping"], i["loss"], i["jitter"], None, base_ping=80)
        # ~220 ms is normal to Singapore from Europe, so the game hop is graded around that
        gg = grade(g["ping"], g["loss"], g["jitter"], g["stalls"], base_ping=300) if self.server else "idle"
        # The game server drops some pings even when all is well (~10%); ~30% matched real lag (2026-10-29)
        il, n = g["icmp"]["loss"], g["icmp"]["n"]
        # a server that answers no ping at all tells us nothing; Loss and Stalls carry the signal then
        g["drops"] = None if (il is None or (il >= 100 and n >= 10)) else il
        if self.server and g["drops"] is not None and n >= 20:
            if il >= 25:
                gg = "bad"
            elif il >= 15 and gg == "good":
                gg = "warn"
        status, where = verdict(rg, ig, gg)
        if not self.running:
            status, where = ("idle" if status == "good" else status), where
        return {"router": dict(r, grade=rg, ip=self.router_ip), "internet": dict(i, grade=ig, ip=INTERNET),
                "game": dict(g, grade=gg), "status": status, "where": where,
                "history": self.game.since(300), "servers": list(self.servers_seen)}
