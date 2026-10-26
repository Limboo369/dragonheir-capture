"""Small window: finds the game, watches it, lists every hero it has read."""
import logging
import os
import queue
import subprocess
import sys
import tkinter as tk

import customtkinter as ctk

from . import winlist
from .paths import app_dir

BG, CARD, CARD_HI, LINE = "#0e0f13", "#17181d", "#1f2128", "#2a2c34"
FG, MUTED, BLUE, GREEN, ORANGE, RED = "#f2f3f5", "#8b8d98", "#5b8cff", "#3ecf8e", "#f5a524", "#f25f5c"
FONT = "Segoe UI" if sys.platform == "win32" else "Helvetica"

log = logging.getLogger("dhreader")


def f(size, weight="normal"):
    return ctk.CTkFont(family=FONT, size=size, weight=weight)


def short(n):
    if not n:
        return "–"
    return f"{n/1000:.1f}K" if n >= 1000 else str(n)


class Chip(ctk.CTkLabel):
    def __init__(self, master, text, on):
        super().__init__(master, text=text, font=f(11), corner_radius=8, height=20, width=10,
                         fg_color=("#22352c" if on else CARD_HI), text_color=(GREEN if on else MUTED))


class App:
    def __init__(self, reader=None, store=None, watcher=None):
        ctk.set_appearance_mode("dark")
        self.root = ctk.CTk()
        self.root.title("Dragonheir Reader")
        self.root.geometry("420x640")
        self.root.minsize(380, 480)
        self.root.configure(fg_color=BG)
        self.q = queue.Queue()
        self.reader, self.store, self.watcher = reader, store, watcher
        self.hwnd = None
        self._rows_sig = None
        self._build()
        self.root.after(200, self._poll)
        self.root.after(500, self._find_game)

    # ---------- layout ----------
    def _build(self):
        top = ctk.CTkFrame(self.root, fg_color=BG)
        top.pack(fill="x", padx=16, pady=(14, 6))
        ctk.CTkLabel(top, text="Dragonheir Reader", font=f(20, "bold"), text_color=FG).pack(side="left")
        self.pill = ctk.CTkLabel(top, text="Looking for game", font=f(12), corner_radius=10, height=24,
                                 fg_color=CARD_HI, text_color=MUTED)
        self.pill.pack(side="right")

        card = ctk.CTkFrame(self.root, fg_color=CARD, corner_radius=16)
        card.pack(fill="x", padx=16, pady=6)
        row = ctk.CTkFrame(card, fg_color=CARD)
        row.pack(fill="x", padx=14, pady=(12, 4))
        self.count = ctk.CTkLabel(row, text="0", font=f(34, "bold"), text_color=FG)
        self.count.pack(side="left")
        ctk.CTkLabel(row, text=" heroes", font=f(14), text_color=MUTED).pack(side="left", pady=(12, 0))
        self.toast = ctk.CTkLabel(card, text="Open any hero in the game", font=f(12), text_color=MUTED, anchor="w")
        self.toast.pack(fill="x", padx=14, pady=(0, 12))

        btns = ctk.CTkFrame(self.root, fg_color=BG)
        btns.pack(fill="x", padx=16, pady=6)
        self.b_export = ctk.CTkButton(btns, text="Export for Companion", font=f(13, "bold"), height=36, corner_radius=12,
                                      fg_color=BLUE, command=self.export)
        self.b_export.pack(side="left", fill="x", expand=True)
        self.b_pause = ctk.CTkButton(btns, text="Pause", font=f(13), height=36, width=80, corner_radius=12,
                                     fg_color=CARD_HI, hover_color=LINE, command=self.toggle)
        self.b_pause.pack(side="left", padx=(8, 0))
        self.b_more = ctk.CTkButton(btns, text="⋯", font=f(16), height=36, width=40, corner_radius=12,
                                    fg_color=CARD_HI, hover_color=LINE, command=self.more)
        self.b_more.pack(side="left", padx=(8, 0))

        self.list = ctk.CTkScrollableFrame(self.root, fg_color=CARD, corner_radius=16)
        self.list.pack(fill="both", expand=True, padx=16, pady=(6, 16))
        self.empty = ctk.CTkLabel(self.list, text="Heroes appear here as you browse them.", font=f(12), text_color=MUTED)
        self.empty.pack(pady=30)

    # ---------- actions ----------
    def _find_game(self):
        if self.hwnd and winlist.window_alive(self.hwnd):
            return
        wins = [w for w in winlist.list_windows() if "dragonheir" in (w.title + w.process).lower()]
        if wins:
            self.hwnd = wins[0].hwnd
            if self.watcher:
                self.watcher.start(self.hwnd)
            self._pill("Watching", GREEN)
        else:
            self._pill("Game not found", ORANGE)
            self.root.after(3000, self._find_game)

    def _pill(self, text, colour):
        self.pill.configure(text=f"  {text}  ", text_color=colour)

    def toggle(self):
        if not self.watcher:
            return
        self.watcher.paused = not self.watcher.paused
        self.b_pause.configure(text="Resume" if self.watcher.paused else "Pause")
        self._pill("Paused" if self.watcher.paused else "Watching", MUTED if self.watcher.paused else GREEN)

    def export(self):
        if not self.store:
            return
        p = self.store.write_export()
        self.toast.configure(text=f"Saved {p.name}", text_color=GREEN)
        if sys.platform == "win32":
            subprocess.Popen(["explorer", "/select,", str(p)])

    def more(self):
        m = tk.Menu(self.root, tearoff=0, bg=CARD_HI, fg=FG, activebackground=BLUE, bd=0)
        m.add_command(label="Read screen now", command=lambda: self.watcher and self.watcher.read_now())
        m.add_command(label="Open data folder", command=self.open_folder)
        m.add_separator()
        m.add_command(label="Clear all heroes", command=self.reset)
        x, y = self.b_more.winfo_rootx(), self.b_more.winfo_rooty() + 40
        m.tk_popup(x, y)

    def open_folder(self):
        d = app_dir() / "data"
        d.mkdir(exist_ok=True)
        if sys.platform == "win32":
            os.startfile(d)

    def reset(self):
        from tkinter import messagebox

        if self.store and messagebox.askyesno("Clear", "Forget every hero read so far?"):
            self.store.reset()
            self.refresh()

    # ---------- events from the watcher ----------
    def on_event(self, ev):
        self.q.put(ev)

    def _poll(self):
        try:
            while True:
                self._handle(self.q.get_nowait())
        except queue.Empty:
            pass
        self.root.after(200, self._poll)

    def _handle(self, ev):
        k = ev.get("kind")
        if k == "read":
            name = ev.get("hero") or "Roster"
            what = sorted({c.split(".")[0] for c in ev.get("changed") or []})
            txt = f"✓ {name}" + (f" · {', '.join(what)}" if what else " · up to date")
            self.toast.configure(text=txt, text_color=GREEN if what else MUTED)
            self.refresh()
            if self.store:
                try:
                    self.store.write_export()
                except Exception:
                    pass
        elif k == "nowindow":
            self._pill("Game minimized", ORANGE)
            self.hwnd = None
            self.root.after(2000, self._find_game)
        elif k == "error":
            self.toast.configure(text=ev.get("text", "Error")[:80], text_color=RED)

    def refresh(self):
        heroes = self.store.heroes() if self.store else []
        sig = repr([(h.get("name"), h.get("updated")) for h in heroes])
        if sig == self._rows_sig:
            return
        self._rows_sig = sig
        for w in self.list.winfo_children():
            w.destroy()
        self.count.configure(text=str(len(heroes)))
        if not heroes:
            ctk.CTkLabel(self.list, text="Heroes appear here as you browse them.", font=f(12), text_color=MUTED).pack(pady=30)
            return
        for h in heroes:
            r = ctk.CTkFrame(self.list, fg_color=CARD)
            r.pack(fill="x", padx=4, pady=3)
            top = ctk.CTkFrame(r, fg_color=CARD)
            top.pack(fill="x")
            ctk.CTkLabel(top, text=h["name"], font=f(13, "bold"), text_color=FG).pack(side="left")
            meta = []
            if h.get("level"):
                meta.append(f"Lv {h['level']}")
            if h.get("stars"):
                meta.append("★" * int(h["stars"]))
            meta.append(short(h.get("power")))
            ctk.CTkLabel(top, text="  ".join(meta), font=f(12), text_color=MUTED).pack(side="right")
            chips = ctk.CTkFrame(r, fg_color=CARD)
            chips.pack(fill="x", pady=(2, 4))
            gear = [g for g in h.get("gear") or [] if g.get("set")]
            for text, on in (("Stats", bool(h.get("stats"))), ("Gear", bool(gear)),
                             ("Artifact", bool((h.get("artifact") or {}).get("name"))), ("Talents", bool(h.get("talents"))),
                             ("Skills", bool(h.get("skill_levels")))):
                Chip(chips, f" {text} ", on).pack(side="left", padx=(0, 4))

    def run(self):
        self.refresh()
        self.root.mainloop()

    def quit(self):
        if self.watcher:
            self.watcher.stop()
        self.root.destroy()
