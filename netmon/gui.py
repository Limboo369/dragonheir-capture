"""The monitor window: one big number, the route at a glance, a live chart. Details live in hover tips."""
import os
import subprocess
import sys
import time
import tkinter as tk

import customtkinter as ctk

BG, CARD, CARD_HI, LINE, GRID = "#0e0f13", "#17181d", "#1f2128", "#2a2c34", "#23252c"
FG, MUTED, FAINT = "#f2f3f5", "#8b8d98", "#5c5f6b"
SERIES = "#3987e5"
# status palette: never reused for anything else, always shown with an icon and a word
STATUS = {"good": "#0ca30c", "warn": "#fab219", "bad": "#d03b3b", "idle": "#5c5f6b"}
ICON = {"good": "●", "warn": "▲", "bad": "✕", "idle": "○"}
WORD = {"good": "Smooth", "warn": "Unstable", "bad": "Lagging", "idle": "Waiting"}
FONT = "Segoe UI" if sys.platform == "win32" else "Helvetica"
RANGES = {"1m": 60, "5m": 300, "10m": 600}


def f(size, weight="normal"):
    return ctk.CTkFont(family=FONT, size=size, weight=weight)


def ms(v):
    return "–" if v is None else f"{v:.0f}"


def pct(v):
    return "–" if v is None else (f"{v:.1f}%" if v < 10 else f"{v:.0f}%")


class Tip:
    """Hover tooltip for any widget or canvas item; text can be a function so it stays live."""

    def __init__(self, root):
        self.root = root
        self.win = None

    def bind(self, widget, text, tag=None):
        enter = lambda e: self.show(e, text() if callable(text) else text)
        if tag is not None:
            widget.tag_bind(tag, "<Enter>", enter)
            widget.tag_bind(tag, "<Leave>", lambda e: self.hide())
        else:
            widget.bind("<Enter>", enter, add="+")
            widget.bind("<Leave>", lambda e: self.hide(), add="+")

    def show(self, e, text, x=None, y=None):
        self.hide()
        if not text:
            return
        self.win = w = tk.Toplevel(self.root)
        w.overrideredirect(True)
        w.attributes("-topmost", True)
        w.configure(bg=LINE)
        tk.Label(w, text=text, justify="left", bg=CARD_HI, fg=FG, font=(FONT, 9), padx=10, pady=7).pack(padx=1, pady=1)
        w.geometry(f"+{(x if x is not None else e.x_root) + 14}+{(y if y is not None else e.y_root) + 14}")

    def hide(self):
        if self.win:
            self.win.destroy()
            self.win = None


