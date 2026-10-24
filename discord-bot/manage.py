"""Change the REGAL Discord server from the command line with the bot's token.

Usage:  venv/bin/python manage.py '<json>'      or      venv/bin/python manage.py layouts/<file>.json
The JSON is one action or a list of actions:
  {"do": "category", "name": "🏆 EVENTS", "access": "guild"}
  {"do": "channel", "name": "🏆・guild-war", "category": "⚔️ DRAGONHEIR", "type": "text",
   "topic": "...", "access": "guild"}            type: text | voice | forum (forum takes "tags": ["Boss", ...])
  {"do": "rename", "name": "old-name", "to": "new-name"}
  {"do": "post", "channel": "announcements", "title": "...", "text": "...", "pin": true}
  {"do": "delete", "name": "old-channel"}         asks for confirmation
access: public (everyone), readonly (everyone reads, officers write), guild (guild roles only),
        guildann (guild reads, officers write), commands (guild reads, only slash commands),
        officers (Leader and Officer only).
A channel without "access" copies its category's permissions.
"""
import json
import os
import sys
import time
import urllib.error
import urllib.request
from pathlib import Path

from dotenv import load_dotenv

HERE = Path(__file__).resolve().parent
load_dotenv(HERE / ".env")
API = os.environ.get("DISCORD_API", "https://discord.com/api/v10")
HEADERS = {"Authorization": f"Bot {os.environ['DISCORD_BOT_TOKEN']}",
           "User-Agent": "DiscordBot (regal-manage, 1.0)", "Content-Type": "application/json"}

VIEW, SEND = 1 << 10, 1 << 11
TYPES = {"text": 0, "voice": 2, "category": 4, "forum": 15}


def call(method, path, body=None):
    data = json.dumps(body).encode() if body is not None else None
    for _ in range(5):
        req = urllib.request.Request(API + path, data=data, method=method, headers=HEADERS)
        try:
            with urllib.request.urlopen(req) as r:
                time.sleep(0.3)
                raw = r.read()
                return json.loads(raw) if raw else None
        except urllib.error.HTTPError as e:
            if e.code == 429:
                time.sleep(float(json.loads(e.read() or b"{}").get("retry_after", 2)) + 0.5)
                continue
            raise SystemExit(f"Discord error {e.code} on {method} {path}: {e.read().decode()[:300]}")
    raise SystemExit("Discord kept rate-limiting, try again in a minute.")


def norm(name):
    return "".join(ch for ch in name.lower() if ch.isalnum())


class Server:
    def __init__(self):
        guilds = call("GET", "/users/@me/guilds")
        if not guilds:
            raise SystemExit("The bot is not in any server.")
        self.guild = guilds[0]
        self.gid = self.guild["id"]
        self.refresh()
        self.roles = {r["name"]: r["id"] for r in call("GET", f"/guilds/{self.gid}/roles")}

    def refresh(self):
        self.channels = call("GET", f"/guilds/{self.gid}/channels")

    def find(self, name, kind=None):
        """Match by exact name first, then ignoring emoji/punctuation ('announcements' finds '📢・announcements')."""
        pool = [c for c in self.channels if kind is None or c["type"] == TYPES[kind]]
        for c in pool:
            if c["name"] == name:
                return c
        hits = [c for c in pool if norm(name) and norm(name) in norm(c["name"])]
        return hits[0] if len(hits) == 1 else None

    def overwrites(self, access):
        def ow(role_id, allow=0, deny=0):
            return {"id": role_id, "type": 0, "allow": str(allow), "deny": str(deny)}
        role = lambda n: self.roles.get(n)
        officers = [r for r in (role("Leader"), role("Officer")) if r]
        members = [r for r in (role("Member"), role("Recruit")) if r]
        if access == "public":
            return []
        if access == "readonly":
            return [ow(self.gid, deny=SEND)] + [ow(r, allow=SEND) for r in officers]
        if access == "guild":
            return [ow(self.gid, deny=VIEW)] + [ow(r, allow=VIEW) for r in officers + members]
        if access == "guildann":
            return ([ow(self.gid, deny=VIEW | SEND)] + [ow(r, allow=VIEW, deny=SEND) for r in members]
                    + [ow(r, allow=VIEW | SEND) for r in officers])
        if access == "commands":   # guild sees it, nobody types; slash commands still work
            return ([ow(self.gid, deny=VIEW | SEND)] + [ow(r, allow=VIEW, deny=SEND) for r in members + officers])
        if access == "officers":
            return [ow(self.gid, deny=VIEW)] + [ow(r, allow=VIEW) for r in officers]
        raise SystemExit(f"Unknown access '{access}'")


