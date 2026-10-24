"""Build the compact simulator data file from the official Dragonheir tables.

Input: the JSON tables dragonheir.info loads from i.dmzgame.com (heroes, equip,
heroLevelBase), saved in /mnt/project-files/dragonheir/knowledge/raw-official/,
plus research/timing.json (skill charge times per hero from the CN wiki).
Output: simulator/data/sim-data.js (window.DHSIM_DATA = {...}) and sim-data.json.

Usage: python3 simulator/tools/build_data.py [raw_dir] [out_dir]
"""
import json
import os
import re
import sys
import time

RAW = sys.argv[1] if len(sys.argv) > 1 else '/mnt/project-files/dragonheir/knowledge/raw-official'
OUT = sys.argv[2] if len(sys.argv) > 2 else os.path.join(os.path.dirname(__file__), '..', 'data')

STAT_KEYS = {
    'max_health*base': 'hp', 'phy_dmg*base': 'atk', 'defense*base': 'def',
    'crit_chance*bpct': 'critRate', 'crit_bonus*bpct': 'critDmg',
    'accuracy*base': 'acc', 'resistance*base': 'res', 'mastery*base': 'ench',
    'cd_haste*base': 'haste', 'atk_speed*bpct': 'atkSpd',
}
ABT = {1013: 'critRate', 1014: 'critDmg', 1068: 'acc', 1069: 'res', 1074: 'haste',
       2013: 'atkPct', 2014: 'hpPct', 2015: 'defPct', 2038: 'ench'}
# Stat names used in artifact/gear primary_abt and set bonuses.
ABT_NAMES = {
    'Attack': 'atk', 'ATK': 'atk', 'HP': 'hp', 'Defense': 'def', 'DEF': 'def',
    'ATK%': 'atkPct', 'HP%': 'hpPct', 'DEF%': 'defPct',
    'Crit Rate': 'critRate', 'Crit Damage': 'critDmg', 'Accuracy': 'acc',
    'Resistance': 'res', 'Enlightenment': 'ench', 'Skill Haste': 'haste',
    'Attack Speed': 'atkSpd', 'Healing Effect': 'healPct', 'Healing Bonus': 'healPct',
}
COMBAT_TYPES = {1000: 'all', 1001: 'dungeon', 1002: 'arena', 1003: 'fey_trial'}
TIMING = os.path.join(os.path.dirname(__file__), '..', 'research', 'timing.json')
# Newer reports that replace the 2023 wiki timings (fully scrolled, seconds).
TIMING_OVERRIDES = {
    '20770': {'uf': 12, 'uc': 18, 'src': 'reddit comment 2025-08-08: Vinyara/Thia ~12/18 s fully scrolled'},
    '21050': {'uf': 12, 'uc': 18, 'src': 'reddit comment 2025-08-08: Vinyara/Thia ~12/18 s fully scrolled'},
}


def r4(x):
    return round(float(x), 4)


def stat_block(src):
    return {v: r4(src.get(k, 0) or 0) for k, v in STAT_KEYS.items()}


SCALE_RE = re.compile(r"\[\+?(-?[\d.]+)%\s*(Attack|Enlightenment|Max HP|Target's Max HP|Defense|Current HP|Target's Current HP|Lost HP)\]")
SCALE_KEY = {'Attack': 'atk', 'Enlightenment': 'ench', 'Max HP': 'hp', "Target's Max HP": 'thp',
             'Defense': 'def', 'Current HP': 'chp', "Target's Current HP": 'tchp', 'Lost HP': 'lhp'}
NUMWORDS = {'two': 2, 'three': 3, 'four': 4, 'five': 5, 'six': 6, 'twice': 2}


