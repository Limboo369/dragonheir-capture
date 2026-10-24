"""The window: pick the game, start, press F8 on each hero, watch the sweep fill up."""
import ctypes
import math
import os
import queue
import subprocess
import sys
import tkinter as tk

import customtkinter as ctk

from . import export, winlist
from .config import APP_DIR, Settings
from .hotkey import Hotkey, game_is_elevated
from .worker import Worker

# Dark, quiet palette (Apple-like system colours).
BG = "#0b0b0d"
CARD = "#16161a"
CARD_HI = "#1e1e24"
LINE = "#26262d"
FG = "#f5f5f7"
MUTED = "#8e8e93"
BLUE = "#0a84ff"
GREEN = "#30d158"
ORANGE = "#ff9f0a"
RED = "#ff453a"

FONT = "Segoe UI Variable Display" if sys.platform == "win32" else "Helvetica"
TEXT = "Segoe UI Variable Text" if sys.platform == "win32" else "Helvetica"


def f(size, weight="normal", text=False):
    return ctk.CTkFont(family=TEXT if text else FONT, size=size, weight=weight)


def save_env(name, value):
    env = APP_DIR / ".env"
    lines = env.read_text(encoding="utf-8").splitlines() if env.exists() else []
    lines = [l for l in lines if not l.startswith(name + "=")] + [f"{name}={value}"]
    env.write_text("\n".join(lines) + "\n", encoding="utf-8")


def beep(ok=True):
    try:
        import winsound

        winsound.MessageBeep(winsound.MB_OK if ok else winsound.MB_ICONHAND)
    except Exception:
        pass


def short(n):
    if not n:
        return "–"
    return f"{n/1000:.1f}K" if n >= 1000 else f"{n:.0f}"


class Ring(tk.Canvas):
    """Progress ring with the count in the middle."""

    def __init__(self, master, size=86):
        super().__init__(master, width=size, height=size, bg=CARD, highlightthickness=0)
        self.size = size
        self.set(0, 0)

    def set(self, done, total):
        self.delete("all")
        s, w = self.size, 8
        self.create_oval(w, w, s - w, s - w, outline=LINE, width=w)
        if total:
            extent = -359.9 * done / total
            colour = GREEN if done == total else BLUE
            self.create_arc(w, w, s - w, s - w, start=90, extent=extent, style="arc", outline=colour, width=w)
        self.create_text(s / 2, s / 2 - 7, text=f"{done}", fill=FG, font=(FONT, 18, "bold"))
        self.create_text(s / 2, s / 2 + 13, text=f"of {total}", fill=MUTED, font=(TEXT, 9))


class Pill(ctk.CTkLabel):
    def __init__(self, master, text="", colour=MUTED):
        super().__init__(master, text=text, corner_radius=10, fg_color=CARD_HI, text_color=colour,
                         font=f(11, "bold", text=True), padx=10, height=22)

    def show(self, text, colour):
        self.configure(text=text, text_color=colour)


