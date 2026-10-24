"""Bundle DHSim into one browser script: dist/dhsim.js.

Order: slim data, engine, setData bootstrap, kits (kits.js, then kits/*.js), items, enemies.
Skill description texts are dropped from the bundle (the parsed auto-kit
fields stay), which keeps it small enough to inline in an artifact.

Usage: python3 simulator/tools/bundle.py
"""
import json
import os

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.dirname(HERE)


def main():
    data = json.load(open(os.path.join(ROOT, 'data', 'sim-data.json'), encoding='utf-8'))
    for h in data['heroes'].values():
        for sk in h['sk'].values():
            sk.pop('t', None)
    js_data = json.dumps(data, ensure_ascii=False, separators=(',', ':'))
    parts = ['/* DHSim bundle: official Dragonheir data + battle simulator. Built by tools/bundle.py. */',
             '(function(r){r.DHSIM_DATA=' + js_data + ';})(typeof window!=="undefined"?window:globalThis);']
    for f in ('sim.js',):
        parts.append(open(os.path.join(ROOT, f), encoding='utf-8').read())
    parts.append('(function(r){r.DHSim.setData(r.DHSIM_DATA);})(typeof window!=="undefined"?window:globalThis);')
    extra = sorted('kits/' + f for f in os.listdir(os.path.join(ROOT, 'kits')) if f.endswith('.js'))
    for f in ['kits.js'] + extra + ['items.js', 'enemies.js']:
        parts.append(open(os.path.join(ROOT, f), encoding='utf-8').read())
    out = os.path.join(ROOT, 'dist', 'dhsim.js')
    os.makedirs(os.path.dirname(out), exist_ok=True)
    with open(out, 'w', encoding='utf-8') as fh:
        fh.write('\n'.join(parts))
    print(out, os.path.getsize(out), 'bytes')


if __name__ == '__main__':
    main()
