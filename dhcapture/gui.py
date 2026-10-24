"""Small window: pick the game window, start/pause, see what was collected."""
import os
import queue
import subprocess
import sys
import tkinter as tk
from tkinter import messagebox, simpledialog, ttk

from . import export, winlist
from .hotkey import Hotkey
from .config import APP_DIR, Settings
from .worker import Worker

BG, PANEL, FG, MUTED, ACCENT, WARN = "#10141c", "#1a2030", "#e8ecf4", "#8a94a8", "#7cc4ff", "#ffb86b"


def ensure_api_key(root, s):
    if s.mode != "api" or s.api_key:
        return True
    key = simpledialog.askstring(
        "Anthropic API key",
        "Paste your Anthropic API key (starts with sk-ant-).\nIt is saved only in the .env file on this PC.",
        parent=root, show="*")
    if not key:
        return False
    env = APP_DIR / ".env"
    lines = env.read_text(encoding="utf-8").splitlines() if env.exists() else []
    lines = [l for l in lines if not l.startswith("ANTHROPIC_API_KEY=")] + [f"ANTHROPIC_API_KEY={key.strip()}"]
    env.write_text("\n".join(lines) + "\n", encoding="utf-8")
    s.api_key = key.strip()
    return True


class App:
    def __init__(self):
        self.s = Settings()
        self.root = tk.Tk()
        self.root.title("Dragonheir Capture")
        self.root.configure(bg=BG)
        self.root.minsize(460, 0)
        self._style()
        self.q = queue.Queue()
        self.worker = None
        self.windows = []
        self._build()
        self.refresh_windows()
        self.hotkey = Hotkey(self.s.hotkey, lambda: self.worker and self.worker.read_now())
        if not self.hotkey.start():
            self.read_btn.configure(text="Read now")
        self.root.after(300, self._poll)
        self.root.protocol("WM_DELETE_WINDOW", self.quit)

    def _style(self):
        st = ttk.Style(self.root)
        st.theme_use("clam")
        st.configure(".", background=BG, foreground=FG, fieldbackground=PANEL, font=("Segoe UI", 10))
        st.configure("Card.TFrame", background=PANEL)
        st.configure("Card.TLabel", background=PANEL, foreground=FG)
        st.configure("Muted.TLabel", background=PANEL, foreground=MUTED, font=("Segoe UI", 9))
        st.configure("Big.TLabel", background=PANEL, foreground=ACCENT, font=("Segoe UI Semibold", 16))
        st.configure("Title.TLabel", background=BG, foreground=FG, font=("Segoe UI Semibold", 13))
        st.configure("TButton", background=PANEL, foreground=FG, borderwidth=0, padding=(12, 6))
        st.map("TButton", background=[("active", "#26304a")])
        st.configure("Accent.TButton", background=ACCENT, foreground="#0b1220")
        st.map("Accent.TButton", background=[("active", "#a5d8ff")])
        st.configure("TCombobox", fieldbackground=PANEL, background=PANEL, foreground=FG, arrowcolor=FG)

    def _card(self, parent):
        f = ttk.Frame(parent, style="Card.TFrame", padding=12)
        f.pack(fill="x", pady=(0, 10))
        return f

    def _build(self):
        outer = ttk.Frame(self.root, padding=14)
        outer.pack(fill="both", expand=True)
        mode = "Claude API · " + self.s.model.replace("claude-", "") if self.s.mode == "api" else "Collect only (no API)"
        ttk.Label(outer, text="Dragonheir Capture", style="Title.TLabel").pack(anchor="w")
        ttk.Label(outer, text=mode, foreground=MUTED).pack(anchor="w", pady=(0, 10))

        c = self._card(outer)
        ttk.Label(c, text="Game window", style="Muted.TLabel").pack(anchor="w")
        row = ttk.Frame(c, style="Card.TFrame")
        row.pack(fill="x", pady=(4, 0))
        self.combo = ttk.Combobox(row, state="readonly", width=48)
        self.combo.pack(side="left", fill="x", expand=True)
        ttk.Button(row, text="⟳", width=3, command=self.refresh_windows).pack(side="left", padx=(6, 0))

        row2 = ttk.Frame(outer)
        row2.pack(fill="x", pady=(0, 10))
        self.btn = ttk.Button(row2, text="▶  Start", style="Accent.TButton", command=self.toggle)
        self.btn.pack(side="left")
        self.read_btn = ttk.Button(row2, text=f"Read now ({self.s.hotkey})", command=self.read_now)
        self.read_btn.pack(side="left", padx=(6, 0))
        ttk.Button(row2, text="Export", command=self.export_now).pack(side="left", padx=6)
        ttk.Button(row2, text="📁", width=3, command=self.open_folder).pack(side="left")
        self.state_lbl = ttk.Label(row2, text="● Idle", foreground=MUTED)
        self.state_lbl.pack(side="right")

        self.auto_var = tk.BooleanVar(value=self.s.auto)
        ttk.Checkbutton(outer, text=f"Auto (every {self.s.interval_s:g} s)", variable=self.auto_var,
                        command=lambda: setattr(self.s, "auto", self.auto_var.get())).pack(anchor="w", pady=(0, 10))

        c = self._card(outer)
        grid = ttk.Frame(c, style="Card.TFrame")
        grid.pack(fill="x")
        self.vals = {}
        for i, key in enumerate(("Heroes", "Gear", "Artifacts", "Resources")):
            cell = ttk.Frame(grid, style="Card.TFrame")
            cell.grid(row=0, column=i, sticky="w", padx=(0, 22))
            self.vals[key] = ttk.Label(cell, text="0", style="Big.TLabel")
            self.vals[key].pack(anchor="w")
            ttk.Label(cell, text=key, style="Muted.TLabel").pack(anchor="w")

        c = self._card(outer)
        self.line1 = ttk.Label(c, text="Screens: 0 captured · 0 read", style="Card.TLabel")
        self.line1.pack(anchor="w")
        self.line2 = ttk.Label(c, text="Spent: $0.00 today · $0.00 total", style="Muted.TLabel")
        self.line2.pack(anchor="w", pady=(2, 0))
        self.line3 = ttk.Label(c, text="", style="Muted.TLabel", wraplength=420)
        self.line3.pack(anchor="w", pady=(2, 0))

    # --- actions ---------------------------------------------------------------
    def refresh_windows(self):
        self.windows = winlist.list_windows()
        self.combo["values"] = [w.label() for w in self.windows]
        if self.windows:
            self.combo.current(0)
        elif not winlist.IS_WINDOWS:
            self.combo.set("Windows only")

    def toggle(self):
        if self.worker and not self.worker.paused and self.worker.hwnd:
            self.worker.pause()
            self.btn.configure(text="▶  Resume")
            self.state_lbl.configure(text="❚❚ Paused", foreground=WARN)
            return
        i = self.combo.current()
        if i < 0:
            messagebox.showinfo("Dragonheir Capture", "Pick the game window first.")
            return
        if not ensure_api_key(self.root, self.s):
            return
        if self.worker is None:
            self.worker = Worker(self.s, self.q.put)
        self.worker.start(self.windows[i].hwnd)
        self.worker.resume()
        self.btn.configure(text="❚❚  Pause")
        self.state_lbl.configure(text="● Watching", foreground=ACCENT)

    def read_now(self):
        if not (self.worker and self.worker.hwnd):
            self.toggle()
        if self.worker and self.worker.hwnd:
            self.worker.read_now()

    def export_now(self):
        w = self.worker or Worker(self.s, lambda _: None)
        path = export.write(w.store, self.s.export_path)
        self.line3.configure(text=f"Saved {path.name}")

    def open_folder(self):
        self.s.data_dir.mkdir(parents=True, exist_ok=True)
        if sys.platform == "win32":
            os.startfile(self.s.data_dir)
        else:
            subprocess.Popen(["xdg-open", str(self.s.data_dir)])

    def _poll(self):
        st = None
        while not self.q.empty():
            st = self.q.get_nowait()
        if st:
            for k, v in st["counts"].items():
                self.vals[k.capitalize()].configure(text=str(v))
            self.line1.configure(text=f"Screens: {st['captured']} captured · {st['read']} read · {st['skipped']} skipped")
            self.line2.configure(text=f"Spent: ${st['spent_today']:.2f} today · ${st['spent_total']:.2f} total"
                                      f"  (limit ${self.s.daily_budget_usd:.2f}/day)")
            msg = st["error"] or st["last"]
            self.line3.configure(text=msg, foreground=WARN if st["error"] else MUTED)
        self.root.after(500, self._poll)

    def quit(self):
        if self.worker:
            self.worker.stop()
        self.hotkey.stop()
        self.root.destroy()

    def run(self):
        self.root.mainloop()


def main():
    App().run()