def parse_skill(text):
    """Rough structural read of a skill text, used only for the auto-kit fallback."""
    t = text or ''
    parts = []
    # Split into scaling groups followed by what they produce.
    for m in re.finditer(r"((?:\[[^\]]*\])+)\s*([A-Za-z' ]{0,30})", t):
        coef = {}
        for s in SCALE_RE.finditer(m.group(1)):
            k = SCALE_KEY[s.group(2)]
            coef[k] = round(coef.get(k, 0) + float(s.group(1)) / 100.0, 4)
        if not coef:
            continue
        after = m.group(2).strip()
        before = t[max(0, m.start() - 60):m.start()].lower()
        if re.match(r'(Cold|Poison|Fire|Lightning|Necrotic|Radiant|Physical)? ?Damage|Derivative|True', after):
            kind = 'dmg'
        elif 'shield' in after.lower() or 'shield' in before[-25:]:
            kind = 'shield'
        elif 'heal' in before or 'heal' in after.lower() or 'restores' in before:
            kind = 'heal'
        else:
            kind = 'dmg' if 'damage' in t[m.end():m.end() + 30].lower() else 'other'
        el = None
        em = re.match(r'(Cold|Poison|Fire|Lightning|Necrotic|Radiant)', after)
        if em:
            el = em.group(1)
        if after.startswith('Derivative'):
            el = 'Derivative'
        parts.append({'kind': kind, 'coef': coef, 'el': el})
    low = t.lower()
    hits = 1
    m = re.search(r'(\d+|two|three|four|five|six)\s+(?:times|attacks|arrows|swift attacks|strikes|slashes|shots)', low)
    if m:
        hits = int(NUMWORDS.get(m.group(1), m.group(1)))
    elif 'twice' in low:
        hits = 2
    m = re.search(r'every\s+([\d.]+)\s*s.{0,60}?(?:for|lasts for)\s+([\d.]+)\s*s', low) or \
        re.search(r'lasts for\s+([\d.]+)\s*s.{0,80}?every\s+([\d.]+)\s*s', low)
    ticks = None
    if m:
        a, b = float(m.group(1)), float(m.group(2))
        period, dur = (a, b) if 'every' in m.group(0)[:6] else (b, a)
        if period > 0 and dur >= period:
            ticks = int(round(dur / period))
    if 'all enemies' in low or 'each enemy' in low:
        tgt = 'all'
    elif 'within range' in low or 'surrounding' in low or 'area' in low or 'bounces' in low:
        tgt = 'area'
    else:
        tgt = 'single'
    return {'parts': parts, 'hits': hits, 'ticks': ticks, 'tgt': tgt}


def load_timing():
    """Charge times per hero id: fully scrolled (bf, bc, uf, uc) and unscrolled (*B)."""
    if not os.path.exists(TIMING):
        return {}
    raw = json.load(open(TIMING, encoding='utf-8')).get('heroes', {})
    out = {}
    for hid, t in raw.items():
        rec = {}
        for k, src in (('bf', 'battleInitial'), ('bc', 'battleCd'), ('uf', 'ultInitial'), ('uc', 'ultCd'),
                       ('bfB', 'battleInitialBase'), ('bcB', 'battleCdBase'), ('ufB', 'ultInitialBase'), ('ucB', 'ultCdBase')):
            if t.get(src):
                rec[k] = r4(t[src])
        if rec:
            rec['src'] = (t.get('sourceDate') or '')[:10]
            if t.get('gamekeeAtkInterval') and t.get('currentAtkInterval') and abs(t['gamekeeAtkInterval'] - t['currentAtkInterval']) > 0.05:
                rec['stale'] = 1  # kit reworked since the wiki snapshot
            out[hid] = rec
    for hid, o in TIMING_OVERRIDES.items():
        out.setdefault(hid, {}).update(o)
    return out


