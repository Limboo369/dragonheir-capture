"""Network probes. Only pings and connection metadata: nothing here reads or sends game data.

Windows uses iphlpapi through ctypes (IcmpSendEcho, GetBestRoute, GetPerTcpConnectionEStats).
Other platforms get small fallbacks so the logic can be developed and tested anywhere.
"""
import ctypes
import socket
import struct
import subprocess
import sys
import time

WIN = sys.platform == "win32"


def _addr(ip):
    """IPv4 string -> DWORD as Windows stores it (network byte order in memory)."""
    return struct.unpack("<I", socket.inet_aton(ip))[0]


def _ip(dword):
    return socket.inet_ntoa(struct.pack("<I", dword))


if WIN:
    from ctypes import wintypes

    _iph = ctypes.WinDLL("iphlpapi")

    class IP_OPTION_INFORMATION(ctypes.Structure):
        _fields_ = [("Ttl", ctypes.c_ubyte), ("Tos", ctypes.c_ubyte), ("Flags", ctypes.c_ubyte),
                    ("OptionsSize", ctypes.c_ubyte), ("OptionsData", ctypes.c_void_p)]

    class ICMP_ECHO_REPLY(ctypes.Structure):
        _fields_ = [("Address", wintypes.ULONG), ("Status", wintypes.ULONG), ("RoundTripTime", wintypes.ULONG),
                    ("DataSize", wintypes.USHORT), ("Reserved", wintypes.USHORT), ("Data", ctypes.c_void_p),
                    ("Options", IP_OPTION_INFORMATION)]

    class MIB_IPFORWARDROW(ctypes.Structure):
        _fields_ = [(n, wintypes.DWORD) for n in (
            "dwForwardDest", "dwForwardMask", "dwForwardPolicy", "dwForwardNextHop", "dwForwardIfIndex",
            "dwForwardType", "dwForwardProto", "dwForwardAge", "dwForwardNextHopAS", "dwForwardMetric1",
            "dwForwardMetric2", "dwForwardMetric3", "dwForwardMetric4", "dwForwardMetric5")]

    class MIB_TCPROW(ctypes.Structure):
        _fields_ = [("dwState", wintypes.DWORD), ("dwLocalAddr", wintypes.DWORD), ("dwLocalPort", wintypes.DWORD),
                    ("dwRemoteAddr", wintypes.DWORD), ("dwRemotePort", wintypes.DWORD)]

    class TCP_ESTATS_RW(ctypes.Structure):
        _fields_ = [("EnableCollection", ctypes.c_ubyte)]

    _PATH_FIELDS = (
        "FastRetran", "Timeouts", "SubsequentTimeouts", "CurTimeoutCount", "AbruptTimeouts", "PktsRetrans",
        "BytesRetrans", "DupAcksIn", "SacksRcvd", "SackBlocksRcvd", "CongSignals", "PreCongSumCwnd",
        "PreCongSumRtt", "PostCongSumRtt", "PostCongCountRtt", "EcnSignals", "EceRcvd", "SendStall",
        "QuenchRcvd", "RetranThresh", "SndDupAckEpisodes", "SumBytesReordered", "NonRecovDa",
        "NonRecovDaEpisodes", "AckAfterFr", "DsackDups", "SampleRtt", "SmoothedRtt", "RttVar", "MaxRtt",
        "MinRtt", "SumRtt", "CountRtt", "CurRto", "MaxRto", "MinRto", "CurMss", "MaxMss", "MinMss",
        "SpuriousRtoDetections")

    class TCP_ESTATS_PATH_ROD(ctypes.Structure):
        _fields_ = [(n, wintypes.ULONG) for n in _PATH_FIELDS]

    class TCP_ESTATS_DATA_ROD(ctypes.Structure):
        _fields_ = [("DataBytesOut", ctypes.c_uint64), ("DataSegsOut", ctypes.c_uint64),
                    ("DataBytesIn", ctypes.c_uint64), ("DataSegsIn", ctypes.c_uint64),
                    ("SegsOut", ctypes.c_uint64), ("SegsIn", ctypes.c_uint64),
                    ("SoftErrors", wintypes.ULONG), ("SoftErrorReason", wintypes.ULONG),
                    ("SndUna", wintypes.ULONG), ("SndNxt", wintypes.ULONG), ("SndMax", wintypes.ULONG),
                    ("ThruBytesAcked", ctypes.c_uint64), ("RcvNxt", wintypes.ULONG),
                    ("ThruBytesReceived", ctypes.c_uint64)]

    _iph.IcmpCreateFile.restype = wintypes.HANDLE
    _iph.IcmpCloseHandle.argtypes = [wintypes.HANDLE]
    _iph.IcmpSendEcho.argtypes = [wintypes.HANDLE, wintypes.DWORD, ctypes.c_void_p, wintypes.WORD,
                                  ctypes.c_void_p, ctypes.c_void_p, wintypes.DWORD, wintypes.DWORD]
    _iph.IcmpSendEcho.restype = wintypes.DWORD
    _iph.GetBestRoute.argtypes = [wintypes.DWORD, wintypes.DWORD, ctypes.POINTER(MIB_IPFORWARDROW)]
    _iph.SetPerTcpConnectionEStats.argtypes = [ctypes.POINTER(MIB_TCPROW), ctypes.c_int, ctypes.c_void_p,
                                               wintypes.ULONG, wintypes.ULONG, wintypes.ULONG]
    _iph.GetPerTcpConnectionEStats.argtypes = [ctypes.POINTER(MIB_TCPROW), ctypes.c_int,
                                               ctypes.c_void_p, wintypes.ULONG, wintypes.ULONG,
                                               ctypes.c_void_p, wintypes.ULONG, wintypes.ULONG,
                                               ctypes.c_void_p, wintypes.ULONG, wintypes.ULONG]
    EST_DATA, EST_PATH = 1, 3