class App:
    def __init__(self, monitor=None, log_dir=None):
        ctk.set_appearance_mode("dark")
        self.root = ctk.CTk()
        self.root.title("Dragonheir Net")
        self.root.geometry("400x600")
        self.root.minsize(360, 540)
        self.root.configure(fg_color=BG)
        self.mon, self.log_dir = monitor, log_dir
        self.range = "5m"
        self.snap = None
        self.hover_x = None
        self.tip = Tip(self.root)
        self._build()
        self.root.after(300, self._tick)

    # ---------- layout ----------
    def _build(self):
        top = ctk.CTkFrame(self.root, fg_color=BG)
        top.pack(fill="x", padx=16, pady=(14, 8))
        ctk.CTkLabel(top, text="Dragonheir Net", font=f(17, "bold"), text_color=FG).pack(side="left")
        self.pin = ctk.CTkButton(top, text="📌", width=30, height=26, corner_radius=8, font=f(12),
                                 fg_color=CARD_HI, hover_color=LINE, command=self.toggle_pin)
        self.pin.pack(side="right", padx=(6, 0))
        self.tip.bind(self.pin, "Keep on top of the game")
        self.pill = ctk.CTkLabel(top, text="", font=f(12, "bold"), corner_radius=12, height=26, fg_color=CARD_HI)
        self.pill.pack(side="right")
        self.tip.bind(self.pill, self._status_tip)

        # hero: the one number that matters
        hero = ctk.CTkFrame(self.root, fg_color=CARD, corner_radius=18)
        hero.pack(fill="x", padx=16, pady=6)
        row = ctk.CTkFrame(hero, fg_color=CARD)
        row.pack(fill="x", padx=16, pady=(12, 0))
        self.big = ctk.CTkLabel(row, text="–", font=f(52, "bold"), text_color=FG)
        self.big.pack(side="left")
        ctk.CTkLabel(row, text=" ms", font=f(16), text_color=MUTED).pack(side="left", pady=(22, 0))
        self.where = ctk.CTkLabel(row, text="", font=f(12), text_color=MUTED, justify="right", anchor="e")
        self.where.pack(side="right", pady=(10, 0))
        self.tip.bind(self.where, self._server_tip)
        self.tip.bind(self.big, self._ping_tip)

        chips = ctk.CTkFrame(hero, fg_color=CARD)
        chips.pack(fill="x", padx=12, pady=(4, 14))
        self.chips = {}
        for key, label, tip in (("loss", "Loss", self._loss_tip), ("drops", "Drops", self._drops_tip),
                                ("jitter", "Jitter", self._jitter_tip),
                                ("stalls", "Stalls", self._stall_tip)):
            c = ctk.CTkFrame(chips, fg_color=CARD_HI, corner_radius=12)
            c.pack(side="left", fill="x", expand=True, padx=4)
            ctk.CTkLabel(c, text=label, font=f(11), text_color=MUTED).pack(pady=(6, 0))
            v = ctk.CTkLabel(c, text="–", font=f(16, "bold"), text_color=FG)
            v.pack(pady=(0, 6))
            self.chips[key] = v
            for w in (c, *c.winfo_children()):
                self.tip.bind(w, tip)

        # route: PC -> router -> internet -> server, each hop coloured by its own health
        route = ctk.CTkFrame(self.root, fg_color=CARD, corner_radius=18)
        route.pack(fill="x", padx=16, pady=6)
        self.route = tk.Canvas(route, height=84, bg=CARD, highlightthickness=0)
        self.route.pack(fill="x", padx=12, pady=8)
        self.route.bind("<Configure>", lambda e: self._draw_route())

        # chart
        chart = ctk.CTkFrame(self.root, fg_color=CARD, corner_radius=18)
        chart.pack(fill="both", expand=True, padx=16, pady=6)
        head = ctk.CTkFrame(chart, fg_color=CARD)
        head.pack(fill="x", padx=14, pady=(10, 0))
        ctk.CTkLabel(head, text="Game ping", font=f(12, "bold"), text_color=FG).pack(side="left")
        self.seg = ctk.CTkSegmentedButton(head, values=list(RANGES), command=self.set_range, font=f(11), height=24,
                                          fg_color=CARD_HI, selected_color=LINE, selected_hover_color=LINE,
                                          unselected_color=CARD_HI, unselected_hover_color=LINE, text_color=FG)
        self.seg.set(self.range)
        self.seg.pack(side="right")
        self.chart = tk.Canvas(chart, bg=CARD, highlightthickness=0, height=170)
        self.chart.pack(fill="both", expand=True, padx=10, pady=(6, 10))
        self.chart.bind("<Configure>", lambda e: self._draw_chart())
        self.chart.bind("<Motion>", self._chart_hover)
        self.chart.bind("<Leave>", self._chart_leave)

        foot = ctk.CTkFrame(self.root, fg_color=BG)
        foot.pack(fill="x", padx=18, pady=(2, 12))
        self.hint = ctk.CTkLabel(foot, text="", font=f(11), text_color=FAINT, anchor="w")
        self.hint.pack(side="left")
        b = ctk.CTkButton(foot, text="Log", width=46, height=24, corner_radius=8, font=f(11),
                          fg_color=CARD_HI, hover_color=LINE, text_color=MUTED, command=self.open_log)
        b.pack(side="right")
        self.tip.bind(b, "Open the folder with the per-second log (one CSV per day)")

    # ---------- updates ----------
    def _tick(self):
        if self.mon:
            self.snap = self.mon.snapshot()
            self._render()
        self.root.after(1000, self._tick)

    def _render(self):
        s = self.snap
        g = s["game"]
        st = s["status"]
        word = WORD[st]
        if not g["running"]:
            word = "Game offline" if st == "idle" else word
        elif not g["server"]:
            word = "Finding server" if st == "idle" else word
        self.pill.configure(text=f"  {ICON[st]}  {word}  ", text_color=STATUS[st])
        self.big.configure(text=ms(g["ping"]), text_color=FG if g["ping"] is not None else FAINT)
        place = g.get("place") or ""
        self.where.configure(text=(place + ("\n" + g["server"][2] if g["server"] else "")) if g["server"] else
                             ("Start the game" if not g["running"] else "Waiting for server"))
        self.chips["loss"].configure(text=pct(g["loss"]), text_color=self._lvl(g["loss"], 0.5, 2))
        self.chips["drops"].configure(text=pct(g["icmp"]["loss"]), text_color=self._lvl(g["icmp"]["loss"], 15, 25))
        self.chips["jitter"].configure(text=ms(g["jitter"]), text_color=self._lvl(g["jitter"], 40, 80))
        self.chips["stalls"].configure(text="–" if g["stalls"] is None else str(g["stalls"]),
                                       text_color=self._lvl(g["stalls"], 1, 1))
        self.hint.configure(text=(f"Problem: {s['where']}" if s["where"] else
                                  ("~220 ms is normal for Singapore" if g.get("place") == "Singapore" else "")))
        self.hint.configure(text_color=STATUS[st] if s["where"] else FAINT)
        self._draw_route()
        self._draw_chart()

    @staticmethod
    def _lvl(v, warn, bad):
        if v is None:
            return FG
        return STATUS["bad"] if v >= bad else STATUS["warn"] if v >= warn else FG

    # ---------- route strip ----------
    def _draw_route(self):
        c = self.route
        c.delete("all")
        w = max(c.winfo_width(), 300)
        s = self.snap
        hops = [("pc", "PC", None), ("router", "Router", s and s["router"]),
                ("internet", "Internet", s and s["internet"]), ("game", "Server", s and s["game"])]
        xs = [24 + i * (w - 48) / 3 for i in range(4)]
        y = 28
        for i in range(1, 4):
            h = hops[i][2]
            col = STATUS[h["grade"]] if h else STATUS["idle"]
            c.create_line(xs[i - 1] + 10, y, xs[i] - 10, y, fill=col if h and h["grade"] in ("warn", "bad") else LINE,
                          width=2, capstyle="round")
        for i, (key, label, h) in enumerate(hops):
            col = FG if key == "pc" else STATUS[h["grade"]] if h else STATUS["idle"]
            tag = f"hop_{key}"
            c.create_oval(xs[i] - 9, y - 9, xs[i] + 9, y + 9, fill=CARD, outline=col, width=2, tags=tag)
            if key != "pc" and h and h["grade"] != "idle":
                c.create_oval(xs[i] - 4, y - 4, xs[i] + 4, y + 4, fill=col, outline="", tags=tag)
            c.create_text(xs[i], y + 24, text=label, fill=MUTED, font=(FONT, 9), tags=tag)
            if key != "pc":
                c.create_text(xs[i], y + 41, text=(ms(h["ping"]) + " ms") if h and h["ping"] is not None else "–",
                              fill=FG, font=(FONT, 10, "bold"), tags=tag)
                c.create_rectangle(xs[i] - 40, 0, xs[i] + 40, 84, fill="", outline="", tags=tag)
                self.tip.bind(c, lambda k=key: self._hop_tip(k), tag=tag)

    # ---------- chart ----------
    def set_range(self, v):
        self.range = v
        self._draw_chart()

    def _chart_geom(self):
        c = self.chart
        w, h = max(c.winfo_width(), 200), max(c.winfo_height(), 120)
        return 34, 8, w - 8, h - 22  # left, top, right, bottom

    def _points(self):
        if not self.snap:
            return []
        hist = self.mon.game.since(RANGES[self.range]) if self.range != "5m" else self.snap["history"]
        return hist

    def _draw_chart(self):
        c = self.chart
        c.delete("all")
        L, T, R, B = self._chart_geom()
        pts = self._points()
        now = time.time()
        span = RANGES[self.range]
        vals = [p[1] for p in pts if p[1] is not None]
        top = max(300, (max(vals) if vals else 0) * 1.15)
        step = 100 if top <= 600 else 250 if top <= 1500 else 500
        top = step * -(-top // step)
        sx = lambda t: R - (now - t) / span * (R - L)
        sy = lambda v: B - min(v, top) / top * (B - T)
        self._scale = (L, T, R, B, now, span, sx, sy)
        v = 0
        while v <= top:
            yy = sy(v)
            c.create_line(L, yy, R, yy, fill=GRID if v else LINE, width=1)
            c.create_text(L - 6, yy, text=f"{v:.0f}", fill=FAINT, font=(FONT, 8), anchor="e")
            v += step
        for frac, lab in ((1, f"-{span // 60}m"), (0.5, f"-{span // 120}m" if span >= 120 else "-30s"), (0, "now")):
            c.create_text(R - frac * (R - L), B + 12, text=lab, fill=FAINT, font=(FONT, 8),
                          anchor="w" if frac == 1 else "e" if frac == 0 else "center")
        if not pts:
            c.create_text((L + R) / 2, (T + B) / 2, text="Waiting for the game", fill=FAINT, font=(FONT, 10))
            return
        # line segments, broken where there was no answer
        seg, segs, last = [], [], None
        for p in pts:
            if p[1] is None:
                continue
            if seg and p[0] - last > 3.5:  # bridge single missed pings, break on real outages
                segs.append(seg)
                seg = []
            seg.append((sx(p[0]), sy(p[1])))
            last = p[0]
        if seg:
            segs.append(seg)
        for sg in segs:
            if len(sg) > 1:
                poly = [sg[0][0], B] + [xy for pt in sg for xy in pt] + [sg[-1][0], B]
                c.create_polygon(poly, fill="#142131", outline="")
        for sg in segs:
            if len(sg) > 1:
                c.create_line(*[xy for pt in sg for xy in pt], fill=SERIES, width=2, smooth=False,
                              capstyle="round", joinstyle="round")
            else:
                c.create_oval(sg[0][0] - 2, sg[0][1] - 2, sg[0][0] + 2, sg[0][1] + 2, fill=SERIES, outline="")
        # baseline ticks: red = packets the game had to resend, grey = a ping without answer
        for p in pts:
            lost = (p[2].get("lost") if len(p) > 2 else 0) or 0
            if lost or p[1] is None:
                x = sx(p[0])
                c.create_line(x, B - 1, x, B - (10 if lost else 5), fill=STATUS["bad"] if lost else FAINT,
                              width=2, capstyle="round")
        if self.hover_x is not None:
            self._draw_hover(pts)

    def _chart_hover(self, e):
        self.hover_x = e.x
        self._draw_chart()

    def _chart_leave(self, e):
        self.hover_x = None
        self.tip.hide()
        self._draw_chart()

    def _draw_hover(self, pts):
        L, T, R, B, now, span, sx, sy = self._scale
        if not (L <= self.hover_x <= R):
            self.tip.hide()
            return
        p = min(pts, key=lambda p: abs(sx(p[0]) - self.hover_x))
        x = sx(p[0])
        self.chart.create_line(x, T, x, B, fill=FAINT, dash=(2, 3))
        if p[1] is not None:
            y = sy(p[1])
            self.chart.create_oval(x - 5, y - 5, x + 5, y + 5, fill=SERIES, outline=CARD, width=2)
        lost = (p[2].get("lost") if len(p) > 2 else 0) or 0
        when = time.strftime("%H:%M:%S", time.localtime(p[0]))
        txt = f"{when}\n{ms(p[1])} ms" + (f"\n{lost} packet(s) resent" if lost else "") + \
              ("\nno answer" if p[1] is None and not lost else "")
        rx, ry = self.chart.winfo_rootx(), self.chart.winfo_rooty()
        self.tip.show(None, txt, x=rx + int(x), y=ry - 70)

    # ---------- tooltips ----------
    def _status_tip(self):
        s = self.snap
        if not s:
            return ""
        if s["where"]:
            return {"Wi-Fi / router": "Lag starts in your home network.\nTry a cable or move closer to the router.",
                    "Your internet": "Your router is fine, but the internet\nconnection itself is slow or losing packets.",
                    "Route to server": "Home and internet are fine.\nThe slowdown is on the long route to the\n"
                                       "game server (provider or server side)."}[s["where"]]
        if not s["game"]["running"]:
            return "Start Dragonheir. The monitor finds it by itself."
        return "Everything looks normal."

    def _server_tip(self):
        g = self.snap and self.snap["game"]
        if not g or not g["server"]:
            return "The game's server appears here once you log in."
        lines = [f"Server  {g['server'][2]}:{g['server'][3]}"]
        if g.get("city") or g.get("place"):
            lines.append(f"Place   {', '.join(x for x in (g.get('city'), g.get('place')) if x)}")
        if g.get("org"):
            lines.append(f"Network {g['org']}")
        seen = self.snap["servers"]
        if len(seen) > 1:
            lines.append("Earlier this session: " + ", ".join(ip for ip, _, _ in seen[:-1]))
        return "\n".join(lines)

    def _ping_tip(self):
        g = self.snap and self.snap["game"]
        if not g or not g["server"]:
            return ""
        src = "the game's own connection" if g["src"] == "link" else "ping (ICMP)"
        t = g["tcp"]
        return (f"Round trip to the game server, from {src}.\n"
                f"Ping (ICMP): {ms(g['icmp']['ping'])} ms, {pct(g['icmp']['loss'])} no reply\n"
                f"TCP connect: {ms(t['ping'])} ms")

    def _loss_tip(self):
        g = self.snap and self.snap["game"]
        if not g or not g["server"]:
            return "Packets lost on the way to the server."
        if g["src"] == "link":
            return ("Share of the game's packets Windows had to resend\nin the last minute. Above 2% you feel it.\n"
                    "Drops shows the pings the server ignored.")
        return ("Test connections to the server that failed (last 2 min).\n"
                "Run as admin to measure the game's own packets.")

    def _drops_tip(self):
        return ("Pings the server did not answer in the last minute.\n"
                "Around 10% is normal for this server, 30% or more matched real lag.")

    def _jitter_tip(self):
        return "How much the ping jumps around.\nAbove 40 ms movement feels uneven."

    def _stall_tip(self):
        return ("Times in the last minute the connection waited\nfor a lost packet long enough to freeze the game.")

    def _hop_tip(self, key):
        s = self.snap
        if not s:
            return ""
        h = s[key]
        name = {"router": "Your router", "internet": "Internet (1.1.1.1)", "game": "Game server"}[key]
        ip = h.get("ip") or (h["server"][2] if key == "game" and h.get("server") else None)
        if key == "router" and not ip:
            return "Router not found."
        return (f"{name}{'  ' + ip if ip else ''}\nPing {ms(h['ping'])} ms · loss {pct(h['loss'])} · "
                f"jitter {ms(h['jitter'])} ms\n{ICON[h['grade']]} {WORD[h['grade']]}")

    # ---------- actions ----------
    def toggle_pin(self):
        on = not bool(self.root.attributes("-topmost"))
        self.root.attributes("-topmost", on)
        self.pin.configure(fg_color=SERIES if on else CARD_HI)

    def open_log(self):
        if self.log_dir and sys.platform == "win32":
            subprocess.Popen(["explorer", str(self.log_dir)])
        elif self.log_dir:
            os.makedirs(self.log_dir, exist_ok=True)

    def run(self):
        self.root.mainloop()
