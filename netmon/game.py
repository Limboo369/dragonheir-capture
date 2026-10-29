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