def icmp_ping(ip, timeout_ms=1000):
    """One echo request. Returns round trip in ms, or None when no reply came back."""
    if WIN:
        h = _iph.IcmpCreateFile()
        try:
            data = b"dhnetmon" * 4
            size = ctypes.sizeof(ICMP_ECHO_REPLY) + len(data) + 8
            buf = ctypes.create_string_buffer(size)
            n = _iph.IcmpSendEcho(h, _addr(ip), data, len(data), None, buf, size, timeout_ms)
            if not n:
                return None
            r = ICMP_ECHO_REPLY.from_buffer(buf)
            return float(r.RoundTripTime) if r.Status == 0 else None
        finally:
            _iph.IcmpCloseHandle(h)
    try:
        out = subprocess.run(["ping", "-c", "1", "-W", str(max(1, timeout_ms // 1000)), ip],
                             capture_output=True, text=True, timeout=timeout_ms / 1000 + 2).stdout
        if "time=" in out:
            return float(out.split("time=")[1].split()[0])
    except Exception:
        pass
    return None


def tcp_ping(ip, port, timeout=2.0):
    """Time to open (and immediately close) a TCP connection: the handshake round trip, in ms."""
    t = time.perf_counter()
    try:
        with socket.create_connection((ip, port), timeout=timeout):
            return (time.perf_counter() - t) * 1000
    except OSError:
        return None


def gateway():
    """The router this PC sends internet traffic through, or None."""
    if WIN:
        row = MIB_IPFORWARDROW()
        if _iph.GetBestRoute(_addr("1.1.1.1"), 0, ctypes.byref(row)) == 0 and row.dwForwardNextHop:
            return _ip(row.dwForwardNextHop)
        return None
    try:
        for line in open("/proc/net/route"):
            p = line.split()
            if len(p) > 2 and p[1] == "00000000" and p[2] != "00000000":
                return _ip(int(p[2], 16))
    except OSError:
        pass
    return None


class LinkStats:
    """Windows' own counters for one existing TCP connection (round trip, retransmits, timeouts).

    Reads statistics the OS keeps anyway; the connection and its data are left alone.
    Turning collection on needs admin rights, so `ok` stays False without them.
    """

    def __init__(self, local, remote):
        self.ok = False
        self.error = None
        if not WIN:
            self.error = "windows only"
            return
        r = MIB_TCPROW()
        r.dwState = 5  # ESTABLISHED
        r.dwLocalAddr, r.dwRemoteAddr = _addr(local[0]), _addr(remote[0])
        r.dwLocalPort = socket.htons(local[1])
        r.dwRemotePort = socket.htons(remote[1])
        self.row = r
        on = TCP_ESTATS_RW(1)
        for kind in (EST_PATH, EST_DATA):
            err = _iph.SetPerTcpConnectionEStats(ctypes.byref(r), kind, ctypes.byref(on), 0, ctypes.sizeof(on), 0)
            if err:
                self.error = f"enable failed ({err})"
                return
        self.ok = True

    def read(self):
        if not self.ok:
            return None
        path, data = TCP_ESTATS_PATH_ROD(), TCP_ESTATS_DATA_ROD()
        e1 = _iph.GetPerTcpConnectionEStats(ctypes.byref(self.row), EST_PATH, None, 0, 0, None, 0, 0,
                                            ctypes.byref(path), 0, ctypes.sizeof(path))
        e2 = _iph.GetPerTcpConnectionEStats(ctypes.byref(self.row), EST_DATA, None, 0, 0, None, 0, 0,
                                            ctypes.byref(data), 0, ctypes.sizeof(data))
        if e1 or e2:
            self.error = f"read failed ({e1 or e2})"
            return None
        return {"rtt": path.SmoothedRtt, "sample_rtt": path.SampleRtt, "rttvar": path.RttVar,
                "count_rtt": path.CountRtt, "retrans": path.PktsRetrans, "timeouts": path.Timeouts,
                "segs_out": data.DataSegsOut, "segs_in": data.DataSegsIn}


def geolocate(ip):
    """City, country and network owner of an IP, from ipinfo.io (no account needed)."""
    import json
    import urllib.request
    try:
        with urllib.request.urlopen(f"https://ipinfo.io/{ip}/json", timeout=6) as r:
            d = json.load(r)
        org = d.get("org") or ""
        org = org.split(" ", 1)[1] if org.startswith("AS") and " " in org else org
        return {"city": d.get("city"), "country": d.get("country"), "org": org}
    except Exception:
        return None