class Overlay(ctk.CTkToplevel):
    """Small always-on-top bar near the game: a capture button and the capture toast."""

    def __init__(self, master, on_click, hotkey):
        super().__init__(master)
        self.overrideredirect(True)
        self.attributes("-topmost", True)
        try:
            self.attributes("-alpha", 0.94)
        except tk.TclError:
            pass
        self.configure(fg_color=CARD)
        box = ctk.CTkFrame(self, fg_color=CARD, corner_radius=0)
        box.pack(padx=6, pady=6)
        self.btn = ctk.CTkButton(box, text="📸", width=38, height=32, corner_radius=16, fg_color=BLUE,
                                 hover_color="#3399ff", font=f(15), command=on_click)
        self.btn.pack(side="left")
        self.msg = ctk.CTkLabel(box, text=f"{hotkey}  read screen", text_color=MUTED, font=f(12, text=True))
        self.msg.pack(side="left", padx=(8, 6))
        for w in (box, self.msg):  # drag to move
            w.bind("<ButtonPress-1>", self._grab)
            w.bind("<B1-Motion>", self._drag)
        self._reset_job = None
        self.hotkey = hotkey

    def _grab(self, e):
        self._dx, self._dy = e.x_root - self.winfo_x(), e.y_root - self.winfo_y()

    def _drag(self, e):
        self.geometry(f"+{e.x_root - self._dx}+{e.y_root - self._dy}")

    def place_near(self, hwnd):
        try:
            import win32gui

            l, t, r, b = win32gui.GetWindowRect(hwnd)
            self.geometry(f"+{max(0, r - 260)}+{max(0, t + 40)}")
        except Exception:
            self.geometry("+40+40")

    def toast(self, kind, text):
        colour = {"captured": BLUE, "done": GREEN, "skipped": ORANGE, "failed": RED}.get(kind, MUTED)
        self.msg.configure(text=text, text_color=colour)
        self.btn.configure(fg_color=colour)
        if self._reset_job:
            self.after_cancel(self._reset_job)
        if kind != "captured":
            self._reset_job = self.after(3500, self._reset)

    def _reset(self):
        self.msg.configure(text=f"{self.hotkey}  read screen", text_color=MUTED)
        self.btn.configure(fg_color=BLUE)


