"""Where the game window is on screen (only its position and state; nothing inside it is read)."""
import ctypes
import sys

WIN = sys.platform == "win32"

if WIN:
    from ctypes import wintypes

    _u = ctypes.WinDLL("user32")
    _EnumProc = ctypes.WINFUNCTYPE(wintypes.BOOL, wintypes.HWND, wintypes.LPARAM)
    _u.EnumWindows.argtypes = [_EnumProc, wintypes.LPARAM]
    _u.GetWindowThreadProcessId.argtypes = [wintypes.HWND, ctypes.POINTER(wintypes.DWORD)]
    _u.IsWindowVisible.argtypes = _u.IsIconic.argtypes = _u.IsWindow.argtypes = [wintypes.HWND]
    _u.GetClientRect.argtypes = [wintypes.HWND, ctypes.POINTER(wintypes.RECT)]
    _u.ClientToScreen.argtypes = [wintypes.HWND, ctypes.POINTER(wintypes.POINT)]
    _u.GetForegroundWindow.restype = wintypes.HWND
    _u.GetAncestor.argtypes = [wintypes.HWND, wintypes.UINT]
    _u.GetAncestor.restype = wintypes.HWND


def _pid(hwnd):
    pid = wintypes.DWORD()
    _u.GetWindowThreadProcessId(hwnd, ctypes.byref(pid))
    return pid.value


def client_rect(hwnd):
    """(x, y, w, h) of the window's inside area in screen pixels, or None."""
    if not WIN or not hwnd or not _u.IsWindow(hwnd):
        return None
    r = wintypes.RECT()
    if not _u.GetClientRect(hwnd, ctypes.byref(r)):
        return None
    p = wintypes.POINT(0, 0)
    _u.ClientToScreen(hwnd, ctypes.byref(p))
    return p.x, p.y, r.right - r.left, r.bottom - r.top


def find_window(pids):
    """The biggest visible top-level window owned by one of the game's processes."""
    if not WIN or not pids:
        return None
    pids, best = set(pids), [None, -1]  # a minimized window has a 0x0 inside but still counts

    def cb(hwnd, _):
        if _u.IsWindowVisible(hwnd) and _pid(hwnd) in pids:
            r = client_rect(hwnd)
            if r and r[2] * r[3] > best[1]:
                best[0], best[1] = hwnd, r[2] * r[3]
        return True

    _u.EnumWindows(_EnumProc(cb), 0)
    return best[0]


def minimized(hwnd):
    return bool(WIN and hwnd and _u.IsIconic(hwnd))


def foreground_pid():
    if not WIN:
        return None
    h = _u.GetForegroundWindow()
    return _pid(h) if h else None


def anchor(rect, box, size):
    """Nearest corner of `rect` to the box (x, y) of `size`, and the offset from that corner."""
    x, y, w, h = rect
    bw, bh = size
    cx = "l" if (box[0] + bw / 2) < x + w / 2 else "r"
    cy = "t" if (box[1] + bh / 2) < y + h / 2 else "b"
    dx = box[0] - x if cx == "l" else (x + w) - (box[0] + bw)
    dy = box[1] - y if cy == "t" else (y + h) - (box[1] + bh)
    return {"corner": cy + cx, "dx": int(dx), "dy": int(dy)}


def place(rect, a, size):
    """Screen position for a box of `size` anchored with `a` (from `anchor`) inside `rect`."""
    x, y, w, h = rect
    bw, bh = size
    dx = max(0, min(a["dx"], w - bw))
    dy = max(0, min(a["dy"], h - bh))
    px = x + dx if a["corner"][1] == "l" else x + w - bw - dx
    py = y + dy if a["corner"][0] == "t" else y + h - bh - dy
    return int(px), int(py)
