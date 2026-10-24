"""Global hotkey (default F8, combos like CTRL+SHIFT+F8 work too). Windows only.

First tries RegisterHotKey. If another program already owns that key, falls back
to a low-level keyboard hook. Neither sees keys typed into a program that runs as
administrator unless this tool runs as administrator too (see game_is_elevated).
"""
import ctypes
import threading
from ctypes import wintypes

WM_HOTKEY, WM_QUIT, WM_KEYDOWN, WM_SYSKEYDOWN = 0x0312, 0x0012, 0x0100, 0x0104
MOD_ALT, MOD_CONTROL, MOD_SHIFT, MOD_NOREPEAT = 0x1, 0x2, 0x4, 0x4000
WH_KEYBOARD_LL = 13
VK_SHIFT, VK_CONTROL, VK_MENU = 0x10, 0x11, 0x12


def parse(combo):
    """'CTRL+SHIFT+F8' -> (mods, vk) or None."""
    mods, vk = 0, None
    for part in combo.upper().replace(" ", "").split("+"):
        if part in ("CTRL", "CONTROL"):
            mods |= MOD_CONTROL
        elif part == "SHIFT":
            mods |= MOD_SHIFT
        elif part == "ALT":
            mods |= MOD_ALT
        elif part.startswith("F") and part[1:].isdigit() and 1 <= int(part[1:]) <= 24:
            vk = 0x6F + int(part[1:])
        elif len(part) == 1 and part.isalnum():
            vk = ord(part)
        else:
            return None
    return (mods, vk) if vk else None


class KBDLLHOOKSTRUCT(ctypes.Structure):
    _fields_ = [("vkCode", wintypes.DWORD), ("scanCode", wintypes.DWORD), ("flags", wintypes.DWORD),
                ("time", wintypes.DWORD), ("dwExtraInfo", ctypes.c_size_t)]


class Hotkey:
    def __init__(self, combo, callback):
        self.combo, self.callback = combo, callback
        self._tid = None
        self.method = None  # "hotkey", "hook" or None when nothing worked
        self.errors = []    # Win32 error codes, for the log

    def start(self):
        spec = parse(self.combo)
        if spec is None or not hasattr(ctypes, "windll"):
            return False
        ready = threading.Event()
        threading.Thread(target=self._loop, args=(spec, ready), daemon=True).start()
        ready.wait(3)
        return self.method is not None

    def _loop(self, spec, ready):
        mods, vk = spec
        user32 = ctypes.WinDLL("user32", use_last_error=True)
        kernel32 = ctypes.WinDLL("kernel32", use_last_error=True)
        self._tid = kernel32.GetCurrentThreadId()
        hook = None
        if user32.RegisterHotKey(None, 1, mods | MOD_NOREPEAT, vk):
            self.method = "hotkey"
        else:
            # 1409 = another program (often an older copy of this tool) already owns the key.
            self.errors.append(("RegisterHotKey", ctypes.get_last_error()))
            def down(k):
                return bool(user32.GetAsyncKeyState(k) & 0x8000)

            @ctypes.WINFUNCTYPE(ctypes.c_long, ctypes.c_int, wintypes.WPARAM, wintypes.LPARAM)
            def proc(code, wparam, lparam):
                if code == 0 and wparam in (WM_KEYDOWN, WM_SYSKEYDOWN):
                    k = ctypes.cast(lparam, ctypes.POINTER(KBDLLHOOKSTRUCT)).contents
                    if k.vkCode == vk and down(VK_CONTROL) == bool(mods & MOD_CONTROL) \
                            and down(VK_SHIFT) == bool(mods & MOD_SHIFT) and down(VK_MENU) == bool(mods & MOD_ALT):
                        self.callback()
                return user32.CallNextHookEx(None, code, wparam, lparam)

            self._proc = proc  # keep a reference alive
            user32.CallNextHookEx.argtypes = [wintypes.HHOOK, ctypes.c_int, wintypes.WPARAM, wintypes.LPARAM]
            user32.SetWindowsHookExW.argtypes = [ctypes.c_int, ctypes.c_void_p, wintypes.HINSTANCE, wintypes.DWORD]
            user32.SetWindowsHookExW.restype = wintypes.HHOOK
            kernel32.GetModuleHandleW.restype = wintypes.HMODULE  # 64-bit handle, not int
            hook = user32.SetWindowsHookExW(WH_KEYBOARD_LL, ctypes.cast(proc, ctypes.c_void_p),
                                            kernel32.GetModuleHandleW(None), 0)
            if hook:
                self.method = "hook"
            else:
                self.errors.append(("SetWindowsHookEx", ctypes.get_last_error()))
        ready.set()
        if not self.method:
            return
        msg = wintypes.MSG()
        while user32.GetMessageW(ctypes.byref(msg), None, 0, 0) > 0:
            if msg.message == WM_HOTKEY:
                self.callback()
        if hook:
            user32.UnhookWindowsHookEx(hook)
        else:
            user32.UnregisterHotKey(None, 1)

    def stop(self):
        if self._tid:
            ctypes.windll.user32.PostThreadMessageW(self._tid, WM_QUIT, 0, 0)


def already_running():
    """True when another copy of the tool is open (it would hold the hotkey)."""
    if not hasattr(ctypes, "windll"):
        return False
    kernel32 = ctypes.WinDLL("kernel32", use_last_error=True)
    already_running._mutex = kernel32.CreateMutexW(None, False, "Local\\DragonheirCaptureSingleInstance")
    return ctypes.get_last_error() == 183  # ERROR_ALREADY_EXISTS


def i_am_admin():
    try:
        return bool(ctypes.windll.shell32.IsUserAnAdmin())
    except Exception:
        return False


def game_is_elevated(hwnd):
    """True when the game runs as administrator and this tool does not (keys won't reach us)."""
    if i_am_admin():
        return False
    try:
        import win32api
        import win32con
        import win32process
        import win32security

        _, pid = win32process.GetWindowThreadProcessId(hwnd)
        h = win32api.OpenProcess(0x1000, False, pid)  # PROCESS_QUERY_LIMITED_INFORMATION
        tok = win32security.OpenProcessToken(h, win32con.TOKEN_QUERY)
        return bool(win32security.GetTokenInformation(tok, win32security.TokenElevation))
    except Exception:
        return False
