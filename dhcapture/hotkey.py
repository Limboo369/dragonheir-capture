"""Global hotkey (default F8) that works while the game has focus. Windows only."""
import ctypes
import threading
from ctypes import wintypes

WM_HOTKEY, WM_QUIT, MOD_NOREPEAT = 0x0312, 0x0012, 0x4000


def vk_code(name):
    name = name.upper()
    if name.startswith("F") and name[1:].isdigit() and 1 <= int(name[1:]) <= 24:
        return 0x6F + int(name[1:])
    if len(name) == 1 and name.isalnum():
        return ord(name)
    return None


class Hotkey:
    def __init__(self, name, callback):
        self.name, self.callback = name, callback
        self._tid = None
        self.ok = False

    def start(self):
        vk = vk_code(self.name)
        if vk is None or not hasattr(ctypes, "windll"):
            return False
        ready = threading.Event()

        def loop():
            user32 = ctypes.windll.user32
            self._tid = ctypes.windll.kernel32.GetCurrentThreadId()
            self.ok = bool(user32.RegisterHotKey(None, 1, MOD_NOREPEAT, vk))
            ready.set()
            if not self.ok:
                return
            msg = wintypes.MSG()
            while user32.GetMessageW(ctypes.byref(msg), None, 0, 0) > 0:
                if msg.message == WM_HOTKEY:
                    self.callback()
            user32.UnregisterHotKey(None, 1)

        threading.Thread(target=loop, daemon=True).start()
        ready.wait(2)
        return self.ok

    def stop(self):
        if self._tid:
            ctypes.windll.user32.PostThreadMessageW(self._tid, WM_QUIT, 0, 0)
