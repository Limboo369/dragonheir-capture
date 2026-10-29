"""Pure logic of the net monitor: grading, verdict, picking the game's server connection."""
from collections import namedtuple

from netmon.game import Tracker, is_public
from netmon.history import History, blocks, grade_minute, overall
from netmon.monitor import grade, jitter, verdict

A = namedtuple("A", "ip port")
C = namedtuple("C", "status laddr raddr pid")


def main():
    assert grade(220, 0, 5, 0) == "good"
    assert grade(220, 1, 5, 0) == "warn"
    assert grade(220, 0, 5, 1) == "warn"
    assert grade(220, 0, 5, 2) == "bad"
    assert grade(5, 0, 1, None, base_ping=30) == "good"
    assert verdict("good", "good", "bad") == ("bad", "Route to server")
    assert verdict("warn", "good", "good") == ("warn", "Wi-Fi / router")
    assert verdict("good", "good", "idle") == ("idle", None)
    assert abs(jitter([200, 210, 200, 210]) - 10) < 1e-9
    assert is_public("43.134.181.208") and not is_public("192.168.1.1")

    t = Tracker()
    loc = A("192.168.1.5", 50000)
    web = C("ESTABLISHED", loc, A("23.1.1.1", 443), 1)
    game = C("ESTABLISHED", loc, A("43.134.181.208", 9031), 1)
    lan = C("ESTABLISHED", loc, A("192.168.1.9", 9000), 1)
    best = t.candidates([web, game, lan], now=100)
    assert best[0][0][2] == "43.134.181.208", best
    assert len(best) == 2
    # an older web connection still loses to the game port
    t2 = Tracker()
    t2.candidates([web], now=1)
    assert t2.candidates([web, game], now=50)[0][0][2] == "43.134.181.208"
    assert grade_minute(220, 0, 5, 0, 215) == "Excellent"
    assert grade_minute(220, 0.3, 20, 0, 215) == "Good"
    assert grade_minute(220, 1, 40, 1, 215) == "OK"
    assert grade_minute(220, 3, 60, 2, 215) == "Poor"
    assert grade_minute(220, 8, 5, 0, 215) == "Bad"
    assert grade_minute(470, 0, 5, 0, 215) == "Bad"  # twice the usual ping
    assert overall([{"q": "Excellent"}] * 3 + [{"q": "Good"}]) == "Excellent"
    assert overall([{"q": "Good"}, {"q": "Poor"}]) == "OK"
    h = History()
    for k in range(25):
        h.add_minute("43.134.181.208", 9031, 220, 0, 5, 0, t=1000 + 60 * k)
    s = h.summary()[0]
    assert s["grade"] == "Excellent" and s["minutes"] == 25 and len(s["blocks"]) == 3, s
    print("netmon logic ok")


if __name__ == "__main__":
    main()
