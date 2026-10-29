"""The monitor window: one big number, the route at a glance, a live chart. Details live in hover tips."""
import os
import subprocess
import sys
import time
import tkinter as tk

import customtkinter as ctk

from . import winpos

BG, CARD, CARD_HI, LINE, GRID = "#0e0f13", "#17181d", "#1f2128", "#2a2c34", "#23252c"
FG, MUTED, FAINT = "#f2f3f5", "#8b8d98", "#5c5f6b"
SERIES = "#3987e5"
# status palette: never reused for anything else, always shown with an icon and a word
STATUS = {"good": "#0ca30c", "warn": "#fab219", "bad": "#d03b3b", "idle": "#5c5f6b"}
ICON = {"good": "●", "warn": "▲", "bad": "✕", "idle": "○"}
WORD = {"good": "Smooth", "warn": "Unstable", "bad": "Lagging", "idle": "Waiting"}
FONT = "Segoe UI" if sys.platform == "win32" else "Helvetica"
RANGES = {"1m": 60, "5m": 300, "10m": 600}
# five quality grades, best to worst; always shown with their word, never colour alone
QUAL = {"Excellent": "#0ca30c", "Good": "#7cc95a", "OK": "#fab219", "Poor": "#ec835a", "Bad": "#d03b3b"}
METRICS = ("Ping", "Drops")
DROP_WINDOW = 30  # seconds each Drops point looks back over


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


class Overlay(ctk.CTkToplevel):
    """Tiny always-on-top pill over the game: status, ping and drops. Drag to move, click to open the monitor."""

    KEY = "#010203"  # painted transparent on Windows so the pill keeps its rounded corners

    def __init__(self, master, on_open, on_hide, on_move, pos=None):
        super().__init__(master)
        self.overrideredirect(True)
        self.attributes("-topmost", True)
        bg = BG
        if sys.platform == "win32":
            try:
                self.attributes("-transparentcolor", self.KEY)
                bg = self.KEY
            except tk.TclError:
                pass
        try:
            self.attributes("-alpha", 0.93)
        except tk.TclError:
            pass
        self.configure(fg_color=bg)
        self.on_open, self.on_hide, self.on_move = on_open, on_hide, on_move
        self.dragging, self.visible = False, True
        box = ctk.CTkFrame(self, fg_color=CARD, corner_radius=14, border_width=1, border_color=LINE, bg_color=bg)
        box.pack()
        self.dot = ctk.CTkLabel(box, text="○", font=f(13, "bold"), text_color=STATUS["idle"], width=14)
        self.dot.pack(side="left", padx=(12, 6), pady=6)
        self.ping = ctk.CTkLabel(box, text="–", font=f(17, "bold"), text_color=FG)
        self.ping.pack(side="left")
        ctk.CTkLabel(box, text=" ms", font=f(11), text_color=MUTED).pack(side="left", pady=(3, 0))
        ctk.CTkFrame(box, fg_color=LINE, width=1, height=18).pack(side="left", padx=10)
        self.drops = ctk.CTkLabel(box, text="–", font=f(17, "bold"), text_color=FG)
        self.drops.pack(side="left")
        ctk.CTkLabel(box, text=" drops", font=f(11), text_color=MUTED).pack(side="left", padx=(0, 14), pady=(3, 0))
        for w in (box, *box.winfo_children()):
            w.bind("<ButtonPress-1>", self._press)
            w.bind("<B1-Motion>", self._drag)
            w.bind("<ButtonRelease-1>", self._release)
            w.bind("<Button-3>", self._menu)
        self.update_idletasks()
        if pos:
            x, y = pos
        else:
            x, y = (self.winfo_screenwidth() - self.winfo_reqwidth()) // 2, 8
        self.geometry(f"+{int(x)}+{int(y)}")

    def show(self, snap):
        g = snap["game"]
        st = snap["status"]
        self.dot.configure(text=ICON[st], text_color=STATUS[st])
        self.ping.configure(text=ms(g["ping"]))
        d = g["drops"] if g["server"] else None
        self.drops.configure(text=pct(d))

    def _press(self, e):
        self._start = (e.x_root, e.y_root)
        self._dx, self._dy = e.x_root - self.winfo_x(), e.y_root - self.winfo_y()
        self._moved = False
        self.dragging = True

    def _drag(self, e):
        if abs(e.x_root - self._start[0]) + abs(e.y_root - self._start[1]) > 4:
            self._moved = True
        self.geometry(f"+{e.x_root - self._dx}+{e.y_root - self._dy}")

    def _release(self, e):
        self.dragging = False
        if self._moved:
            self.on_move(self.winfo_x(), self.winfo_y())
        else:
            self.on_open()

    def set_visible(self, on):
        if on != self.visible:
            self.visible = on
            (self.deiconify if on else self.withdraw)()
            if on:
                self.attributes("-topmost", True)
                self.lift()

    def _menu(self, e):
        m = tk.Menu(self, tearoff=0, bg=CARD_HI, fg=FG, activebackground=SERIES, bd=0)
        m.add_command(label="Open monitor", command=self.on_open)
        m.add_command(label="Hide this bar", command=self.on_hide)
        m.tk_popup(e.x_root, e.y_root)


