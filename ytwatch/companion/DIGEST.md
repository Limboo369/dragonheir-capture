# Companion digest (run by a scheduled Claude session)

Turns new Dragonheir Watch video notes into the "AI knowledge" the Dragonheir Companion shows:
tiers per mode with reasons, S1 relevance, teams and tips, each tied to the creator videos.
Write everything in English. Never post anything to the user; this job is silent.

Companion artifact: https://claude.ai/artifact/CkLtgyiZ5XXfrmdvSngRpv (db collection `yt`).
Notes: public repo Limboo369/dragonheir-watch-data, folder `notes/` (one Gemini note per video).

## Steps

1. Get the notes: `git clone --depth 1 https://github.com/limboo369/dragonheir-watch-data /tmp/wd`
   (add the repo with add_repo first if the clone is refused). Code: this repo, `ytwatch/companion/`.
2. Save the current db docs: ArtifactData `list` on collection `yt` with `out_dir` `/tmp/prev`.
   Note each doc's `version` from the result (needed for writes). An empty collection is fine (first run).
3. `python3 ytwatch/companion/prep.py /tmp/wd/notes /tmp/work --prev /tmp/prev`
   If it says `0 new`, stop here: nothing changed.
4. Read `/tmp/work/evidence.json` (heroes touched by new videos, newest verdicts first),
   `/tmp/work/new_videos.json` and, for context, `/tmp/prev/yt/heroes-*.json` (your earlier verdicts).
   Write `/tmp/work/claude.json`:
   ```json
   {"summary": "2-4 sentences: what the creators' newest videos say about the meta",
    "heroes": {"<exact name from evidence.json>": {
       "t": {"overall": "A", "vortex": "S"},
       "why": "1-3 sentences with the reasoning and who said it",
       "s1": "yes | partly | no",
       "s1why": "short, only when not yes",
       "conf": "high | medium | low"}}}
   ```
   Rules:
   - Every hero in evidence.json that has `verdicts` must be in `heroes` (team-only heroes are optional).
   - `t` keys: overall, vortex (Temporal Vortex), goblin (Goblin Lair), grave, ab (Ancient Battlefield), arena.
     Tiers: S+ S A+ A B+ B C+ C D+ D. Give a mode only when a creator's verdict or team supports it;
     `overall` is the hero's general standing across what creators said. Fewer modes beat guessed ones.
   - Weigh agreement between channels and recency. One video from one channel = conf low; 2+ channels
     agreeing = medium; 3+ channels or repeated over weeks = high. When channels disagree, say so in `why`
     and pick the tier the newer and more numerous verdicts support.
   - Merge with your earlier verdict for that hero (in /tmp/prev): keep what still holds, update with the new.
   - `s1`: the player is on a NEW server in Season 1. Hero strength carries over; season modes, sets, bosses
     and banners do not. "no" when the praise rests on S9-only content (season boss, new S9 hero, S9 sets),
     "partly" when mixed. Notes' `scope` S9/S1/mixed helps.
   - Only use what the evidence says. No outside game knowledge, no invented numbers.
5. `python3 ytwatch/companion/build_db.py /tmp/work --prev /tmp/prev`. If it prints NOT WRITTEN, fix
   claude.json and run it again.
6. Write the docs in `/tmp/work/db/` to collection `yt` with ONE ArtifactData `batch`: `set` each file
   (doc id = file name without .json, `file_path` = the file), with `if_version` for docs that already
   exist; also `delete` the doc ids listed in `/tmp/work/delete.json`. On a version conflict, re-list and redo.
7. Check: ArtifactData `get` yt/meta shows the new `built` time. Done.
