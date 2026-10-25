#!/bin/sh
# Copy the simulator to the shared project folder used by the app threads.
set -e
cd "$(dirname "$0")/.."
DEST=/mnt/project-files/dragonheir/sim
mkdir -p $DEST/dist/ $DEST/data/ $DEST/tools/ $DEST/tests/ $DEST/kits/ $DEST/demo/ $DEST/results/
cp sim.js kits.js items.js enemies.js bosses-s1.js survival.js node-loader.js API.md $DEST/
mkdir -p $DEST/ui/ && cp ui/*.js $DEST/ui/
[ -f MODEL.md ] && cp MODEL.md $DEST/
[ -f CALIBRATION.md ] && cp CALIBRATION.md $DEST/
cp dist/dhsim.js $DEST/dist/
cp data/sim-data.js data/sim-data.json $DEST/data/
cp tools/*.py tools/*.js tools/*.sh $DEST/tools/ 2>/dev/null || true
cp tests/*.js $DEST/tests/
[ -d kits ] && cp kits/*.js $DEST/kits/ 2>/dev/null || true
cp demo/battle-lab.html demo/battle-sim.html demo/battle-ui.js demo/dhsim.js $DEST/demo/
[ -d results ] && cp results/* $DEST/results/ 2>/dev/null || true
echo synced to $DEST
