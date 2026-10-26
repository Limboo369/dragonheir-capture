"""Pack the game's item and hero icons into dhreader/data/icons.npz for template matching.

usage: python tools/build_icons.py <equip icon root (…/img/)> [hero card icon dir]
Icons are stored as 64x64 BGRA (alpha = where the picture is)."""
import json
import os
import sys

import cv2
import numpy as np

S = 64
game = json.load(open("dhreader/data/game.json", encoding="utf-8"))
root = sys.argv[1]


def load(path):
    im = cv2.imread(path, cv2.IMREAD_UNCHANGED)
    if im is None:
        return None
    if im.dtype != np.uint8:
        im = (im / 257).astype(np.uint8)
    if im.ndim == 2:
        im = cv2.cvtColor(im, cv2.COLOR_GRAY2BGRA)
    elif im.shape[2] == 3:
        im = np.dstack([im, np.full(im.shape[:2], 255, np.uint8)])
    return cv2.resize(im, (S, S), interpolation=cv2.INTER_AREA)


keys, kinds, imgs = [], [], []
seen = set()
for kind, items in (("gear", game["gear_items"]), ("artifact", game["artifact_items"]), ("rune", game["rune_items"])):
    for it in items:
        rel = it["icon"].split("/img/")[1]
        if (kind, rel) in seen:
            continue
        p = os.path.join(root, rel)
        im = load(p) if os.path.exists(p) else None
        if im is None:
            continue
        seen.add((kind, rel))
        keys.append(rel)
        kinds.append(kind)
        imgs.append(im)
if len(sys.argv) > 2:
    for h in game["heroes"]:
        for name in (f"{h['id']}.png", f"{h.get('head_icon')}.png"):
            p = os.path.join(sys.argv[2], name)
            if os.path.exists(p):
                im = cv2.imread(p, cv2.IMREAD_COLOR)
                im = cv2.resize(im, (48, 64), interpolation=cv2.INTER_AREA)
                im = np.dstack([cv2.resize(im, (S, S)), np.full((S, S), 255, np.uint8)])
                keys.append(str(h["id"]))
                kinds.append("hero")
                imgs.append(im)
                break
np.savez_compressed("dhreader/data/icons.npz", keys=np.array(keys), kinds=np.array(kinds), imgs=np.stack(imgs))
print({k: kinds.count(k) for k in set(kinds)}, os.path.getsize("dhreader/data/icons.npz") // 1024, "KB")

# Hero card pictures: the game's roster card is a crop of the hero's full "show" art,
# so we keep the show art (small) and search the card inside it.
if len(sys.argv) > 3:
    show_dir = sys.argv[3]
    ids, arts = [], []
    for h in game["heroes"]:
        p = os.path.join(show_dir, f"pic_hero_show_{h['id']}.png")
        im = cv2.imread(p, cv2.IMREAD_UNCHANGED) if os.path.exists(p) else None
        if im is None:
            continue
        if im.dtype != np.uint8:
            im = (im / 257).astype(np.uint8)
        if im.ndim == 3 and im.shape[2] == 4:
            a = im[..., 3:4].astype(np.float32) / 255
            im = (im[..., :3] * a + 20 * (1 - a)).astype(np.uint8)
        im = cv2.resize(im, (145, 218), interpolation=cv2.INTER_AREA)
        ids.append(str(h["id"]))
        arts.append(im)
    np.savez_compressed("dhreader/data/heroart.npz", ids=np.array(ids), arts=np.stack(arts))
    print(len(ids), "hero arts", os.path.getsize("dhreader/data/heroart.npz") // 1024, "KB")
