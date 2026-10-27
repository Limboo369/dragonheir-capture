"""List visible top-level windows and capture one of them (Windows only).

Capture uses PrintWindow with PW_RENDERFULLCONTENT, which works even when the
game is behind other windows and never steals focus. Some DirectX games give a
black image that way; then we fall back to grabbing the window's screen area
with mss (that needs the game to be visible on screen).
"""
import ctypes
import sys
from dataclasses import dataclass

from PIL import Image

IS_WINDOWS = sys.platform == "win32"

if IS_WINDOWS:
    import mss
    import win32con
    import win32gui
    import win32process
    import win32ui

    try:  # real pixel sizes on scaled (125%/150%) displays
        ctypes.windll.shcore.SetProcessDpiAwareness(2)
    except Exception:
        try:
            ctypes.windll.user32.SetProcessDPIAware()
        except Exception:
            pass

PW_RENDERFULLCONTENT = 0x00000002


@dataclass
class WindowInfo:
    hwnd: int
    title: str
    process: str

    def label(self) -> str:
        return f"{self.title}  [{self.process}]"


def _process_name(hwnd) -> str:
    try:
        import psutil

        _, pid = win32process.GetWindowThreadProcessId(hwnd)
        return psutil.Process(pid).name()
    except Exception:
        return "?"


def list_windows():
    if not IS_WINDOWS:
        return []
    out = []

    def cb(hwnd, _):
        if not win32gui.IsWindowVisible(hwnd):
            return
        title = win32gui.GetWindowText(hwnd).strip()
        if not title:
            return
        l, t, r, b = win32gui.GetWindowRect(hwnd)
        if r - l < 200 or b - t < 150:
            return
        out.append(WindowInfo(hwnd, title, _process_name(hwnd)))

    win32gui.EnumWindows(cb, None)
    # Likely game windows first.
    out.sort(key=lambda w: (0 if "dragonheir" in (w.title + w.process).lower() else 1, w.title.lower()))
    return out


def _pid(hwnd):
    try:
        return win32process.GetWindowThreadProcessId(hwnd)[1]
    except Exception:
        return None


def find_game():
    """The game's window. Never our own window, whose title also says "Dragonheir"."""
    import os

    me = os.getpid()
    best = None
    for w in list_windows():
        if _pid(w.hwnd) == me or "reader" in w.title.lower() or "dragonheirreader" in w.process.lower():
            continue
        t, pr = w.title.lower(), w.process.lower()
        if "dragonheir" in pr:
            return w
        if "dragonheir" in t and best is None and not any(b in pr for b in ("chrome", "msedge", "firefox", "opera", "brave", "discord", "explorer")):
            best = w
    return best


def window_alive(hwnd) -> bool:
    return IS_WINDOWS and bool(win32gui.IsWindow(hwnd))


def is_minimized(hwnd) -> bool:
    return bool(win32gui.IsIconic(hwnd))


def _printwindow(hwnd):
    l, t, r, b = win32gui.GetClientRect(hwnd)
    w, h = r - l, b - t
    if w <= 0 or h <= 0:
        return None
    hwnd_dc = win32gui.GetWindowDC(hwnd)
    mfc_dc = win32ui.CreateDCFromHandle(hwnd_dc)
    save_dc = mfc_dc.CreateCompatibleDC()
    bmp = win32ui.CreateBitmap()
    bmp.CreateCompatibleBitmap(mfc_dc, w, h)
    save_dc.SelectObject(bmp)
    try:
        ok = ctypes.windll.user32.PrintWindow(hwnd, save_dc.GetSafeHdc(), PW_RENDERFULLCONTENT | 1)
        info = bmp.GetInfo()
        bits = bmp.GetBitmapBits(True)
        img = Image.frombuffer("RGB", (info["bmWidth"], info["bmHeight"]), bits, "raw", "BGRX", 0, 1)
    finally:
        win32gui.DeleteObject(bmp.GetHandle())
        save_dc.DeleteDC()
        mfc_dc.DeleteDC()
        win32gui.ReleaseDC(hwnd, hwnd_dc)
    return img if ok else None


def _mss_grab(hwnd):
    l, t, r, b = win32gui.GetClientRect(hwnd)
    x, y = win32gui.ClientToScreen(hwnd, (l, t))
    with mss.mss() as sct:
        shot = sct.grab({"left": x, "top": y, "width": r - l, "height": b - t})
        return Image.frombytes("RGB", shot.size, shot.rgb)


def _is_blank(img) -> bool:
    small = img.convert("L").resize((32, 32))
    lo, hi = small.getextrema()
    return hi - lo < 8


def capture(hwnd):
    """Return a PIL image of the window's client area, or None if not possible right now."""
    if not window_alive(hwnd) or is_minimized(hwnd):
        return None
    img = None
    try:
        img = _printwindow(hwnd)
    except Exception:
        img = None
    if img is None or _is_blank(img):
        try:
            img = _mss_grab(hwnd)
        except Exception:
            return None
        if _is_blank(img):
            return None
    return img