def run(server, a):
    do = a.get("do")
    if do == "category":
        if server.find(a["name"], "category"):
            return print(f"= category {a['name']} already exists")
        call("POST", f"/guilds/{server.gid}/channels",
             {"name": a["name"], "type": 4, "permission_overwrites": server.overwrites(a.get("access", "guild"))})
        print(f"+ category {a['name']}")
    elif do == "channel":
        kind = a.get("type", "text")
        body = {"name": a["name"], "type": TYPES[kind]}
        if a.get("category"):
            cat = server.find(a["category"], "category")
            if not cat:
                raise SystemExit(f"No category called {a['category']}")
            body["parent_id"] = cat["id"]
            body["permission_overwrites"] = cat.get("permission_overwrites", [])
        if a.get("access"):
            body["permission_overwrites"] = server.overwrites(a["access"])
        if a.get("topic"):
            body["topic"] = a["topic"]
        if kind == "forum" and a.get("tags"):
            body["available_tags"] = [{"name": t} for t in a["tags"]]
        existing = [c for c in server.channels if c["name"] == a["name"] and c.get("parent_id") == body.get("parent_id")]
        if existing:
            return print(f"= {a['name']} already exists")
        call("POST", f"/guilds/{server.gid}/channels", body)
        print(f"+ {kind} {a['name']}")
    elif do == "rename":
        c = server.find(a["name"])
        if not c:
            raise SystemExit(f"No channel called {a['name']}")
        call("PATCH", f"/channels/{c['id']}", {"name": a["to"]})
        print(f"~ {c['name']} -> {a['to']}")
    elif do == "post":
        c = server.find(a["channel"])
        if not c:
            raise SystemExit(f"No channel called {a['channel']}")
        embed = {"title": a.get("title", ""), "description": a.get("text", ""), "color": 0xF1C40F}
        msg = call("POST", f"/channels/{c['id']}/messages", {"embeds": [embed]})
        if a.get("pin"):
            try:
                call("PUT", f"/channels/{c['id']}/messages/pins/{msg['id']}")
            except SystemExit:
                try:
                    call("PUT", f"/channels/{c['id']}/pins/{msg['id']}")   # older endpoint
                except SystemExit:
                    print("  (could not pin the message)")
        print(f"> posted in {c['name']}")
    elif do == "delete":
        c = server.find(a["name"])
        if not c:
            raise SystemExit(f"No channel called {a['name']}")
        if input(f"Delete {c['name']} and all its messages? Type yes: ").strip().lower() != "yes":
            return print("skipped")
        call("DELETE", f"/channels/{c['id']}")
        print(f"- {c['name']}")
    else:
        raise SystemExit(f"Unknown action {do!r}")
    server.refresh()


def main():
    if len(sys.argv) < 2:
        raise SystemExit(__doc__)
    arg = sys.argv[1]
    path = HERE / arg
    actions = json.loads(path.read_text(encoding="utf-8") if arg.endswith(".json") and path.exists() else arg)
    server = Server()
    print(f"Server: {server.guild['name']}")
    for a in actions if isinstance(actions, list) else [actions]:
        run(server, a)
    print("Done.")


if __name__ == "__main__":
    main()
