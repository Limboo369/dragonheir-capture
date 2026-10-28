#!/usr/bin/env bash
# Copies the video notes to a small public GitHub repo (data only, no code), where the
# Dragonheir Companion's scheduled digest reads them. The server can't be reached from the
# cloud, so it pushes instead. It pushes with its own deploy key, which has write access
# to that data repo only: the code repo (and the Windows exe built from it) stay out of reach.
#   First run: makes the key and shows the public half on the dashboard's Status tab.
#   Someone adds it to the data repo as a deploy key with write access; from then on every
#   round pushes new notes. Result in out/data/publish.json.
cd "$(dirname "$0")"
DIR="$PWD"
OUT="${YTWATCH_OUT:-$DIR/out}"
REPO="${YTWATCH_DATA_REPO:-Limboo369/dragonheir-watch-data}"
KEY="$DIR/.deploy_key"
W="$DIR/.data-repo"
exec 8>.publish.lock
flock -n 8 || exit 0

result() {   # ok(true/false) message
  printf '{"time": "%s", "repo": "%s", "ok": %s, "message": "%s", "key": "%s"}\n' \
    "$(date -u +%FT%TZ)" "$REPO" "$1" "$(echo "$2" | tr -d '"\\' | tr '\n' ' ' | cut -c1-300)" \
    "$(cat "$KEY.pub" 2>/dev/null)" > "$OUT/data/publish.json"
  echo "$(date -u '+%F %H:%M') publish ok=$1 $2"
}

command -v git >/dev/null || apt-get install -y -qq git >/dev/null 2>&1
command -v git >/dev/null || { result false "git is not installed"; exit 0; }
command -v ssh-keygen >/dev/null || apt-get install -y -qq openssh-client >/dev/null 2>&1
[ -f "$KEY" ] || ssh-keygen -q -t ed25519 -N "" -C "dragonheir-watch@vps" -f "$KEY"
chmod 600 "$KEY"
# ssh over port 443 works even where outgoing port 22 is closed
export GIT_SSH_COMMAND="ssh -i $KEY -o IdentitiesOnly=yes -o StrictHostKeyChecking=accept-new -o BatchMode=yes -o ConnectTimeout=20"
REMOTE="${YTWATCH_DATA_REMOTE:-ssh://git@ssh.github.com:443/$REPO.git}"

if [ ! -d "$W/.git" ]; then
  rm -rf "$W"
  if ! out=$(git clone -q "$REMOTE" "$W" 2>&1); then
    rm -rf "$W"
    if echo "$out" | grep -qi "denied\|not found\|could not read"; then
      result false "waiting for the deploy key to be added to $REPO"
    else
      result false "clone failed: $out"
    fi
    exit 0
  fi
fi
cd "$W"
git config user.name "Dragonheir Watch"
git config user.email "dragonheir-watch@users.noreply.github.com"
branch=$(git symbolic-ref --short HEAD 2>/dev/null || echo main)
git pull -q --rebase "$REMOTE" "$branch" 2>/dev/null || true

# notes/<video id>.json are the source; index.json says when and how many
mkdir -p notes
cp -u "$DIR"/notes/*.json notes/ 2>/dev/null
"$DIR/venv/bin/python" - "$OUT/data/status.json" <<'PY'
import json, sys, glob, datetime
try:
    st = json.load(open(sys.argv[1], encoding="utf-8"))
except Exception:
    st = {}
notes = sorted(glob.glob("notes/*.json"))
latest = ""
for p in notes:
    try:
        latest = max(latest, json.load(open(p, encoding="utf-8")).get("published", ""))
    except Exception:
        pass
json.dump({"notes": len(notes), "latest_video": latest, "queue": st.get("counts", {}),
           "pushed": datetime.datetime.now(datetime.timezone.utc).strftime("%Y-%m-%dT%H:%MZ")},
          open("index.json.new", "w", encoding="utf-8"), indent=1)
PY
# server health for Claude in the cloud, which can't reach the server: log tail, last runs, budget
mkdir -p status
cp "$OUT"/data/status.json "$OUT"/data/last_run.json "$OUT"/data/last_update.json status/ 2>/dev/null
# push when notes changed, or every 30 minutes for the status (index.json alone changes every round)
git add notes
last=$(git log -1 --format=%ct 2>/dev/null || echo 0)
if git diff --cached --quiet && [ $(( $(date +%s) - last )) -lt 1800 ]; then
  rm -f index.json.new
  result true "up to date ($(ls notes | wc -l) notes)"
  exit 0
fi
mv index.json.new index.json
[ -f README.md ] || printf '# Dragonheir Watch data\n\nVideo notes written by Dragonheir Watch (Gemini watches Dragonheir creator videos). Pushed by the server; read by the Dragonheir Companion digest. Data only.\n' > README.md
git add -A
git commit -qm "notes: $(ls notes | wc -l) videos" || { result true "up to date ($(ls notes | wc -l) notes)"; exit 0; }
if out=$(git push -q "$REMOTE" "HEAD:$branch" 2>&1); then
  result true "pushed ($(ls notes | wc -l) notes)"
else
  result false "push failed: $out"
fi
