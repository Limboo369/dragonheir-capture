#!/usr/bin/env python3
"""Dashboard web server for Dragonheir Watch (port 8790).
Serves out/ read-only, plus one action: POST /api/queue {"url": "<YouTube link>"} puts that
video at the top of the queue (priority.json; ytwatch.py gemini merges it into the state)
and starts a video round right away. Standard library only."""
import fcntl
import json
import re
import subprocess
import sys
import time
import urllib.parse
import urllib.request
from functools import partial
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path

ROOT = Path(__file__).resolve().parent
OUT = ROOT / "out"
PRIORITY = ROOT / "priority.json"
ID = re.compile(r"(?:v=|youtu\.be/|/shorts/|/live/|/embed/)([A-Za-z0-9_-]{11})|^([A-Za-z0-9_-]{11})$")


def video_id(url):
    m = ID.search(url.strip())
    return m and (m.group(1) or m.group(2))


def oembed(vid):
    """Title and channel name; works without an API key and is not hit by the transcript block."""
    q = urllib.parse.urlencode({"url": f"https://www.youtube.com/watch?v={vid}", "format": "json"})
    with urllib.request.urlopen(f"https://www.youtube.com/oembed?{q}", timeout=15) as r:
        d = json.load(r)
    return d.get("title", ""), d.get("author_name", "")


def add(vid, title, channel):
    with open(ROOT / ".priority.lock", "w") as lock:
        fcntl.flock(lock, fcntl.LOCK_EX)
        try:
            items = json.loads(PRIORITY.read_text(encoding="utf-8"))
        except (FileNotFoundError, ValueError):
            items = []
        items = [i for i in items if i["id"] != vid][-49:]
        items.append({"id": vid, "title": title, "channel": channel, "added": time.time()})
        PRIORITY.write_text(json.dumps(items, ensure_ascii=False, indent=1), encoding="utf-8")


class Handler(SimpleHTTPRequestHandler):
    def do_POST(self):
        if self.path != "/api/queue":
            return self.reply(404, {"error": "not found"})
        try:
            n = min(int(self.headers.get("Content-Length", 0)), 4096)
            url = json.loads(self.rfile.read(n) or b"{}").get("url", "")
        except ValueError:
            return self.reply(400, {"error": "bad request"})
        vid = video_id(url)
        if not vid:
            return self.reply(400, {"error": "That is not a YouTube video link"})
        try:
            title, channel = oembed(vid)
        except Exception:
            return self.reply(400, {"error": "YouTube does not know this video (private or deleted?)"})
        add(vid, title, channel)
        # the queue view, then a round now (if one is running, the video goes first in the next one)
        subprocess.run([str(ROOT / "venv/bin/python"), str(ROOT / "ytwatch.py"), "build"],
                       cwd=ROOT, env={"YTWATCH_OUT": str(OUT), "PATH": "/usr/bin:/bin"},
                       capture_output=True, timeout=120)
        subprocess.run(["systemctl", "start", "--no-block", "ytwatch-run.service"], capture_output=True)
        self.reply(200, {"id": vid, "title": title, "channel": channel})

    def reply(self, code, data):
        body = json.dumps(data).encode()
        self.send_response(code)
        self.send_header("Content-Type", "application/json")
        self.send_header("Content-Length", str(len(body)))
        self.end_headers()
        self.wfile.write(body)

    def log_message(self, *a):
        pass


if __name__ == "__main__":
    port = int(sys.argv[1]) if len(sys.argv) > 1 else 8790
    ThreadingHTTPServer(("", port), partial(Handler, directory=str(OUT))).serve_forever()