def main():
    timing = load_timing()
    heroes_raw = json.load(open(os.path.join(RAW, 'heroes-2025.json'), encoding='utf-8'))
    equip_raw = json.load(open(os.path.join(RAW, 'equip-2025.json'), encoding='utf-8'))
    lvl = json.load(open(os.path.join(RAW, 'heroLevelBase.json'), encoding='utf-8'))

    level_mult = [0.0] * 101
    for x in lvl['levelUpBase']:
        level_mult[int(x['id'])] = r4(x['defense*base'])
    star_up = []
    for s in lvl['starUpBase']:
        star_up.append({'maxLv': s['max_lv'], **{v: r4(s.get(k, 0) or 0) for k, v in STAT_KEYS.items()}})

    heroes = {}
    for h in heroes_raw:
        insp = []
        for i in range(1, 6):
            it = h.get('inspiration%d' % i) or {}
            ids = h.get('inspiration%d_abt' % i) or []
            vals = h.get('inspiration%d_abt_val' % i) or []
            stats = {ABT.get(a, str(a)): r4(v) for a, v in zip(ids, vals)}
            insp.append({'t': it.get('spell_tips', ''), 'stats': stats} if stats else {'t': it.get('spell_tips', '')})
        sk = h.get('skill', {})
        skills = {}
        for slot, key in (('slot2', 'p'), ('slot3', 'b'), ('slot4', 'u')):
            if slot in sk:
                skills[key] = {'n': sk[slot]['skillname'], 't': sk[slot]['skilldesc'],
                               'auto': parse_skill(sk[slot]['skilldesc'])}
        heroes[str(h['id'])] = {
            'id': h['id'], 'n': h['heroname'], 'r': h['rarity'], 'el': h.get('element'),
            'sc': h.get('orientation'), 'cl': h.get('hero_career'), 'race': h.get('hero_race'),
            'melee': h.get('atk_type') == 'Melee', 'af': r4(h['attack_frequency']),
            'season': h.get('season'), 'b': stat_block(h), 'g': stat_block(h['lv_up_base']),
            'insp': insp, 'sk': skills, 'tm': timing.get(str(h['id'])),
            'cap': {'t': h.get('captain_slot'), 'mode': COMBAT_TYPES.get(h.get('captain_enable_combat_types'))}
                   if h.get('captain_slot') else None,
        }

    artifacts = {}
    sets = {}
    for e in equip_raw:
        if e.get('type') == 1:
            stats = []
            for p in e.get('primary_abt', []):
                g = p['abt_group']
                stats.append([ABT_NAMES.get(g['abt_name'], g['abt_name']),
                              [r4(g.get('level%d' % i, 0)) for i in range(1, 21)]])
            spells = [s.get('spell_tips', '') for s in e.get('spell_id', [])]
            sname = (e.get('spell_id') or [{}])[0].get('show_name')
            artifacts[str(e['id'])] = {'id': e['id'], 'n': e['show_name'], 'r': e['rarity'],
                                       'season': e.get('season'), 'stats': stats,
                                       'spell': sname, 'tiers': spells}
        elif e.get('type') == 2:
            base = re.split(r'\s+-\s+|:\s', e['show_name'])[0]
            stats2, spell = {}, None
            for s in e.get('suite', []):
                if 'abt_name' in s:
                    for n, v in zip(s['abt_name'], s['abt_value']):
                        stats2[ABT_NAMES.get(n, n)] = r4(v)
                elif 'spell_id' in s:
                    spell = s['spell_id']
            key = spell['show_name'] if spell else base
            rec = sets.setdefault(key, {'n': key, 'pieceSet': base, 'r': e['rarity'],
                                        'season': e.get('season'), 'bonus2': stats2,
                                        'spell': spell.get('spell_tips', '') if spell else '',
                                        'slots': []})
            slot = e['show_name'].split(' - ')[-1].split(': ')[-1].rstrip('+')
            if slot not in rec['slots']:
                rec['slots'].append(slot)
            if e.get('season') and (rec['season'] is None or e['season'] < rec['season']):
                rec['season'] = e['season']

    data = {
        'version': time.strftime('%Y-%m-%d'),
        'source': 'Official tables loaded by dragonheir.info from i.dmzgame.com (heroes-2025, equip-2025, heroLevelBase); skill charge times from the CN GameKee wiki (2023-09) and later reports',
        'levelMult': level_mult, 'starUp': star_up,
        'heroes': heroes, 'artifacts': artifacts, 'sets': sets,
    }
    os.makedirs(OUT, exist_ok=True)
    js = json.dumps(data, ensure_ascii=False, separators=(',', ':'))
    with open(os.path.join(OUT, 'sim-data.json'), 'w', encoding='utf-8') as f:
        f.write(js)
    with open(os.path.join(OUT, 'sim-data.js'), 'w', encoding='utf-8') as f:
        f.write('/* Generated by tools/build_data.py. Do not edit. */\n')
        f.write('(function(r){var D=' + js + ';if(typeof module!=="undefined"&&module.exports)module.exports=D;else r.DHSIM_DATA=D;})(typeof window!=="undefined"?window:globalThis);\n')
    print('heroes', len(heroes), 'artifacts', len(artifacts), 'sets', len(sets), 'bytes', len(js))


if __name__ == '__main__':
    main()