class App:
    def __init__(self):
        ctk.set_appearance_mode("dark")
        self.s = Settings()
        self.root = ctk.CTk(fg_color=BG)
        self.root.title("Dragonheir Capture")
        self.root.geometry("500x800")
        self.root.minsize(460, 600)
        self.q = queue.Queue()   # status dicts from the worker
        self.ui = queue.Queue()  # hotkey presses (from the hotkey thread)
        self.worker = None
        self.windows = []
        self.overlay = None
        self._last_event = 0
        self._last_rows = None
        self._build()
        self.refresh_windows()
        self.hotkey = Hotkey(self.s.hotkey, lambda: self.ui.put("hotkey"))
        self.hotkey_ok = self.hotkey.start()
        self._show_hotkey_state()
        self.root.after(200, self._poll)
        self.root.protocol("WM_DELETE_WINDOW", self.quit)

    # --- layout ----------------------------------------------------------------
    def _card(self, parent, **pack):
        c = ctk.CTkFrame(parent, fg_color=CARD, corner_radius=18)
        c.pack(fill="x", padx=18, pady=(0, 12), **pack)
        return c

    def _build(self):
        head = ctk.CTkFrame(self.root, fg_color="transparent")
        head.pack(fill="x", padx=22, pady=(20, 14))
        titles = ctk.CTkFrame(head, fg_color="transparent")
        titles.pack(side="left")
        ctk.CTkLabel(titles, text="Dragonheir Capture", font=f(22, "bold"), text_color=FG).pack(anchor="w")
        model = self.s.model.replace("claude-", "").replace("-5-5", " 5.5").title()
        ctk.CTkLabel(titles, text=model if self.s.mode == "api" else "Collect only",
                     font=f(12, text=True), text_color=MUTED, height=16).pack(anchor="w")
        self.state = Pill(head, "Idle")
        self.state.pack(side="right")

        # Game window
        c = self._card(self.root)
        row = ctk.CTkFrame(c, fg_color="transparent")
        row.pack(fill="x", padx=14, pady=14)
        self.combo = ctk.CTkOptionMenu(row, values=["…"], height=34, corner_radius=10, fg_color=CARD_HI,
                                       button_color=CARD_HI, button_hover_color=LINE, text_color=FG,
                                       dropdown_fg_color=CARD_HI, font=f(13, text=True), dynamic_resizing=False)
        self.combo.pack(side="left", fill="x", expand=True)
        ctk.CTkButton(row, text="↻", width=34, height=34, corner_radius=10, fg_color=CARD_HI, hover_color=LINE,
                      font=f(16), command=self.refresh_windows).pack(side="left", padx=(8, 0))

        # Controls
        row = ctk.CTkFrame(self.root, fg_color="transparent")
        row.pack(fill="x", padx=18, pady=(0, 12))
        self.btn = ctk.CTkButton(row, text="Start", width=110, height=40, corner_radius=20, fg_color=BLUE,
                                 hover_color="#3399ff", font=f(14, "bold"), command=self.toggle)
        self.btn.pack(side="left")
        self.read_btn = ctk.CTkButton(row, text=f"📸  Read now · {self.s.hotkey}", height=40, corner_radius=20,
                                      fg_color=CARD, hover_color=CARD_HI, font=f(13, text=True), command=self.read_now)
        self.read_btn.pack(side="left", padx=8)
        self.auto = ctk.CTkSwitch(row, text="Auto", font=f(12, text=True), text_color=MUTED, progress_color=BLUE,
                                  command=lambda: setattr(self.s, "auto", bool(self.auto.get())))
        if self.s.auto:
            self.auto.select()
        self.auto.pack(side="right")

        # Warning banner (hidden until needed)
        self.banner = ctk.CTkFrame(self.root, fg_color="#2a1d0a", corner_radius=14)
        self.banner_lbl = ctk.CTkLabel(self.banner, text="", text_color=ORANGE, font=f(12, text=True),
                                       wraplength=300, justify="left")
        self.banner_lbl.pack(side="left", padx=12, pady=10)
        self.banner_btn = ctk.CTkButton(self.banner, text="Run as admin", width=110, height=30, corner_radius=15,
                                        fg_color=ORANGE, text_color="#1a1206", hover_color="#ffb340",
                                        font=f(12, "bold", text=True), command=self.restart_admin)

        # Tiles
        tiles = ctk.CTkFrame(self.root, fg_color="transparent")
        tiles.pack(fill="x", padx=18, pady=(0, 12))
        self.tiles = {}
        for i, key in enumerate(("Heroes", "Gear", "Artifacts", "Today")):
            t = ctk.CTkFrame(tiles, fg_color=CARD, corner_radius=16)
            t.grid(row=0, column=i, sticky="nsew", padx=(0 if i == 0 else 8, 0))
            tiles.grid_columnconfigure(i, weight=1)
            v = ctk.CTkLabel(t, text="0" if key != "Today" else "$0.00", font=f(20, "bold"), text_color=FG)
            v.pack(anchor="w", padx=12, pady=(10, 0))
            ctk.CTkLabel(t, text=key, font=f(11, text=True), text_color=MUTED).pack(anchor="w", padx=12, pady=(0, 10))
            self.tiles[key] = v

        foot = ctk.CTkFrame(self.root, fg_color="transparent")
        foot.pack(side="bottom", fill="x", padx=18, pady=(0, 16))
        for label, cmd in (("Export", self.export_now), ("Open folder", self.open_folder)):
            ctk.CTkButton(foot, text=label, height=30, corner_radius=15, fg_color=CARD, hover_color=CARD_HI,
                          font=f(12, text=True), command=cmd).pack(side="left", padx=(0, 8))
        self.spent_lbl = ctk.CTkLabel(foot, text="", font=f(11, text=True), text_color=MUTED)
        self.spent_lbl.pack(side="right")


        # Activity line
        self.activity = ctk.CTkLabel(self.root, text="Ready", font=f(12, text=True), text_color=MUTED, anchor="w")
        self.activity.pack(side="bottom", fill="x", padx=24, pady=(0, 6))

        # Sweep
        c = self._card(self.root, expand=True)
        c.pack_configure(fill="both")
        top = ctk.CTkFrame(c, fg_color="transparent")
        top.pack(fill="x", padx=14, pady=(14, 8))
        self.ring = Ring(top)
        self.ring.pack(side="left")
        txt = ctk.CTkFrame(top, fg_color="transparent")
        txt.pack(side="left", padx=14)
        ctk.CTkLabel(txt, text="Hero sweep", font=f(16, "bold"), text_color=FG).pack(anchor="w")
        self.sweep_hint = ctk.CTkLabel(txt, text="Open your hero list and press F8", font=f(12, text=True),
                                       text_color=MUTED, wraplength=280, justify="left")
        self.sweep_hint.pack(anchor="w", pady=(2, 0))
        self.list = ctk.CTkScrollableFrame(c, fg_color="transparent", corner_radius=0,
                                           scrollbar_button_color=LINE, scrollbar_button_hover_color=MUTED)
        self.list.pack(fill="both", expand=True, padx=6, pady=(0, 10))

    def _hero_row(self, h):
        row = ctk.CTkFrame(self.list, fg_color=CARD_HI if not h["detailed"] else "transparent", corner_radius=12)
        row.pack(fill="x", pady=2, padx=4)
        initial = (h["name"] or "?")[0].upper()
        ctk.CTkLabel(row, text=initial, width=32, height=32, corner_radius=16,
                     fg_color=BLUE if h["detailed"] else LINE, text_color=FG, font=f(13, "bold")).pack(side="left", padx=8, pady=6)
        mid = ctk.CTkFrame(row, fg_color="transparent")
        mid.pack(side="left", fill="x", expand=True)
        ctk.CTkLabel(mid, text=h["name"], font=f(13, "bold", text=True), text_color=FG, anchor="w").pack(anchor="w")
        sub = f"Lv {h['level']}" if h["level"] else "Lv –"
        sub += f"  ·  {short(h['power'])}"
        if h["artifact"]:
            sub += f"  ·  {h['artifact']}"
        ctk.CTkLabel(mid, text=sub, font=f(11, text=True), text_color=MUTED, anchor="w").pack(anchor="w")
        right = ctk.CTkFrame(row, fg_color="transparent")
        right.pack(side="right", padx=8)
        if h["detailed"]:
            gear = f"⚔ {h['gear']}" if h["gear"] else "⚔ –"
            ctk.CTkLabel(right, text=gear, font=f(11, text=True), text_color=MUTED).pack(side="left", padx=(0, 8))
            ctk.CTkLabel(right, text="✓", font=f(14, "bold"), text_color=GREEN).pack(side="left")
        else:
            ctk.CTkLabel(right, text="open", font=f(11, "bold", text=True), text_color=ORANGE).pack(side="left")

    # --- actions ---------------------------------------------------------------
    def _show_hotkey_state(self):
        if not self.hotkey_ok:
            self.read_btn.configure(text="📸  Read now")
            self._banner(f"{self.s.hotkey} could not be set up. Use the 📸 button over the game, "
                         "or set another key in .env (HOTKEY=CTRL+SHIFT+F8).", admin=False)

    def _banner(self, text, admin):
        self.banner_lbl.configure(text=text)
        if admin:
            self.banner_btn.pack(side="right", padx=10)
        else:
            self.banner_btn.pack_forget()
        self.banner.pack(fill="x", padx=18, pady=(0, 12), after=self.btn.master)

    def refresh_windows(self):
        self.windows = winlist.list_windows()
        labels = [w.label() for w in self.windows]
        self.combo.configure(values=labels or ["No windows found" if winlist.IS_WINDOWS else "Windows only"])
        self.combo.set(labels[0] if labels else self.combo.cget("values")[0])

    def _selected(self):
        labels = [w.label() for w in self.windows]
        cur = self.combo.get()
        return self.windows[labels.index(cur)] if cur in labels else None

    def _ensure_key(self):
        if self.s.mode != "api" or self.s.api_key:
            return True
        d = ctk.CTkInputDialog(title="Anthropic API key",
                               text="Paste your API key (sk-ant-…).\nIt stays in the .env file on this PC.")
        key = (d.get_input() or "").strip()
        if not key:
            return False
        save_env("ANTHROPIC_API_KEY", key)
        self.s.api_key = key
        return True

    def toggle(self):
        if self.worker and self.worker.hwnd and not self.worker.paused:
            self.worker.pause()
            self.btn.configure(text="Resume")
            self.state.show("Paused", ORANGE)
            return
        self._start()

    def _start(self):
        win = self._selected()
        if not win:
            self.activity.configure(text="Pick the game window first", text_color=ORANGE)
            return False
        if not self._ensure_key():
            return False
        if self.worker is None:
            self.worker = Worker(self.s, self.q.put)
        self.worker.start(win.hwnd)
        self.worker.resume()
        self.btn.configure(text="Pause")
        self.state.show("● Watching", GREEN)
        if self.overlay is None:
            self.overlay = Overlay(self.root, self.read_now, self.s.hotkey if self.hotkey_ok else "📸")
        self.overlay.place_near(win.hwnd)
        if game_is_elevated(win.hwnd):
            self._banner("The game runs as administrator, so Windows hides your key presses from this tool. "
                         "Restart it as admin to use the hotkey, or click 📸.", admin=True)
        return True

    def read_now(self):
        if not (self.worker and self.worker.hwnd) and not self._start():
            return
        beep()
        if self.overlay:
            self.overlay.toast("captured", "Capturing…")
        self.worker.read_now()

    def restart_admin(self):
        exe = sys.executable
        args = "" if getattr(sys, "frozen", False) else "-m dhcapture"
        if exe.lower().endswith("python.exe"):
            exe = exe[:-10] + "pythonw.exe"
        ctypes.windll.shell32.ShellExecuteW(None, "runas", exe, args, str(APP_DIR), 1)
        self.quit()

    def export_now(self):
        w = self.worker or Worker(self.s, lambda _: None)
        path = export.write(w.store, self.s.export_path)
        self.activity.configure(text=f"Saved {path.name}", text_color=MUTED)

    def open_folder(self):
        self.s.data_dir.mkdir(parents=True, exist_ok=True)
        if sys.platform == "win32":
            os.startfile(self.s.data_dir)
        else:
            subprocess.Popen(["xdg-open", str(self.s.data_dir)])

    # --- updates ---------------------------------------------------------------
    def _poll(self):
        while not self.ui.empty():
            if self.ui.get_nowait() == "hotkey":
                self.read_now()
        st = None
        while not self.q.empty():
            st = self.q.get_nowait()
        if st:
            self.apply(st)
        self.root.after(150, self._poll)

    def apply(self, st):
        c = st["counts"]
        self.tiles["Heroes"].configure(text=str(c["heroes"]))
        self.tiles["Gear"].configure(text=str(c["gear"]))
        self.tiles["Artifacts"].configure(text=str(c["artifacts"]))
        self.tiles["Today"].configure(text=f"${st['spent_today']:.2f}")
        self.spent_lbl.configure(text=f"{st['read']} read · {st['skipped']} skipped · ${st['spent_total']:.2f} total")

        sw = st["sweep"]
        self.ring.set(sw["done"], sw["total"])
        if not sw["total"]:
            self.sweep_hint.configure(text=f"Open your hero list and press {self.s.hotkey}")
        elif sw["todo"]:
            self.sweep_hint.configure(text=f"{len(sw['todo'])} left. Open each orange hero and press {self.s.hotkey}.")
        else:
            self.sweep_hint.configure(text="All heroes read. Auto keeps them up to date.")
        rows = [(h["name"], h["level"], h["power"], h["detailed"], h["gear"], h["artifact"]) for h in st["heroes"]]
        if rows != self._last_rows:
            self._last_rows = rows
            for w in self.list.winfo_children():
                w.destroy()
            for h in st["heroes"]:
                self._hero_row(h)

        msg = st["error"] or st["last"]
        self.activity.configure(text=msg or "Ready", text_color=RED if st["error"] else MUTED)

        seq, kind, text = st["event"]
        if seq != self._last_event:
            self._last_event = seq
            if self.overlay:
                self.overlay.toast(kind, text)
            if kind in ("done", "skipped"):
                beep()
            elif kind == "failed":
                beep(ok=False)

    def quit(self):
        if self.worker:
            self.worker.stop()
        self.hotkey.stop()
        self.root.destroy()

    def run(self):
        self.root.mainloop()


def main():
    App().run()
