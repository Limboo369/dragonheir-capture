"""Find the running game and the server it is talking to, from the OS connection table only."""
import ipaddress
import time

import psutil

ME = ("dragonheirnet", "dragonheirreader", "python")
WEB_PORTS = {80, 443, 8080, 8443}


def is_public(ip):
    try:
        a = ipaddress.ip_address(ip)
    except ValueError:
        return False
    return a.version == 4 and a.is_global


def game_pids():
    """Processes whose name or folder says Dragonheir (the game and its launcher/helpers)."""
    pids = []
    for p in psutil.process_iter(["pid", "name", "exe"]):
        name = (p.info.get("name") or "").lower()
        if any(m in name for m in ME):
            continue
        hay = name + " " + (p.info.get("exe") or "").lower()
        if "dragonheir" in hay or "silent gods" in hay or "silentgods" in hay:
            pids.append(p.info["pid"])
    return pids


class Tracker:
    """Keeps the game's server connection across refreshes and picks the one that is the game server.

    The game keeps one long-lived connection to its server; web/CDN/SDK calls on 80/443 come and go.
    So: prefer non-web ports, then the connection that has been open longest.
    """

    def __init__(self):
        self.first_seen = {}
        self.pids = []

    def candidates(self, conns, now=None):
        now = now or time.time()
        live = {}
        for c in conns:
            if c.status != "ESTABLISHED" or not c.raddr or not is_public(c.raddr.ip):
                continue
            key = (c.laddr.ip, c.laddr.port, c.raddr.ip, c.raddr.port)
            live[key] = self.first_seen.get(key, now)
        self.first_seen = live
        return sorted(live.items(), key=lambda kv: (kv[0][3] in WEB_PORTS, kv[1]))

    def refresh(self):
        """Returns (game_running, best_connection or None, all candidate connections)."""
        self.pids = game_pids()
        if not self.pids:
            self.first_seen = {}
            return False, None, []
        conns = []
        try:
            all_conns = psutil.net_connections(kind="tcp4")
        except (psutil.AccessDenied, OSError):
            all_conns = []
        pids = set(self.pids)
        conns = [c for c in all_conns if c.pid in pids]
        cands = self.candidates(conns)
        best = cands[0][0] if cands else None
        return True, best, [k for k, _ in cands]


class TrafficPicker:
    """Picks the game server as the connection that carries the most packets.

    The game also keeps quieter connections open (login, chat, telemetry, often in other
    countries). Battle traffic dwarfs them, so the busiest connection over the last ~20 s wins,
    and it only changes when another one is clearly busier, so the choice does not flicker.
    """

    def __init__(self, alpha=0.3, switch=1.5):
        self.alpha, self.switch = alpha, switch
        self.last = {}  # key -> (time, total segments)
        self.rate = {}  # key -> smoothed segments per second

    def update(self, totals, now):
        for key in set(self.rate) | set(self.last):
            if key not in totals:
                self.rate.pop(key, None)
                self.last.pop(key, None)
        for key, total in totals.items():
            if key in self.last:
                t0, s0 = self.last[key]
                if now > t0:
                    r = max(0.0, (total - s0) / (now - t0))
                    self.rate[key] = r if key not in self.rate else self.alpha * r + (1 - self.alpha) * self.rate[key]
            self.last[key] = (now, total)

    def ready(self):
        return bool(self.rate)

    def pick(self, current):
        if not self.rate:
            return None
        best = max(self.rate, key=self.rate.get)
        if current in self.rate and best != current:
            if self.rate[best] < max(0.2, self.rate[current] * self.switch):
                return current
        return best if self.rate[best] > 0 else (current if current in self.rate else None)
