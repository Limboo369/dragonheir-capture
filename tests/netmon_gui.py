"""Open the monitor window with made-up samples, hover the chart, close it."""
import random
import sys
import time


def main():
    from netmon.gui import App
    from netmon.monitor import Monitor

    m = Monitor()
    now = time.time()
    m.running, m.router_ip = True, "192.168.1.1"
    m.server = ("192.168.1.5", 50000, "43.134.181.208", 9031)
    m.place["43.134.181.208"] = {"city": "Singapore", "country": "SG", "org": "Tencent"}
    for k in range(300, 0, -1):
        v = None if random.random() < 0.1 else 219 + random.random() * 10
        m.game.add(v, now - k, lost=0, src="icmp")
        m.game_icmp.add(v, now - k)
        m.router.add(4, now - k)
        m.internet.add(10, now - k)
    app = App(monitor=m, prefs={})

    def poke():
        app._render()
        app.hover_x = app.chart.winfo_width() // 2
        app._draw_chart()
        for fn in (app._status_tip, app._server_tip, app._ping_tip, app._loss_tip, app._drops_tip,
                   lambda: app._hop_tip("router"), lambda: app._hop_tip("game")):
            assert isinstance(fn(), str)
        app.set_metric("Drops")
        assert app._drops_points(300), "no drops points"
        app._draw_chart()
        app.set_overlay(True)
        app._tick()
        assert app.overlay is not None and app.overlay.ping.cget("text") != "–"
        app.set_overlay(False)
        assert app.overlay is None and app.prefs["overlay"] is False and app.prefs["metric"] == "Drops"
        app.root.after(800, app.root.destroy)

    app.root.after(1500, poke)
    app.run()
    print("window ok")


if __name__ == "__main__":
    sys.exit(main())
