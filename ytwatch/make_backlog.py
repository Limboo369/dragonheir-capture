import json, subprocess, sys
chs = json.load(open("channels.json"))
out = []
for c in chs:
    r = subprocess.run(["yt-dlp", "--flat-playlist", "--extractor-args", "youtubetab:approximate_date",
        "--playlist-end", "250", "--print", "%(id)s\t%(upload_date)s\t%(duration)s\t%(title)s",
        f"https://www.youtube.com/channel/{c['id']}/videos"], capture_output=True, text=True, timeout=300)
    n = 0
    for line in r.stdout.splitlines():
        vid, d, dur, title = line.split("\t", 3)
        if d == "NA" or d < "20260827":
            continue
        if "dragonheir" not in title.lower():
            continue
        dur = int(float(dur)) if dur not in ("NA", "None") else 0
        out.append({"id": vid, "channel": c["name"], "channel_id": c["id"], "title": title,
                    "published": f"{d[:4]}-{d[4:6]}-{d[6:]}T12:00:00+00:00", "duration_s": dur})
        n += 1
    print(c["name"], n, file=sys.stderr)
json.dump(out, open("backlog.json", "w"), ensure_ascii=False, indent=0)
print(len(out), sum(v["duration_s"] for v in out) / 3600, "hours", file=sys.stderr)