class App:
    def __init__(self, monitor=None, log_dir=None, prefs=None, on_prefs=None):
        ctk.set_appearance_mode("dark")
        self.root = ctk.CTk()
        self.root.title("Dragonheir Net")
        self.root.geometry("400x600")
        self.root.minsize(360, 540)
        self.root.configure(fg_color=BG)
        self.mon, self.log_dir = monitor, log_dir
        self.prefs = prefs if prefs is not None else {}
        self.range = self.prefs.get("range", "5m") if self.prefs.get("range") in RANGES else "5m"
        self.metric = self.prefs.get("metric") if self.prefs.get("metric") in METRICS else "Ping"
        self.on_prefs = on_prefs
        self.overlay = None
        self.game_hwnd, self._hwnd_checked = None, 0
        self.snap = None
        self.hover_x = None
        self.tip = Tip(self.root)
        self._build()
        self.root.after(300, self._tick)
        self.root.after(500, self._dock)
        if self.prefs.get("overlay", True):
            self.root.after(600, lambda: self.set_overlay(True))

    # ---------- layout ----------
    def _build(self):
        top = ctk.CTkFrame(self.root, fg_color=BG)
        top.pack(fill="x", padx=16, pady=(14, 8))
        ctk.CTkLabel(top, text="Dragonheir Net", font=f(17, "bold"), text_color=FG).pack(side="left")
        self.pin = ctk.CTkButton(top, text="📌", width=30, height=26, corner_radius=8, font=f(12),
                                 fg_color=CARD_HI, hover_color=LINE, command=self.toggle_pin)
        self.pin.pack(side="right", padx=(6, 0))
        self.tip.bind(self.pin, "Keep this window on top of the game")
        self.ov_btn = ctk.CTkButton(top, text="▭", width=30, height=26, corner_radius=8, font=f(13),
                                    fg_color=CARD_HI, hover_color=LINE, command=self.toggle_overlay)
        self.ov_btn.pack(side="right", padx=(6, 0))
        self.tip.bind(self.ov_btn, "Small ping bar over the game")
        self.pill = ctk.CTkLabel(top, text="", font=f(12, "bold"), corner_radius=12, height=26, fg_color=CARD_HI)
        self.pill.pack(side="right")
        self.tip.bind(self.pill, self._status_tip)

        tabs = ctk.CTkFrame(self.root, fg_color=BG)
        tabs.pack(fill="x", padx=16, pady=(0, 4))
        self.tab = ctk.CTkSegmentedButton(tabs, values=["Live", "Servers"], command=self.set_tab, font=f(12),
                                          height=28, fg_color=CARD_HI, selected_color=SERIES,
                                          selected_hover_color=SERIES, unselected_color=CARD_HI,
                                          unselected_hover_color=LINE, text_color=FG)
        self.tab.set("Live")
        self.tab.pack(fill="x")
        self.live = ctk.CTkFrame(self.root, fg_color=BG)
        self.live.pack(fill="both", expand=True)
        self.servers_view = ctk.CTkScrollableFrame(self.root, fg_color=BG)
        self._servers_sig = None

        # hero: the one number that matters
        hero = ctk.CTkFrame(self.live, fg_color=CARD, corner_radius=18)
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
        route = ctk.CTkFrame(self.live, fg_color=CARD, corner_radius=18)
        route.pack(fill="x", padx=16, pady=6)
        self.route = tk.Canvas(route, height=84, bg=CARD, highlightthickness=0)
        self.route.pack(fill="x", padx=12, pady=8)
        self.route.bind("<Configure>", lambda e: self._draw_route())

        # chart
        chart = ctk.CTkFrame(self.live, fg_color=CARD, corner_radius=18)
        chart.pack(fill="both", expand=True, padx=16, pady=6)
        head = ctk.CTkFrame(chart, fg_color=CARD)
        head.pack(fill="x", padx=14, pady=(10, 0))
        self.metric_seg = ctk.CTkSegmentedButton(head, values=list(METRICS), command=self.set_metric, font=f(11),
                                                 height=24, fg_color=CARD_HI, selected_color=SERIES,
                                                 selected_hover_color=SERIES, unselected_color=CARD_HI,
                                                 unselected_hover_color=LINE, text_color=FG)
        self.metric_seg.set(self.metric)
        self.metric_seg.pack(side="left")
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

        foot = ctk.CTkFrame(self.live, fg_color=BG)
        foot.pack(fill="x", padx=18, pady=(2, 12))
        self.hint = ctk.CTkLabel(foot, text="", font=f(11), text_color=FAINT, anchor="w")
        self.hint.pack(side="left")
        b = ctk.CTkButton(foot, text="Log", width=46, height=24, corner_radius=8, font=f(11),
                          fg_color=CARD_HI, hover_color=LINE, text_color=MUTED, command=self.open_log)
        b.pack(side="right")
        self.tip.bind(b, "Open the folder with the per-second log (one CSV per day)")

    # ---------- servers tab ----------
    def set_tab(self, v):
        if v == "Servers":
            self.live.pack_forget()
            self.servers_view.pack(fill="both", expand=True, padx=8, pady=(0, 10))
            self._servers_sig = None
            self._render_servers()
        else:
            self.servers_view.pack_forget()
            self.live.pack(fill="both", expand=True)

    def _render_servers(self):
        hist = self.mon.history.summary() if self.mon else []
        cur = self.snap["game"]["server"][2] if self.snap and self.snap["game"]["server"] else None
        sig = (cur, [(h["ip"], h["minutes"], h["grade"]) for h in hist])
        if sig == self._servers_sig:
            return
        self._servers_sig = sig
        for w in self.servers_view.winfo_children():
            w.destroy()
        legend = ctk.CTkFrame(self.servers_view, fg_color=BG)
        legend.pack(fill="x", padx=8, pady=(2, 6))
        for lv, col in QUAL.items():
            d = ctk.CTkLabel(legend, text="●", font=f(11), text_color=col, width=10)
            d.pack(side="left", padx=(0, 3))
            l = ctk.CTkLabel(legend, text=lv, font=f(11), text_color=MUTED)
            l.pack(side="left", padx=(0, 9))
            for w in (d, l):
                self.tip.bind(w, self._grade_rules)
        if not hist:
            ctk.CTkLabel(self.servers_view, text="Servers appear here after a minute of play.", font=f(12),
                         text_color=FAINT).pack(pady=30)
            return
        hist.sort(key=lambda h: h["ip"] != cur)  # the server you are on now always sits on top
        for h in hist:
            self._server_card(h, h["ip"] == cur)

    def _server_card(self, h, now):
        card = ctk.CTkFrame(self.servers_view, fg_color=CARD, corner_radius=16, border_width=2 if now else 0,
                            border_color=SERIES)
        card.pack(fill="x", padx=8, pady=5)
        row = ctk.CTkFrame(card, fg_color=CARD)
        row.pack(fill="x", padx=14, pady=(10, 2))
        pl = h["place"] or {}
        city, country = pl.get("city"), pl.get("country")
        name = (city if not country or country == city else f"{city}, {country}") if city else (country or "Server")
        left = ctk.CTkFrame(row, fg_color=CARD)
        left.pack(side="left")
        top = ctk.CTkFrame(left, fg_color=CARD)
        top.pack(anchor="w")
        ctk.CTkLabel(top, text=name, font=f(14, "bold"), text_color=FG).pack(side="left")
        if now:
            ctk.CTkLabel(top, text=" Now ", font=f(10, "bold"), corner_radius=8, height=18, fg_color=SERIES,
                         text_color=FG).pack(side="left", padx=(8, 0))
        ctk.CTkLabel(left, text=h["ip"], font=f(11), text_color=MUTED).pack(anchor="w")
        g = h["grade"]
        badge = ctk.CTkLabel(row, text=f"  ● {g}  " if g else "  –  ", font=f(13, "bold"), corner_radius=12,
                             height=28, fg_color=CARD_HI, text_color=QUAL.get(g, FAINT))
        badge.pack(side="right")
        self.tip.bind(badge, lambda h=h: self._server_summary_tip(h))
        strip = tk.Canvas(card, height=26, bg=CARD, highlightthickness=0)
        strip.pack(fill="x", padx=14, pady=(6, 12))
        strip.bind("<Configure>", lambda e, c=strip, b=h["blocks"]: self._draw_strip(c, b))

    def _draw_strip(self, c, blocks):
        c.delete("all")
        w = max(c.winfo_width(), 100)
        n = 36
        cell = (w - 2 * (n - 1)) / n
        if not blocks:
            c.create_text(w / 2, 13, text="Not enough play yet", fill=FAINT, font=(FONT, 9))
            return
        start = n - len(blocks)
        for i in range(n):
            x = i * (cell + 2)
            if i < start:
                c.create_rectangle(x, 6, x + cell, 20, fill=CARD_HI, outline="")
                continue
            t, g, mins = blocks[i - start]
            tag = f"b{i}"
            c.create_rectangle(x, 2, x + cell, 24, fill=QUAL[g], outline="", tags=tag)
            when = time.strftime("%d %b %H:%M", time.localtime(t))
            self.tip.bind(c, f"{when} · {mins} min\n● {g}", tag=tag)

    def _grade_rules(self):
        from .history import RULES
        return "Quality per minute of play:\n" + "\n".join(f"● {lv}: {txt}" for lv, txt in RULES) + \
               "\n\nEach bar is 10 minutes, newest on the right."

    def _server_summary_tip(self, h):
        tot = max(1, h["minutes"])
        mins = h["minutes"]
        dur = f"{mins // 60} h {mins % 60} min" if mins >= 60 else f"{mins} min"
        lines = [f"Played here: {dur}",
                 f"Last seen: {time.strftime('%d %b %H:%M', time.localtime(h['last']))}" if h["last"] else "",
                 f"Usual ping: {h['ping']} ms" if h["ping"] else ""]
        lines += [f"● {lv}: {100 * k / tot:.0f}%" for lv, k in h["share"].items() if k]
        if h["place"].get("org"):
            lines.append(h["place"]["org"])
        return "\n".join(x for x in lines if x)

    # ---------- updates ----------
    def _tick(self):
        if self.mon:
            self.snap = self.mon.snapshot()
            self._render()
            if self.overlay is not None:
                self.overlay.show(self.snap)
            if self.tab.get() == "Servers" and int(time.time()) % 5 == 0:
                self._render_servers()
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
        self.chips["drops"].configure(text=pct(g["drops"]), text_color=MUTED)
        self.chips["jitter"].configure(text=ms(g["jitter"]), text_color=self._lvl(g["jitter"], 40, 80))
        self.chips["stalls"].configure(text="–" if g["stalls"] is None else str(g["stalls"]),
                                       text_color=self._lvl(g["stalls"], 1, 2))
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
        self._save(range=v)
        self._draw_chart()

    def set_metric(self, v):
        self.metric = v
        self._save(metric=v)
        self._draw_chart()

    def _save(self, **kw):
        self.prefs.update(kw)
        if self.on_prefs:
            self.on_prefs(self.prefs)

    def _drops_points(self, span):
        """Share of pings without answer over the last DROP_WINDOW seconds, one point per ping."""
        raw = self.mon.game_icmp.since(span + DROP_WINDOW)
        out, j, miss = [], 0, 0
        for i, (t, v) in enumerate(raw):
            miss += v is None
            while raw[j][0] <= t - DROP_WINDOW:
                miss -= raw[j][1] is None
                j += 1
            if i - j + 1 >= 10 and t >= time.time() - span:
                out.append((t, 100.0 * miss / (i - j + 1)))
        return out

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
        now = time.time()
        span = RANGES[self.range]
        drops = self.metric == "Drops"
        pts = (self._drops_points(span) if self.snap else []) if drops else self._points()
        vals = [p[1] for p in pts if p[1] is not None]
        if drops:
            top, step = 100, 25
        else:
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
            c.create_text(L - 6, yy, text=f"{v:.0f}{'%' if drops else ''}", fill=FAINT, font=(FONT, 8), anchor="e")
            v += step
        for frac, lab in ((1, f"-{span // 60}m"), (0.5, f"-{span // 120}m" if span >= 120 else "-30s"), (0, "now")):
            c.create_text(R - frac * (R - L), B + 12, text=lab, fill=FAINT, font=(FONT, 8),
                          anchor="w" if frac == 1 else "e" if frac == 0 else "center")
        if not pts:
            c.create_text((L + R) / 2, (T + B) / 2, text="Waiting for the game", fill=FAINT, font=(FONT, 10))
            return
        if drops:
            xy = [v for p in pts for v in (sx(p[0]), sy(p[1]))]
            if len(pts) > 1:
                c.create_polygon([sx(pts[0][0]), B] + xy + [sx(pts[-1][0]), B], fill="#142131", outline="")
                c.create_line(*xy, fill=SERIES, width=2, capstyle="round", joinstyle="round")
            if self.hover_x is not None:
                self._draw_hover(pts)
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
        if self.metric == "Drops":
            txt = f"{when}\n{pct(p[1])} drops (last {DROP_WINDOW} s)"
        else:
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
        return ("Test pings the server did not answer in the last minute.\n"
                "Game servers answer pings only when they have spare time,\n"
                "so a high value here is not lag by itself.\n"
                "Loss and Stalls measure the game's own packets.")

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
    def set_overlay(self, on):
        if on and self.overlay is None:
            self.overlay = Overlay(self.root, self.open_main, lambda: self.set_overlay(False),
                                   self._overlay_moved, pos=self.prefs.get("overlay_pos"))
            if self.snap:
                self.overlay.show(self.snap)
        elif not on and self.overlay is not None:
            self.overlay.destroy()
            self.overlay = None
        self.ov_btn.configure(fg_color=SERIES if on else CARD_HI)
        self._save(overlay=on)

    # The bar is docked to the game window: it keeps its corner when the game moves or resizes,
    # and hides while the game is minimized or another program is in front.
    DEFAULT_ANCHOR = {"corner": "tr", "dx": 16, "dy": 12}

    def _dock(self):
        self.root.after(250, self._dock)
        ov = self.overlay
        if ov is None or ov.dragging or not winpos.WIN:
            return
        pids = self.mon.tracker.pids if self.mon else []
        now = time.time()
        if not winpos.client_rect(self.game_hwnd) or now - self._hwnd_checked > 3:
            self._hwnd_checked = now
            self.game_hwnd = winpos.find_window(pids)
        rect = winpos.client_rect(self.game_hwnd)
        if not rect or winpos.minimized(self.game_hwnd):
            ov.set_visible(False)
            return
        fg = winpos.foreground_pid()
        ov.set_visible(fg in pids or fg == os.getpid())
        if ov.visible:
            size = (ov.winfo_width(), ov.winfo_height())
            x, y = winpos.place(rect, self.prefs.get("overlay_anchor") or self.DEFAULT_ANCHOR, size)
            if (x, y) != (ov.winfo_x(), ov.winfo_y()):
                ov.geometry(f"+{x}+{y}")

    def _overlay_moved(self, x, y):
        rect = winpos.client_rect(self.game_hwnd)
        if rect:
            ov = self.overlay
            self._save(overlay_anchor=winpos.anchor(rect, (x, y), (ov.winfo_width(), ov.winfo_height())))
        else:
            self._save(overlay_pos=[x, y])

    def toggle_overlay(self):
        self.set_overlay(self.overlay is None)

    def open_main(self):
        self.root.deiconify()
        self.root.lift()
        self.root.focus_force()

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
