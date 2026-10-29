import json
import socket
import sys
import time
from pathlib import Path


def app_dir() -> Path:
    if getattr(sys, "frozen", False):
        return Path(sys.executable).resolve().parent
    return Path(__file__).resolve().parent.parent


def selftest(out):
    """Exercise every probe on this machine and write what came back (used by CI on the exe)."""
    import psutil

    from . import probes
    from .game import Tracker

    res = {"gateway": probes.gateway(), "icmp_1111": probes.icmp_ping("1.1.1.1", 1500),
           "tcp_github": probes.tcp_ping("github.com", 443)}
    s = socket.create_connection(("github.com", 443), timeout=5)
    try:
        local, remote = s.getsockname()[:2], s.getpeername()[:2]
        link = probes.LinkStats(local, remote)
        res["link_ok"], res["link_error"] = link.ok, link.error
        # look for it before the junk bytes below make the host close it
        allc = psutil.net_connections(kind="tcp4")
        res["pid"] = psutil.Process().pid
        res["to_remote"] = [(c.pid, c.status, tuple(c.laddr), tuple(c.raddr)) for c in allc
                            if c.raddr and c.raddr.ip == remote[0]]
        conns = [c for c in allc if c.pid == res["pid"]]
        cands = Tracker().candidates(conns)
        res["own_conn_found"] = any(k[2] == remote[0] and k[3] == remote[1] for k, _ in cands)
        s.sendall(b"\x16\x03\x01\x00\x05hello")  # a few bytes so the connection has round trips to measure
        try:
            s.settimeout(3)
            s.recv(100)
        except OSError:
            pass
        time.sleep(0.5)
        res["link"] = link.read()
    finally:
        s.close()
    with open(out, "w", encoding="utf-8") as fh:
        json.dump(res, fh, default=str)


def main():
    if len(sys.argv) == 3 and sys.argv[1] == "--selftest":
        selftest(sys.argv[2])
        return 0
    from .gui import App
    from .monitor import Monitor

    logs = app_dir() / "data"
    logs.mkdir(parents=True, exist_ok=True)
    mon = Monitor(log_dir=logs)
    mon.start()
    App(monitor=mon, log_dir=logs).run()
    return 0


if __name__ == "__main__":
    sys.exit(main())
