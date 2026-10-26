# Dragonheir Reader

A small Windows helper that sits next to Dragonheir: Silent Gods and reads your heroes off the screen while you browse them. It turns what it sees into a `dragonheir-account` v2 JSON file for the Dragonheir Companion app.

Everything runs locally. There is no API key, no account and no network traffic. The tool only looks at the game window the way you do. It never reads the game's memory or network traffic, never touches the game files, and never clicks in the game.

## Use it

1. Download `DragonheirReader.exe` from [the latest release](https://github.com/Limboo369/dragonheir-capture/releases/tag/latest) and run it. Windows asks for admin rights, because the game runs elevated.
2. Open the game and browse your heroes: the hero screen, the Equip tab, the Talent tab, the Overview grid, item tooltips. The tool notices each new screen by itself. There is no hotkey.
3. Click **Export for Companion** and import `dragonheir-account.json` in the Companion (Import / Export).

Data lives in the `data` folder next to the exe: `account.json` (everything read so far), `dragonheir-account.json` (the export, rewritten after every read) and `reader.log`.

## What it reads

| Screen | Read |
| --- | --- |
| Hero info popup | name, level, power, rarity, all stats with base and bonus, skill levels, artifact, 4 gear pieces with set and +level |
| Manage → Equip | all stats (any game language), artifact, gear, runes, selected hero card |
| Manage → Talent | activated tiers and chosen branch |
| Overview / Resonance | name, level, power, and every hero card in the grid (power and stars) |
| Gear and artifact tooltips | item name, set, slot, level, main stat and substats; artifact tier and owner |

Text is read with [RapidOCR](https://github.com/RapidAI/RapidOCR) (PaddleOCR models on onnxruntime). Gear, sets, artifacts and runes are recognised by matching their icons against the official item icons. Hero cards are recognised by matching the card portrait against each hero's official art, and the tool remembers a card once it has seen it with the hero's name.

## Develop

```
pip install -r requirements.txt
python -m tests.test_screens      # reads the real screenshots in tests/fixtures
python DragonheirReader.py
```

`tools/build_gamedata.py` and `tools/build_icons.py` rebuild `dhreader/data` from the Companion database and the official icon files. GitHub Actions builds the exe on Windows, runs the tests and the exe self-test, and publishes the release on every push to `main`.
