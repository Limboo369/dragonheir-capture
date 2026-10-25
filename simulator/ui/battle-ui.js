/*
 * DHBattleUI: the survival battle simulator screen (team, per-hero stats,
 * boss, results, animated replay). Self-contained: it injects its own CSS
 * (classes prefixed bs-) and uses the Companion "Library" colour tokens
 * (--label, --pane, --card, --accent...) so it sits inside the main app
 * unchanged, and in a standalone page that defines the same tokens.
 *
 *   DHBattleUI.mount(el, host)
 *   host = { load(key) -> value | Promise, save(key, value), pics: {heroId: dataUri},
 *            owned: [heroId] (optional), defaultTeam: [names], onNav(page) (optional) }
 */
(function (root) {
  'use strict';
  var S = root.DHSim;
  var KEY = 'sim/loadout';
  var VERSION_UI = '1';

  // ------------------------------------------------------------------ css --
  var CSS = [
    '.bs{--bs-r:16px;--bs-dmg:var(--bad);--bs-heal:var(--good);--bs-shield:#4FA8F0;--bs-ult:#8E6BF2;--bs-ctl:#B05CE0;display:grid;gap:16px;max-width:900px;margin:0 auto;color:var(--label);font-family:var(--font);min-width:0}',
    '.bs *,.bs-sheet *{box-sizing:border-box}',
    ':where(.bs,.bs-sheet) button{font:inherit;color:inherit;cursor:pointer;background:none;border:0;padding:0}',
    ':where(.bs,.bs-sheet) :focus-visible{outline:3px solid var(--focus);outline-offset:1px;border-radius:8px}',
    '.bs-head{display:flex;align-items:flex-end;justify-content:space-between;gap:12px;flex-wrap:wrap}',
    '.bs-head h2{margin:0;font:700 26px/1.1 var(--font-d);letter-spacing:-.02em;text-wrap:balance}',
    '.bs-head p{margin:4px 0 0;color:var(--label-2);font-size:13.5px;max-width:58ch}',
    '.bs-tag{display:inline-flex;align-items:center;gap:6px;height:28px;padding:0 12px;border-radius:14px;background:var(--fill-2);color:var(--label-2);font:600 12px var(--font)}',
    '.bs-tag b{color:var(--warn)}',
    '.bs-card{background:var(--card);border-radius:var(--bs-r);box-shadow:var(--shadow-sm);padding:16px;display:grid;gap:14px;min-width:0}',
    '.bs-ct{display:flex;align-items:center;justify-content:space-between;gap:10px;font:650 12px var(--font);letter-spacing:.05em;text-transform:uppercase;color:var(--label-3)}',
    '.bs-ct .r{text-transform:none;letter-spacing:0;font-weight:500}',
    '.bs-team{display:grid;grid-template-columns:repeat(5,minmax(0,1fr));gap:10px}',
    '.bs-slot{display:grid;justify-items:center;gap:6px;padding:10px 4px;border-radius:14px;background:var(--fill-2);position:relative;min-width:0;transition:transform .15s var(--spring,ease)}',
    '.bs-slot:hover{background:var(--hover)}',
    '.bs-slot:active{transform:scale(.97)}',
    '.bs-av{width:56px;height:56px;border-radius:50%;background:var(--fill) center/cover no-repeat;display:grid;place-items:center;font:700 18px var(--font-d);color:var(--label-2);box-shadow:inset 0 0 0 2px var(--ring,rgba(0,0,0,.06));position:relative}',
    '.bs-slot .nm{font:600 12.5px var(--font);max-width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;padding:0 4px}',
    '.bs-slot .sub{font-size:11px;color:var(--label-3);display:flex;gap:4px;align-items:center}',
    '.bs-crown{position:absolute;top:6px;left:8px;width:18px;height:18px;border-radius:9px;background:var(--gold);color:#3B2500;font:800 10px/18px var(--font);text-align:center}',
    '.bs-mark{position:absolute;top:6px;right:8px;height:18px;padding:0 6px;border-radius:9px;background:var(--good-soft);color:var(--good);font:700 10px/18px var(--font)}',
    '.bs-mark.est{background:var(--fill-2);color:var(--label-3)}',
    '.bs-row{display:flex;flex-wrap:wrap;gap:8px;align-items:center}',
    '.bs-chip{display:inline-flex;align-items:center;gap:8px;min-height:36px;padding:6px 12px;border-radius:12px;background:var(--fill-2);font:600 13px var(--font);text-align:left}',
    '.bs-chip small{display:block;font:500 11px var(--font);color:var(--label-3)}',
    '.bs-chip[aria-pressed="true"]{background:var(--accent-bg);color:var(--on-accent)}',
    '.bs-chip[aria-pressed="true"] small{color:inherit;opacity:.8}',
    '.bs-s1{font:700 9.5px/16px var(--font);font-style:normal;padding:0 5px;border-radius:5px;background:var(--good-soft);color:var(--good);align-self:flex-start}',
    '.bs-chip[aria-pressed="true"] .bs-s1{background:rgba(255,255,255,.22);color:inherit}',
    '.bs-dg{display:grid;grid-template-columns:62px minmax(0,1fr);gap:8px;align-items:start}',
    '.bs-dgl{font:650 11px/36px var(--font);color:var(--label-3);text-transform:uppercase;letter-spacing:.05em}',
    '@media (max-width:560px){.bs-dg{grid-template-columns:1fr;gap:2px}.bs-dgl{line-height:18px}}',
    '.bs-step{display:inline-flex;align-items:center;background:var(--fill);border-radius:12px;padding:2px}',
    '.bs-step button{width:36px;height:36px;border-radius:10px;font:600 18px var(--font)}',
    '.bs-step button:hover{background:var(--card)}',
    '.bs-step span{display:grid;justify-items:center;min-width:64px;font-variant-numeric:tabular-nums}',
    '.bs-step small{font:600 10px var(--font);color:var(--label-3);text-transform:uppercase;letter-spacing:.05em}',
    '.bs-step b{font:700 17px/1.1 var(--font-d)}',
    '.bs-drop{border:1.5px dashed var(--sep-2);border-radius:14px;padding:14px;display:grid;gap:8px;justify-items:center;text-align:center;color:var(--label-2);font-size:13px;transition:background .15s}',
    '.bs-drop.on{background:var(--accent-soft);border-color:var(--accent)}',
    '.bs-drop .bs-small{max-width:46ch}',
    '.bs-filled{box-shadow:inset 0 0 0 2px var(--good)!important}',
    '.bs-check{box-shadow:inset 0 0 0 2px var(--warn)!important;background:var(--warn-soft)!important}',
    '.bs-seg{display:inline-grid;grid-auto-flow:column;grid-auto-columns:1fr;background:var(--fill);border-radius:10px;padding:2px;gap:2px}',
    '.bs-seg button{padding:7px 12px;border-radius:8px;font:600 12.5px var(--font);white-space:nowrap}',
    '.bs-seg button[aria-pressed="true"]{background:var(--card);box-shadow:var(--shadow-sm)}',
    '.bs-go{display:flex;gap:10px;align-items:center;flex-wrap:wrap}',
    '.bs-run{text-align:center!important;flex:1;min-width:200px;height:48px;border-radius:14px;background:var(--accent-bg);color:var(--on-accent)!important;font:650 16px var(--font)!important;position:relative;overflow:hidden}',
    '.bs-run:disabled{cursor:progress}',
    '.bs-run i{position:absolute;inset:0 auto 0 0;background:rgba(255,255,255,.22);width:0;transition:width .15s linear}',
    '.bs-run span{position:relative}',
    '.bs-btn{height:36px;padding:0 14px;border-radius:10px;background:var(--fill-2);font:600 13px var(--font)!important;display:inline-flex;align-items:center;gap:6px}',
    '.bs-btn.pri{background:var(--accent-soft);color:var(--accent)!important}',
    '.bs-btn:disabled{opacity:.55;cursor:progress}',
    '.bs-muted{color:var(--label-2);font-size:13px}',
    '.bs-small{color:var(--label-3);font-size:12px}',
    '.bs-verdict{display:grid;grid-template-columns:auto minmax(0,1fr);gap:18px;align-items:center}',
    '.bs-ring{width:116px;height:116px;position:relative}',
    '.bs-ring svg{width:100%;height:100%;transform:rotate(-90deg)}',
    '.bs-ring .v{position:absolute;inset:0;display:grid;place-content:center;text-align:center}',
    '.bs-ring .v b{font:750 30px/1 var(--font-d);font-variant-numeric:tabular-nums;letter-spacing:-.02em}',
    '.bs-ring .v span{font:600 11px var(--font);color:var(--label-3);text-transform:uppercase;letter-spacing:.05em;margin-top:2px}',
    '.bs-vt{display:grid;gap:8px;min-width:0}',
    '.bs-pill{display:inline-flex;align-items:center;height:26px;padding:0 10px;border-radius:13px;font:700 12.5px var(--font)}',
    '.bs-pill.safe{background:var(--good-soft);color:var(--good)}',
    '.bs-pill.risky{background:var(--warn-soft);color:var(--warn)}',
    '.bs-pill.losing{background:color-mix(in srgb,var(--bad) 14%,transparent);color:var(--bad)}',
    '.bs-kpis{display:grid;grid-template-columns:repeat(auto-fit,minmax(110px,1fr));gap:8px}',
    '.bs-kpi{background:var(--fill-2);border-radius:12px;padding:9px 11px;min-width:0}',
    '.bs-kpi .k{font-size:11.5px;color:var(--label-3)}',
    '.bs-kpi .n{font:700 18px var(--font-d);font-variant-numeric:tabular-nums;white-space:nowrap}',
    '.bs-chart{width:100%;height:auto;display:block;overflow:visible}',
    '.bs-chart text{fill:var(--label-3);font:500 11px var(--font)}',
    '.bs-legend{display:flex;flex-wrap:wrap;gap:14px;font-size:12px;color:var(--label-2)}',
    '.bs-legend i{display:inline-block;width:12px;height:8px;border-radius:2px;margin-right:6px;vertical-align:middle}',
    '.bs-heroes{display:grid;grid-template-columns:repeat(auto-fill,minmax(140px,1fr));gap:10px}',
    '.bs-hc{background:var(--fill-2);border-radius:14px;padding:12px;display:grid;gap:8px;min-width:0;text-align:left}',
    '.bs-hc .top{display:flex;gap:10px;align-items:center;min-width:0}',
    '.bs-hc .bs-av{width:40px;height:40px;font-size:14px;flex:none}',
    '.bs-hc .nm{font:650 13.5px var(--font);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}',
    '.bs-hc .dr{font:700 12px var(--font)}',
    '.bs-meter{height:6px;border-radius:3px;background:var(--fill);overflow:hidden}',
    '.bs-meter i{display:block;height:100%;border-radius:3px}',
    '.bs-kv{display:grid;grid-template-columns:auto 1fr;gap:3px 10px;font-size:12px}',
    '.bs-kv dt{color:var(--label-3)}',
    '.bs-kv dd{margin:0;text-align:right;font-variant-numeric:tabular-nums;font-weight:600}',
    '.bs-two{display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,300px),1fr));gap:16px}',
    '.bs-gauge{height:12px;border-radius:6px;background:linear-gradient(90deg,var(--bad),var(--warn) 40%,var(--good) 70%);position:relative;margin:8px 0 2px}',
    '.bs-gauge b{position:absolute;top:-5px;width:4px;height:22px;border-radius:2px;background:var(--label);transform:translateX(-2px)}',
    '.bs-scale{display:flex;justify-content:space-between;font-size:11px;color:var(--label-3);font-variant-numeric:tabular-nums}',
    '.bs-list{display:grid;gap:6px}',
    '.bs-li{display:grid;grid-template-columns:minmax(0,1fr) auto;gap:10px;align-items:center;padding:8px 10px;border-radius:10px;background:var(--fill-2);font-size:13px}',
    '.bs-li .w{font:700 13px var(--font);font-variant-numeric:tabular-nums}',
    '.bs-up{color:var(--good)}.bs-down{color:var(--bad)}',
    /* replay */
    '.bs-stage{position:relative;border-radius:14px;overflow:hidden;background:radial-gradient(120% 90% at 50% 0%,color-mix(in srgb,var(--accent) 16%,var(--card-2)),var(--card-2));padding:40px 12px 12px;display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1fr);gap:10px;min-height:300px}',
    '.bs-side{display:grid;gap:8px;align-content:center;min-width:0}',
    '.bs-unit{display:grid;grid-template-columns:auto minmax(0,1fr);gap:8px;align-items:center;position:relative;transition:opacity .3s,filter .3s;min-width:0}',
    '.bs-side.foe .bs-unit{grid-template-columns:minmax(0,1fr) auto}',
    '.bs-side.foe .bs-unit .bs-pic{order:2}',
    '.bs-unit.dead{opacity:.35;filter:grayscale(1)}',
    '.bs-side.foe .bs-unit.dead:not(.boss){display:none}',
    '.bs-pic{width:40px;height:40px;border-radius:50%;background:var(--fill) center/cover no-repeat;position:relative;display:grid;place-items:center;font:700 13px var(--font-d);color:var(--label-2);box-shadow:inset 0 0 0 2px var(--ring,rgba(0,0,0,.06))}',
    '.bs-unit.boss .bs-pic{width:64px;height:64px;font-size:18px;background:linear-gradient(145deg,color-mix(in srgb,var(--bad) 55%,var(--card)),color-mix(in srgb,var(--bad) 25%,var(--card)));color:#fff}',
    '.bs-pic.flash-u::after,.bs-pic.flash-k::after,.bs-pic.flash-h::after{content:"";position:absolute;inset:-4px;border-radius:50%;animation:bsPulse .5s ease-out}',
    '.bs-pic.flash-u::after{box-shadow:0 0 0 3px var(--bs-ult)}',
    '.bs-pic.flash-k::after{box-shadow:0 0 0 3px var(--bs-shield)}',
    '.bs-pic.flash-h::after{box-shadow:0 0 0 3px var(--bs-dmg)}',
    '@keyframes bsPulse{from{transform:scale(.9);opacity:1}to{transform:scale(1.25);opacity:0}}',
    '.bs-bars{display:grid;gap:3px;min-width:0}',
    '.bs-un{display:flex;justify-content:space-between;gap:6px;font:600 11.5px var(--font);min-width:0}',
    '.bs-un span:first-child{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}',
    '.bs-un span:last-child{color:var(--label-3);font-variant-numeric:tabular-nums}',
    '.bs-hp{height:9px;border-radius:5px;background:var(--fill);position:relative;overflow:hidden}',
    '.bs-hp .lag{position:absolute;inset:0 auto 0 0;background:color-mix(in srgb,var(--bad) 45%,transparent);transition:width .45s ease-out}',
    '.bs-hp .hp{position:absolute;inset:0 auto 0 0;background:var(--good);transition:width .12s linear}',
    '.bs-hp .sh{position:absolute;top:0;bottom:0;background:repeating-linear-gradient(135deg,#fff 0 3px,color-mix(in srgb,var(--bs-shield) 70%,#fff) 3px 6px);opacity:.9}',
    '.bs-en{height:3px;border-radius:2px;background:var(--fill);overflow:hidden}',
    '.bs-en i{display:block;height:100%;background:var(--bs-ult)}',
    '.bs-sts{display:flex;gap:3px;flex-wrap:wrap;min-height:14px}',
    '.bs-st{height:14px;padding:0 4px;border-radius:4px;font:700 9px/14px var(--font);background:var(--good-soft);color:var(--good)}',
    '.bs-st.d{background:color-mix(in srgb,var(--bad) 15%,transparent);color:var(--bad)}',
    '.bs-st.c{background:color-mix(in srgb,var(--bs-ctl) 18%,transparent);color:var(--bs-ctl)}',
    '.bs-float{position:absolute;pointer-events:none;font:800 13px var(--font-d);font-variant-numeric:tabular-nums;animation:bsFloat 1s ease-out forwards;white-space:nowrap;text-shadow:0 1px 2px var(--card)}',
    '.bs-float.dmg{color:var(--bs-dmg)}.bs-float.heal{color:var(--bs-heal)}.bs-float.shield{color:var(--bs-shield)}.bs-float.miss{color:var(--label-3);font-size:11px}.bs-float.crit{font-size:16px}',
    '@keyframes bsFloat{from{transform:translateY(0);opacity:1}to{transform:translateY(-26px);opacity:0}}',
    '.bs-toast{position:absolute;left:50%;top:10px;transform:translateX(-50%);padding:5px 12px;border-radius:12px;background:var(--float,var(--card));box-shadow:var(--shadow-sm);font:650 12.5px var(--font);white-space:nowrap;opacity:0;transition:opacity .2s;z-index:2;max-width:90%;overflow:hidden;text-overflow:ellipsis}',
    '.bs-toast.on{opacity:1}',
    '.bs-end{position:absolute;inset:0;display:grid;place-content:center;text-align:center;background:color-mix(in srgb,var(--card) 70%,transparent);font:750 28px var(--font-d);z-index:3}',
    '.bs-end small{display:block;font:500 13px var(--font);color:var(--label-2);margin-top:4px}',
    '.bs-ctrl{display:flex;gap:10px;align-items:center;flex-wrap:wrap}',
    '.bs-ctrl input[type=range]{flex:1;min-width:140px;accent-color:var(--accent-bg)}',
    '.bs-time{font:600 13px var(--font);font-variant-numeric:tabular-nums;min-width:86px;text-align:right}',
    '.bs-play{width:40px;height:40px;border-radius:20px;background:var(--accent-bg);color:var(--on-accent)!important;display:grid;place-items:center}',
    '.bs-play svg{width:16px;height:16px;fill:currentColor}',
    /* sheet */
    '.bs-sheet{position:fixed;inset:0;z-index:1000;display:grid;place-items:end center;background:var(--scrim,rgba(0,0,0,.3));padding:12px max(12px,env(safe-area-inset-right,0px)) max(12px,env(safe-area-inset-bottom,0px)) max(12px,env(safe-area-inset-left,0px))}',
    '@media (min-width:700px){.bs-sheet{place-items:center}}',
    '.bs-sh{width:min(560px,100%);max-height:min(88vh,860px);overflow:auto;background:var(--pane,var(--card));border-radius:20px;box-shadow:var(--shadow);padding:18px;display:grid;gap:14px;color:var(--label);font-family:var(--font)}',
    '.bs-sh h3{margin:0;font:700 19px var(--font-d)}',
    '.bs-sh .hd{display:flex;align-items:center;gap:12px}',
    '.bs-sh .hd .x{margin-left:auto;width:32px;height:32px;border-radius:16px;background:var(--fill-2);font:600 16px var(--font)}',
    '.bs-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(130px,1fr));gap:8px}',
    '.bs-f{display:grid;gap:4px;font-size:12px;color:var(--label-2);min-width:0}',
    '.bs-f input,.bs-f select{width:100%;height:36px;border-radius:9px;border:0;background:var(--fill-2);padding:0 10px;font:500 14px var(--font);color:var(--label);font-variant-numeric:tabular-nums}',
    '.bs-f input::placeholder{color:var(--label-3)}',
    '.bs-note{font-size:12px;color:var(--label-2);background:var(--accent-soft);border-radius:10px;padding:8px 10px}',
    '.bs-pick{display:grid;grid-template-columns:repeat(auto-fill,minmax(76px,1fr));gap:8px;max-height:46vh;overflow:auto}',
    '.bs-pick button{display:grid;justify-items:center;gap:4px;padding:6px 2px;border-radius:12px;font:600 11px var(--font)}',
    '.bs-pick button:hover{background:var(--hover)}',
    '.bs-pick button[aria-pressed="true"]{background:var(--sel)}',
    '.bs-pick .bs-av{width:46px;height:46px}',
    '.bs-pick span{max-width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}',
    '.bs-skill{display:grid;gap:2px;padding:10px;border-radius:12px;background:var(--fill-2)}',
    '.bs-skill b{font:650 13.5px var(--font)}',
    '.bs-skill .t{font-size:12px;color:var(--accent)}',
    '.bs-skill .d{font-size:12.5px;color:var(--label-2)}',
    '.bs-conf{display:grid;grid-template-columns:auto 1fr;gap:6px 10px;font-size:13px;align-items:start}',
    '.bs-dot{width:10px;height:10px;border-radius:5px;margin-top:4px}',
    '@media (max-width:560px){.bs-mark{font-size:0;width:9px;height:9px;padding:0;top:7px;right:7px;background:var(--good)}.bs-mark.est{background:var(--fill-3)}.bs-team{grid-template-columns:repeat(5,minmax(0,1fr));gap:6px}.bs-av{width:46px;height:46px}.bs-verdict{grid-template-columns:1fr;justify-items:start}.bs-stage{grid-template-columns:1fr;padding:40px 10px 10px;min-height:0;align-content:start}.bs-side.foe{order:-1}.bs-side.foe .bs-unit{grid-template-columns:auto minmax(0,1fr)}.bs-side.foe .bs-unit .bs-pic{order:0}.bs-pic{width:34px;height:34px}.bs-unit.boss .bs-pic{width:52px;height:52px}}',
    '@media (prefers-reduced-motion:reduce){.bs-float,.bs-pic::after{animation:none!important}.bs-hp .lag,.bs-hp .hp{transition:none}}'
  ].join('\n');

  // --------------------------------------------------------------- helpers --
  function E(s) { return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); }
  function pct(x, d) { return x == null ? '–' : (x * 100).toFixed(d || 0) + '%'; }
  function k(x) { if (x == null) return '–'; x = Math.round(x); return Math.abs(x) >= 1e6 ? (x / 1e6).toFixed(1) + 'M' : Math.abs(x) >= 1e4 ? (x / 1e3).toFixed(0) + 'k' : Math.abs(x) >= 1e3 ? (x / 1e3).toFixed(1) + 'k' : String(x); }
  function mmss(t) { if (t == null) return '–'; t = Math.max(0, Math.round(t)); return Math.floor(t / 60) + ':' + String(t % 60).padStart(2, '0'); }
  function initials(n) { return String(n || '?').split(/[\s'-]+/).filter(Boolean).slice(0, 2).map(function (w) { return w[0]; }).join('').toUpperCase(); }
  function heroOf(id) { try { return S.hero(id); } catch (e) { return null; } }

  // Dungeons as the game names them (Adventure > Equip / Growth, and the
  // Temporal Vortex banner). All of them exist on a Season 1 server.
  var BOSSES = [
    { k: 'harpy', mode: 'grave_of_venom', g: 'Gear' }, { k: 'xenos', mode: 'grave_of_curse', g: 'Gear' }, { k: 'scavenger', mode: 'grave_of_rot', g: 'Gear' },
    { k: 'fyre', mode: 'heretical_ruins', g: 'Runes' }, { k: 'gruentius', mode: 'ancient_battlefield', g: 'Runes' },
    { k: 'goblin', mode: 'goblin_lair', g: 'Growth' }, { k: 'flameDomain', mode: 'talent', g: 'Growth' }, { k: 'tempestDomain', mode: 'talent', g: 'Growth' }, { k: 'frostDomain', mode: 'talent', g: 'Growth' },
    { k: 'vortex', mode: 'temporal_vortex', g: 'Daily' }
  ];
  // Boss HP and damage are never published: this corrects our estimate, it is not a game difficulty.
  var ESTIMATE = [['−20%', 0.8], ['Estimate', 1], ['+30%', 1.3], ['+60%', 1.6]];
  var STATS = [['hp', 'HP', 1], ['atk', 'ATK', 1], ['def', 'DEF', 1], ['critRate', 'Crit Rate %', 100], ['critDmg', 'Crit DMG %', 100], ['acc', 'Accuracy', 1], ['res', 'Resistance', 1], ['ench', 'Enlightenment', 1], ['haste', 'Skill Haste', 1], ['atkSpd', 'Attack Speed %', 100]];
  var SLOTS = ['Helm', 'Weapon', 'Armor', 'Gloves'];
  var SHORT = { 'Frost': 'FRO', 'Frozen': 'FRZ', 'Cold': 'CLD', 'Poison': 'PSN', 'Burn': 'BRN', 'Stunned': 'STN', 'Devoured': 'EAT', 'Immortality': 'IMM', 'Invisibility': 'INV', 'Invincibility': 'INV', 'Taunt': 'TNT', 'Buff Prohibition': 'NOB', 'Healing Prohibition': 'NOH', 'Healing Reduction': 'HR', 'Recharging Speed Penalty': 'RCH', 'Damage Reduction': 'DR', 'Backfire': 'BKF', 'Austerity': 'AUS', 'Brotherhood': 'BRO' };
  function shortSt(n) {
    var m = /^(.*?)\s+(I{1,3})$/.exec(n), base = m ? m[1] : n, t = m ? String(m[2].length) : '';
    if (SHORT[base]) return SHORT[base] + t;
    var sign = /Penalty$/.test(base) ? '−' : / Up$/.test(base) ? '+' : '';
    return base.replace(/ (Penalty|Up)$/, '').slice(0, 3).toUpperCase() + sign + t;
  }

  function defaultTeam(host) {
    var names = host.defaultTeam || ['Lossenia', 'Auster', 'Hvitar', 'Voresh', 'Ergander'];
    return names.map(function (n) { var h = heroOf(n); return h ? h.id : null; }).filter(Boolean);
  }
  function blankState(host) {
    // Darko's artifacts (project memory, 2026-10-24); he can change them per hero.
    var heroes = {}, ARTS = host.defaultArtifacts || { Lossenia: "Witch's Remains", Auster: 'Ring of Winter', Hvitar: 'Rift Hourglass' };
    Object.keys(ARTS).forEach(function (n) { var h = heroOf(n); if (h) heroes[h.id] = { artifact: { name: ARTS[n], level: 20, tier: 0 } }; });
    return { v: VERSION_UI, team: defaultTeam(host), captain: 0, boss: 'harpy', strength: 1, stages: {}, level: 59, runs: 200, seconds: 180, heroes: heroes };
  }

  // --------------------------------------------------------------- mount --
  function mount(el, host) {
    host = host || {};
    if (!document.getElementById('bs-css')) { var st = document.createElement('style'); st.id = 'bs-css'; st.textContent = CSS; document.head.appendChild(st); }
    var state = blankState(host), result = null, opts = null, extra = {}, busy = null, rp = null;
    el.innerHTML = '<div class="bs"></div>';
    var root = el.firstChild;

    Promise.resolve(host.load ? host.load(KEY) : null).then(function (v) {
      if (v && v.team) state = Object.assign(blankState(host), v);
      render();
    }, function () { render(); });

    function save() { try { if (host.save) host.save(KEY, JSON.parse(JSON.stringify(state))); } catch (e) { } }
    function pic(id) { var p = host.pics && host.pics[id]; return p ? 'background-image:url(' + p + ')' : ''; }
    function avatar(id, cls) { var h = heroOf(id), p = pic(id); return '<span class="' + (cls || 'bs-av') + '" style="' + p + '">' + (p ? '' : E(initials(h && h.n))) + '</span>'; }

    function heroSpec(id) {
      var c = state.heroes[id] || {}, sp = { hero: +id, level: c.level || state.level };
      if (c.stars) sp.stars = c.stars;
      if (c.skills && (c.skills.battle > 1 || c.skills.ult > 1)) sp.skills = { battle: +c.skills.battle || 1, ult: +c.skills.ult || 1 };
      var typed = {}, any = false;
      STATS.forEach(function (s) { var v = c.stats && c.stats[s[0]]; if (v !== '' && v != null && !isNaN(+v)) { typed[s[0]] = +v / s[2]; any = true; } });
      if (any) { typed.totals = true; sp.stats = typed; }
      if (c.artifact && c.artifact.name) sp.artifact = { name: c.artifact.name, level: +c.artifact.level || 20, tier: +c.artifact.tier || 0 };
      if (c.gear) {
        var cnt = {};
        SLOTS.forEach(function (sl) { var n = c.gear[sl]; if (n) cnt[n] = (cnt[n] || 0) + 1; });
        var sets = Object.keys(cnt).map(function (n) { return { name: n, pieces: cnt[n] }; });
        if (sets.length) sp.sets = sets;
      }
      return sp;
    }
    function bossEntry() { return BOSSES.filter(function (x) { return x.k === state.boss; })[0] || BOSSES[0]; }
    function stageOf(k) {
      var p = S.bosses()[k], st = state.stages && state.stages[k];
      if (!p || !p.stages) return null;
      return st != null ? Math.max(p.stages.min, Math.min(p.stages.max, st)) : S.normalStage(k, state.level);
    }
    function secondsFor(k) { var p = S.bosses()[k]; return (p && p.seconds) || state.seconds; }
    function buildOpts() {
      var b = bossEntry(), stg = stageOf(b.k);
      return { team: state.team.map(heroSpec), captain: state.captain, enemy: { preset: b.k, level: state.level, stage: stg, stage9: b.k === 'xenos' && stg >= 9 }, mode: b.mode, seconds: secondsFor(b.k), runs: state.runs, seed: 20261025, rules: { bossPower: state.strength }, score: !!(S.bosses()[b.k] || {}).score };
    }

    // ------------------------------------------------------------ render --
    function render() {
      var bp = S.bosses();
      var html = '';
      html += '<div class="bs-head"><div>' + (host.hideTitle ? '' : '<h2>Battle Simulator</h2>') + '<p>Hundreds of fights against a boss that hits back. See who survives, when heroes fall and what saves them.</p></div>' +
        '<button class="bs-tag" data-a="honesty" aria-label="How accurate is this?">Sim v' + E(S.VERSION) + ' · <b>estimates</b></button></div>';
      // team
      html += '<section class="bs-card"><div class="bs-ct"><span>Your team</span><span class="r">Tap a hero for stats, artifact and sets</span></div><div class="bs-team">' +
        state.team.map(function (id, i) {
          var h = heroOf(id), c = state.heroes[id] || {}, typed = c.stats && STATS.some(function (s) { var v = c.stats[s[0]]; return v !== '' && v != null; });
          return '<button class="bs-slot" data-a="hero" data-i="' + i + '">' + (i === state.captain ? '<span class="bs-crown" title="Captain">C</span>' : '') +
            '<span class="bs-mark' + (typed ? '' : ' est') + '">' + (typed ? 'My stats' : 'Est.') + '</span>' + avatar(id) +
            '<span class="nm">' + E(h ? h.n : '?') + '</span><span class="sub">Lv ' + E(c.level || state.level) + (c.artifact && c.artifact.name ? ' · ' + E(c.artifact.name.split(' ').slice(-1)[0]) : '') + '</span></button>';
        }).join('') + '</div></section>';
      // boss
      var cur = bp[state.boss] || {}, stg = stageOf(state.boss), groups = ['Gear', 'Runes', 'Growth', 'Daily'];
      html += '<section class="bs-card"><div class="bs-ct"><span>Dungeon</span><button class="r bs-btn" data-a="bossinfo">Skills and targets</button></div>' +
        groups.map(function (g) {
          return '<div class="bs-dg"><span class="bs-dgl">' + g + '</span><div class="bs-row">' + BOSSES.filter(function (b) { return b.g === g; }).map(function (b) {
            var p = bp[b.k]; if (!p) return '';
            return '<button class="bs-chip" data-a="boss" data-k="' + b.k + '" aria-pressed="' + (state.boss === b.k) + '"><span>' + E(p.dungeon) + '<small>' + E(p.name) + ' · ' + E(p.farm || '') + '</small></span>' + (p.s1 ? '<em class="bs-s1" title="Available on Season 1 servers">S1</em>' : '') + '</button>';
          }).join('') + '</div></div>';
        }).join('') +
        '<div class="bs-row">' + (cur.stages ? '<div class="bs-step" role="group" aria-label="' + E(cur.stages.label) + '"><button data-a="stg" data-v="-1" aria-label="Lower">−</button><span><small>' + E(cur.stages.label) + '</small><b>' + stg + '</b></span><button data-a="stg" data-v="1" aria-label="Higher">+</button></div>' : '') +
        '<span class="bs-small">' + (cur.altName ? 'In game also "' + E(cur.altName) + '". ' : '') + (cur.score ? 'Score fight: damage before your team falls.' : cur.stars ? '3 stars = more than 50 s left.' : '') + '</span>' +
        '<button class="bs-btn" data-a="more" style="margin-left:auto">' + E(state.runs) + ' fights · Lv ' + E(state.level) + (state.strength !== 1 ? ' · boss ' + (state.strength > 1 ? '+' : '−') + Math.round(Math.abs(state.strength - 1) * 100) + '%' : '') + '</button></div></section>';
      // run
      html += '<div class="bs-go"><button class="bs-run" data-a="run"' + (busy ? ' disabled' : '') + '><i style="width:' + (busy ? Math.round(busy.p * 100) : 0) + '%"></i><span>' + (busy ? E(busy.label) + ' ' + Math.round(busy.p * 100) + '%' : 'Simulate ' + E(state.runs) + ' fights') + '</span></button></div>';
      html += '<div id="bs-out">' + (result ? results() : '') + '</div>';
      root.innerHTML = html;
      if (result && rp) mountReplay();
    }

    function verdictOf(w) { return w >= 0.9 ? 'safe' : w >= 0.5 ? 'risky' : 'losing'; }
    var VERDICT = { safe: 'Safe win', risky: 'Risky', losing: 'Likely loss' };

    function results() {
      var r = result, sv = r.survival, v = verdictOf(r.winRate);
      var deaths = r.perHero.reduce(function (s, p) { return s + p.deathRate; }, 0);
      var ring = 2 * Math.PI * 50, col = v === 'safe' ? 'var(--good)' : v === 'risky' ? 'var(--warn)' : 'var(--bad)';
      var h = '<div style="display:grid;gap:16px">';
      if (opts.score) return h + scoreCard() + resultsTail(true) + '</div>';
      var pre = S.bosses()[opts.enemy.preset] || {}, stars = '';
      if (pre.stars && r.ttk) {
        var left = opts.seconds - r.ttk.p50, n = 0;
        pre.stars.forEach(function (x) { if (!n && left > x[0]) n = x[1]; });
        stars = kpi('Stars', '<span style="color:var(--gold)">' + '★★★'.slice(0, n) + '</span><span style="color:var(--fill-3)">' + '★★★'.slice(n) + '</span>');
      }
      // verdict
      h += '<section class="bs-card"><div class="bs-verdict"><div class="bs-ring"><svg viewBox="0 0 116 116"><circle cx="58" cy="58" r="50" fill="none" stroke="var(--fill)" stroke-width="10"/>' +
        '<circle cx="58" cy="58" r="50" fill="none" stroke="' + col + '" stroke-width="10" stroke-linecap="round" stroke-dasharray="' + (ring * r.winRate).toFixed(1) + ' ' + ring.toFixed(1) + '"/></svg>' +
        '<div class="v"><b>' + pct(r.winRate) + '</b><span>wins</span></div></div><div class="bs-vt"><div class="bs-row"><span class="bs-pill ' + v + '">' + VERDICT[v] + '</span>' +
        '<span class="bs-small">' + E(r.runs) + ' fights vs ' + E(r.enemy && r.enemy.name) + '</span></div>' +
        '<div class="bs-kpis">' +
        kpi('Clear time', r.ttk ? mmss(r.ttk.p50) : 'never') + stars +
        kpi('Heroes lost', deaths.toFixed(1) + ' / fight') +
        kpi('First death', sv.firstDeath != null ? mmss(sv.firstDeath) + ' (' + pct(sv.anyDeath) + ')' : 'none') +
        kpi('Wipes', pct(sv.loss)) + (sv.timeout ? kpi('Out of time', pct(sv.timeout)) : '') +
        '</div></div></div></section>';
      return h + resultsTail(false) + '</div>';
    }
    // Temporal Vortex: the result is the damage dealt before the team falls.
    function scoreCard() {
      var r = result, sv = r.survival;
      var dmg = r.perHero.reduce(function (s, p) { return s + p.damage; }, 0);
      var lasts = sv.wipeAt != null ? sv.wipeAt : null;
      return '<section class="bs-card"><div class="bs-verdict"><div class="bs-ring"><svg viewBox="0 0 116 116"><circle cx="58" cy="58" r="50" fill="none" stroke="var(--accent-bg)" stroke-width="10"/></svg>' +
        '<div class="v"><b>' + k(dmg) + '</b><span>score</span></div></div><div class="bs-vt"><div class="bs-row"><span class="bs-pill safe">Damage score</span>' +
        '<span class="bs-small">' + E(r.runs) + ' fights vs ' + E(r.enemy && r.enemy.name) + '</span></div><div class="bs-kpis">' +
        kpi('Team lasts', lasts != null ? mmss(lasts) : 'all ' + mmss(opts.seconds)) +
        kpi('First death', sv.firstDeath != null ? mmss(sv.firstDeath) : 'none') +
        kpi('Damage / s', k(r.dps.p50)) +
        '</div><div class="bs-small">Higher score = higher daily ranking. Longer survival raises the score as much as more damage.</div></div></div></section>';
    }
    function resultsTail(score) {
      var r = result, sv = r.survival, h = '';
      // chart
      h += '<section class="bs-card"><div class="bs-ct"><span>Team HP over the fight</span><span class="r">' + E(r.runs) + ' fights</span></div>' + chart(sv) +
        '<div class="bs-legend"><span><i style="background:color-mix(in srgb,var(--good) 25%,transparent)"></i>Middle 80% of fights</span><span><i style="background:var(--good)"></i>Typical fight</span><span><i style="background:var(--bad)"></i>Heroes alive</span></div></section>';
      // replay
      h += '<section class="bs-card"><div class="bs-ct"><span>Replay</span><div class="bs-seg">' +
        [['typical', 'Typical'], ['worst', 'Worst'], ['best', 'Best']].map(function (x) { return '<button data-a="rp" data-v="' + x[0] + '" aria-pressed="' + (rp && rp.which === x[0]) + '">' + x[1] + '</button>'; }).join('') +
        '</div></div><div id="bs-rp"></div></section>';
      // heroes
      h += '<section class="bs-card"><div class="bs-ct"><span>Heroes</span><span class="r">Average per fight</span></div><div class="bs-heroes">' + r.perHero.map(heroCard).join('') + '</div></section>';
      // defense + healer
      if (score) return h + defenseCard(true);
      h += '<div class="bs-two">' + defenseCard() + healerCard() + '</div>';
      h += sureCard();
      return h;
    }
    function kpi(k1, n) { return '<div class="bs-kpi"><div class="k">' + E(k1) + '</div><div class="n">' + n + '</div></div>'; }
    function heroCard(p) {
      var id = p.heroId, dr = p.deathRate, minHp = p.minHp ? p.minHp.p50 : 1;
      var c = dr >= 0.3 ? 'var(--bad)' : dr > 0.05 ? 'var(--warn)' : 'var(--good)';
      var land = p.landRate != null ? Math.round(p.debuffLanded) + ' / ' + Math.round(p.debuffTries) + ' (' + pct(p.landRate) + ')' : '–';
      return '<div class="bs-hc"><div class="top">' + avatar(id) + '<div style="min-width:0"><div class="nm">' + E(p.name) + '</div><div class="dr" style="color:' + c + '">' + (dr ? 'Dies in ' + pct(dr) + (p.deathTime ? ' · ~' + mmss(p.deathTime.p50) : '') : 'Never dies') + '</div></div></div>' +
        '<div><div class="bs-small" style="display:flex;justify-content:space-between"><span>Lowest HP</span><span>' + pct(minHp) + '</span></div><div class="bs-meter"><i style="width:' + Math.max(2, minHp * 100) + '%;background:' + c + '"></i></div></div>' +
        '<dl class="bs-kv"><dt>Damage</dt><dd>' + k(p.damage) + ' · ' + pct(p.share) + '</dd><dt>Taken</dt><dd>' + k(p.takenHp != null ? p.takenHp : p.taken) + '</dd>' +
        // Like the game's Statistics screen, Healed counts heals plus shield that actually blocked damage.
        (p.healing || p.shieldUsed ? '<dt>Healed</dt><dd class="bs-up">' + k((p.healing || 0) + (p.shieldUsed || 0)) + '</dd>' : '') + (p.shieldUsed ? '<dt>by shields</dt><dd style="color:var(--bs-shield)">' + k(p.shieldUsed) + '</dd>' : '') +
        '<dt>Debuffs</dt><dd title="landed / tried">' + land + '</dd></dl></div>';
    }
    function chart(sv) {
      var W = Math.max(320, Math.min(600, (root.clientWidth || 600) - 32)), H = W < 450 ? 170 : 190, L = 34, R = 26, T = 8, B = 22, n = sv.band.length, tmax = Math.max(1, n - 1);
      var x = function (t) { return L + (W - L - R) * t / tmax; }, y = function (v) { return T + (H - T - B) * (1 - v); };
      var up = sv.band.map(function (b, i) { return x(i).toFixed(1) + ',' + y(b[2]).toFixed(1); });
      var dn = sv.band.map(function (b, i) { return x(i).toFixed(1) + ',' + y(b[0]).toFixed(1); }).reverse();
      var mid = sv.band.map(function (b, i) { return x(i).toFixed(1) + ',' + y(b[1]).toFixed(1); }).join(' ');
      var al = sv.alive.map(function (a, i) { return x(i).toFixed(1) + ',' + y(a / 5).toFixed(1); }).join(' ');
      var g = '';
      [0, 0.5, 1].forEach(function (v) { g += '<line x1="' + L + '" x2="' + (W - R) + '" y1="' + y(v) + '" y2="' + y(v) + '" stroke="var(--sep)" stroke-width="1"/><text x="' + (L - 6) + '" y="' + (y(v) + 4) + '" text-anchor="end">' + v * 100 + '%</text>'; });
      [0, 5].forEach(function (v) { g += '<text x="' + (W - R + 6) + '" y="' + (y(v / 5) + 4) + '" style="fill:var(--bad)">' + v + '</text>'; });
      var step = tmax > 150 ? 60 : 30;
      for (var t = 0; t <= tmax; t += step) g += '<text x="' + x(t) + '" y="' + (H - 4) + '" text-anchor="middle">' + mmss(t) + '</text>';
      return '<svg class="bs-chart" viewBox="0 0 ' + W + ' ' + H + '" role="img" aria-label="Team HP over time">' + g +
        '<polygon points="' + up.concat(dn).join(' ') + '" fill="color-mix(in srgb,var(--good) 22%,transparent)"/>' +
        '<polyline points="' + mid + '" fill="none" stroke="var(--good)" stroke-width="2.5" stroke-linejoin="round"/>' +
        '<polyline points="' + al + '" fill="none" stroke="var(--bad)" stroke-width="1.5" stroke-dasharray="4 3"/></svg>';
    }
    function defenseCard(noLimit) {
      var r = result, sv = r.survival, d = extra.defense || S.survival.defense(r, opts), b = extra.bp;
      var cover = sv.incomingDps ? (sv.healPs + sv.absorbPs) / sv.incomingDps : 0;
      var h = '<section class="bs-card"><div class="bs-ct"><span>Defense</span></div>';
      if (b) {
        var m = Math.min(3, b.margin), pos = Math.max(0, Math.min(100, (m - 0.5) / 2.5 * 100));
        h += '<div><div class="bs-muted">The boss can get <b style="color:var(--label)">' + (b.capped === 'high' ? 'more than ' : '') + b.margin.toFixed(1) + '×</b> stronger before you lose half your fights.</div>' +
          '<div class="bs-gauge"><b style="left:' + pos + '%"></b></div><div class="bs-scale"><span>0.5×</span><span>1×</span><span>2×</span><span>3×</span></div></div>';
      } else if (!noLimit) h += '<button class="bs-btn pri" data-a="bp"' + (busy ? ' disabled' : '') + '>Find my limit</button>';
      h += '<div><div class="bs-small" style="display:flex;justify-content:space-between"><span>Boss damage healed or shielded</span><span>' + pct(cover) + '</span></div><div class="bs-meter"><i style="width:' + Math.min(100, cover * 100) + '%;background:var(--good)"></i></div>' +
        '<div class="bs-small" style="margin-top:4px">' + k(sv.incomingDps) + ' damage/s in · ' + k(sv.healPs) + ' heal/s · ' + k(sv.absorbPs) + ' shield/s</div></div>';
      var maxE = Math.max.apply(null, d.map(function (x) { return x.ehp; }));
      h += '<div class="bs-list">' + d.map(function (x) {
        return '<div class="bs-li" title="Effective HP = HP after DEF"><span>' + E(x.name) + ' <span class="bs-small">' + k(x.ehp) + ' eff. HP · takes ' + pct(x.takenShare) + '</span><div class="bs-meter" style="margin-top:4px"><i style="width:' + (x.ehp / maxE * 100) + '%;background:var(--accent-bg)"></i></div></span><span class="w">' + (x.aloneSeconds ? x.aloneSeconds.toFixed(0) + ' s' : '–') + '</span></div>';
      }).join('') + '</div><div class="bs-small">Seconds = how long each hero lasts if the boss hits only them, without heals.</div></section>';
      return h;
    }
    function healerCard() {
      var hc = extra.healer;
      var h = '<section class="bs-card"><div class="bs-ct"><span>Do I need a healer?</span></div>';
      if (!hc) return h + '<p class="bs-muted" style="margin:0">Tries every healer and shielder you own in your team, against a boss strong enough to beat you half the time.</p><button class="bs-btn pri" data-a="healer"' + (busy ? ' disabled' : '') + '>Test healers</button></section>';
      var cur = hc.current, word = { yes: 'Yes, a healer helps a lot', maybe: 'A healer helps a little', no: 'No, your sustain is enough', none: 'No healer to test' }[hc.verdict];
      h += '<div class="bs-row"><span class="bs-pill ' + (hc.verdict === 'yes' ? 'losing' : hc.verdict === 'maybe' ? 'risky' : 'safe') + '">' + word + '</span><span class="bs-small">at boss ' + hc.stress.toFixed(2) + '×</span></div>';
      h += '<div class="bs-list"><div class="bs-li"><span><b>Your team</b> <span class="bs-small">vs this stronger boss</span></span><span class="w">' + pct(cur.win) + '</span></div>' +
        hc.add.slice(0, 5).map(function (x) { return '<div class="bs-li"><span>+ <b>' + E(x.hero) + '</b> for ' + E(x.out) + ' <span class="bs-small">· HP left ' + pct(x.hpLeft) + (x.ttk ? ' · ' + mmss(x.ttk) : '') + '</span></span><span class="w ' + (x.win > cur.win ? 'bs-up' : x.win < cur.win ? 'bs-down' : '') + '">' + pct(x.win) + '</span></div>'; }).join('') +
        hc.without.slice(0, 3).map(function (x) { return '<div class="bs-li"><span>− <b>' + E(x.without) + '</b> (' + E(x.hero) + ' in)</span><span class="w ' + (x.win < cur.win ? 'bs-down' : '') + '">' + pct(x.win) + '</span></div>'; }).join('') + '</div>';
      return h + '<div class="bs-small">Win rate in ' + E(hc.runs || 40) + ' fights each.</div></section>';
    }
    function sureCard() {
      var rb = extra.robust;
      var h = '<section class="bs-card"><div class="bs-ct"><span>How sure is this?</span></div>';
      if (!rb) return h + '<p class="bs-muted" style="margin:0">Boss HP and damage are not published anywhere, so they are estimates. Rerun with the boss weaker and stronger, and with other guessed rules, to see if the verdict holds.</p><button class="bs-btn pri" data-a="robust"' + (busy ? ' disabled' : '') + '>Check the verdict</button></section>';
      var names = { bossPower: 'Boss strength', defK: 'Defense curve', frostBurstCap: 'Frost burst size', castUlt: 'Ultimate cast time' };
      h += '<div class="bs-row"><span class="bs-pill ' + (rb.robust ? 'safe' : 'risky') + '">' + (rb.robust ? 'Verdict holds' : 'Verdict can change') + '</span><span class="bs-small">wins range ' + pct(rb.min) + ' – ' + pct(rb.max) + '</span></div>';
      h += '<div class="bs-list">' + rb.rows.map(function (x) {
        var rel = x.rule === 'bossPower' ? x.value / opts.rules.bossPower : 0;
        var lab = x.rule === 'bossPower' ? 'Boss ' + Math.round(Math.abs(rel - 1) * 100) + '% ' + (rel < 1 ? 'weaker' : 'stronger') : names[x.rule] + ' ' + x.value;
        return '<div class="bs-li"><span>' + E(lab) + '</span><span class="w ' + (verdictOf(x.win) !== verdictOf(rb.base) ? 'bs-down' : '') + '">' + pct(x.win) + '</span></div>';
      }).join('') + '</div></section>';
      return h;
    }

    // ------------------------------------------------------------ replay --
    function loadReplay(which) {
      var pick = S.pickRun(result, which);
      var data = S.replay(opts, pick.seed, 0.2);
      rp = { which: which, data: data, t: 0, playing: true, speed: Math.max(8, data.t / 8), last: null, evI: 0, raf: 0 };
    }
    function mountReplay() {
      var box = root.querySelector('#bs-rp'); if (!box) return;
      var d = rp.data, A = d.units.filter(function (u) { return u.side === 'A'; }), Bs = d.units.filter(function (u) { return u.side === 'B'; });
      function unitHtml(u) {
        var h = heroOf(u.heroId), p = u.heroId ? pic(u.heroId) : '';
        return '<div class="bs-unit' + (u.isBoss ? ' boss' : '') + '" data-u="' + u.uid + '"><span class="bs-pic" style="' + p + '">' + (p ? '' : E(initials(u.name))) + '</span>' +
          '<div class="bs-bars"><div class="bs-un"><span>' + E(u.name) + '</span><span class="hpn"></span></div><div class="bs-hp"><i class="lag"></i><i class="hp"></i><i class="sh"></i></div><div class="bs-en"><i></i></div><div class="bs-sts"></div></div></div>';
      }
      box.innerHTML = '<div class="bs-stage"><div class="bs-toast"></div><div class="bs-side">' + A.map(unitHtml).join('') + '</div><div class="bs-side foe">' + Bs.map(unitHtml).join('') + '</div></div>' +
        '<div class="bs-ctrl" style="margin-top:10px"><button class="bs-play" data-a="play" aria-label="Play or pause"></button><input type="range" id="bs-scrub" min="0" max="' + d.t.toFixed(1) + '" step="0.1" value="0" aria-label="Fight time"><span class="bs-time"></span>' +
        '<div class="bs-seg">' + [['Fast', d.t / 6], ['Normal', d.t / 12], ['Slow', d.t / 30]].map(function (s, i) { return '<button data-a="spd" data-v="' + s[1].toFixed(2) + '" aria-pressed="' + (i === 0 ? (Math.abs(rp.speed - s[1]) < 0.01 || !rp.userSpeed) : Math.abs(rp.speed - s[1]) < 0.01) + '">' + s[0] + '</button>'; }).join('') + '</div></div>' +
        '<div class="bs-small" style="margin-top:6px">Seed ' + E(d.seed) + ' · ' + (d.result === 'win' ? 'Won in ' + mmss(d.t) : d.result === 'loss' ? 'Wiped at ' + mmss(d.t) : 'Ran out of time') + ' · red numbers damage, green heals, blue shields, grey = resisted</div>';
      if (!rp.userSpeed) rp.speed = d.t / 6;
      rp.els = {};
      box.querySelectorAll('.bs-unit').forEach(function (n) {
        rp.els[n.dataset.u] = { n: n, pic: n.querySelector('.bs-pic'), hp: n.querySelector('.hp'), lag: n.querySelector('.lag'), sh: n.querySelector('.sh'), en: n.querySelector('.bs-en i'), sts: n.querySelector('.bs-sts'), hpn: n.querySelector('.hpn'), stKey: '' };
      });
      rp.toast = box.querySelector('.bs-toast');
      rp.stage = box.querySelector('.bs-stage');
      rp.scrub = box.querySelector('#bs-scrub');
      rp.time = box.querySelector('.bs-time');
      rp.playBtn = box.querySelector('.bs-play');
      rp.scrub.addEventListener('input', function () { seek(+rp.scrub.value); });
      seek(rp.t);
      setPlaying(rp.playing && rp.t < d.t);
    }
    function frameAt(t) {
      var f = rp.data.frames, lo = 0, hi = f.length - 1;
      while (lo < hi) { var m = (lo + hi + 1) >> 1; if (f[m].t <= t) lo = m; else hi = m - 1; }
      return f[lo];
    }
    function drawFrame(t) {
      var f = frameAt(t), seen = {};
      f.u.forEach(function (x) {
        var e = rp.els[x[0]]; if (!e) return; seen[x[0]] = 1;
        var max = Math.max(1, x[2]), hpw = Math.max(0, x[1] / max * 100), shw = Math.min(100 - hpw, x[3] / max * 100);
        e.n.style.visibility = '';
        e.hp.style.width = hpw + '%'; e.lag.style.width = hpw + '%';
        e.hp.style.background = hpw < 25 ? 'var(--bad)' : hpw < 50 ? 'var(--warn)' : 'var(--good)';
        e.sh.style.left = hpw + '%'; e.sh.style.width = shw + '%';
        e.en.style.width = Math.min(100, x[4] * 100) + '%';
        e.hpn.textContent = x[5] ? k(x[1]) + (x[3] > 0 ? ' +' + k(x[3]) : '') : 'KO';
        e.n.classList.toggle('dead', !x[5]);
        var sts = x[6].slice(0, 6), key = sts.map(function (s) { return s[0] + s[2]; }).join('|');
        if (key !== e.stKey) {
          e.stKey = key;
          e.sts.innerHTML = sts.map(function (s) { return '<span class="bs-st' + (s[1] === 1 ? ' d' : s[1] === 2 ? ' c' : '') + '" title="' + E(s[0]) + '">' + E(shortSt(s[0])) + (s[2] > 1 ? s[2] : '') + '</span>'; }).join('');
        }
      });
      Object.keys(rp.els).forEach(function (uid) { if (!seen[uid]) rp.els[uid].n.style.visibility = 'hidden'; });
      rp.scrub.value = t.toFixed(1);
      rp.time.textContent = mmss(t) + ' / ' + mmss(rp.data.t);
    }
    // Floating numbers: sum each unit's damage / heal / shield per 0.6 s of fight time.
    function popEvents(t0, t1) {
      var ev = rp.data.events, acc = {};
      while (rp.evI < ev.length && ev[rp.evI].t <= t1) {
        var e = ev[rp.evI++];
        if (e.t < t0) continue;
        if (e.k === 'd' || e.k === 'h' || e.k === 's') {
          var a = acc[e.g] = acc[e.g] || { d: 0, h: 0, s: 0, c: 0 };
          a[e.k] += e.a; if (e.c) a.c = 1;
          if (e.k === 'd') flash(e.g, 'h');
        } else if (e.k === 'u') flash(e.s, 'u');
        else if (e.k === 'k') flash(e.s, 'k');
        else if (e.k === 'm') float(e.g, 'Resist', 'miss');
        else if (e.k === 'bs') toast(e.n);
        else if (e.k === 'x') float(e.g, 'KO', 'dmg crit');
      }
      Object.keys(acc).forEach(function (uid) {
        var a = acc[uid];
        if (a.d >= 1) float(uid, '−' + k(a.d), 'dmg' + (a.c ? ' crit' : ''));
        if (a.h >= 1) float(uid, '+' + k(a.h), 'heal', 18);
        if (a.s >= 1) float(uid, '+' + k(a.s), 'shield', -18);
      });
    }
    function flash(uid, kind) {
      var e = rp.els[uid]; if (!e) return;
      e.pic.classList.remove('flash-u', 'flash-k', 'flash-h'); void e.pic.offsetWidth; e.pic.classList.add('flash-' + kind);
    }
    function float(uid, txt, cls, dx) {
      var e = rp.els[uid]; if (!e || !rp.stage) return;
      if (rp.stage.querySelectorAll('.bs-float').length > 40) return;
      var sr = rp.stage.getBoundingClientRect(), pr = e.pic.getBoundingClientRect();
      var f = document.createElement('span');
      f.className = 'bs-float ' + cls; f.textContent = txt;
      f.style.left = (pr.left - sr.left + pr.width / 2 - 14 + (dx || 0) + (Math.random() * 10 - 5)) + 'px';
      f.style.top = (pr.top - sr.top - 6) + 'px';
      rp.stage.appendChild(f);
      setTimeout(function () { f.remove(); }, 1000);
    }
    function toast(txt) {
      if (!rp.toast) return;
      rp.toast.textContent = txt; rp.toast.classList.add('on');
      clearTimeout(rp.toastT); rp.toastT = setTimeout(function () { rp && rp.toast && rp.toast.classList.remove('on'); }, 1100);
    }
    function seek(t) {
      rp.t = Math.max(0, Math.min(rp.data.t, t));
      var ev = rp.data.events, i = 0;
      while (i < ev.length && ev[i].t <= rp.t) i++;
      rp.evI = i; rp.popT = rp.t;
      var end = rp.stage && rp.stage.querySelector('.bs-end'); if (end) end.remove();
      drawFrame(rp.t);
      if (rp.t >= rp.data.t) showEnd();
    }
    function showEnd() {
      if (!rp.stage || rp.stage.querySelector('.bs-end')) return;
      var d = rp.data, n = document.createElement('div');
      n.className = 'bs-end';
      n.innerHTML = (d.result === 'win' ? 'Victory' : d.result === 'loss' ? 'Defeat' : 'Time up') + '<small>' + mmss(d.t) + ' · tap play to watch again</small>';
      rp.stage.appendChild(n);
    }
    function setPlaying(on) {
      rp.playing = on;
      if (rp.playBtn) rp.playBtn.innerHTML = on ? '<svg viewBox="0 0 16 16"><rect x="3" y="2" width="3.5" height="12" rx="1"/><rect x="9.5" y="2" width="3.5" height="12" rx="1"/></svg>' : '<svg viewBox="0 0 16 16"><path d="M4 2.5v11l9-5.5z"/></svg>';
      cancelAnimationFrame(rp.raf);
      if (!on) return;
      if (rp.t >= rp.data.t) seek(0);
      rp.last = null;
      var reduce = root.ownerDocument.defaultView.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;
      function step(ts) {
        if (!rp || !rp.playing || !root.isConnected) return;
        if (rp.last != null) {
          var nt = Math.min(rp.data.t, rp.t + (ts - rp.last) / 1000 * rp.speed);
          if (nt - rp.popT >= 0.6 || nt >= rp.data.t) { if (!reduce) popEvents(rp.popT, nt); else { var ev = rp.data.events; while (rp.evI < ev.length && ev[rp.evI].t <= nt) rp.evI++; } rp.popT = nt; }
          rp.t = nt; drawFrame(nt);
          if (nt >= rp.data.t) { setPlaying(false); showEnd(); return; }
        }
        rp.last = ts;
        rp.raf = requestAnimationFrame(step);
      }
      rp.raf = requestAnimationFrame(step);
    }

    // ----------------------------------------------------------- actions --
    async function job(label, fn) {
      if (busy) return;
      busy = { label: label, p: 0 };
      render();
      var btn = root.querySelector('.bs-run');
      var prog = function (p) { busy.p = p; if (btn) { btn.querySelector('i').style.width = Math.round(p * 100) + '%'; btn.querySelector('span').textContent = label + ' ' + Math.round(p * 100) + '%'; } };
      try { await fn(prog); } catch (e) { busy = null; render(); sheet('<div class="hd"><h3>The simulator stopped</h3><button class="x" data-a="close" aria-label="Close">×</button></div><p class="bs-muted">' + E(e && e.message || e) + '</p>'); return; }
      busy = null; render();
    }
    function run() {
      if (rp) { cancelAnimationFrame(rp.raf); rp = null; }
      opts = buildOpts();
      extra = {};
      job('Simulating', async function (prog) {
        result = await S.survival.run(opts, { runs: state.runs, onProgress: prog });
        extra.defense = S.survival.defense(result, opts);
        loadReplay('typical');
      });
    }
    function ownedPool() {
      var owned = host.owned && host.owned.length ? host.owned : Object.keys(S.kits()).map(Number);
      var inTeam = state.team.map(Number);
      return owned.filter(function (id) { return S.kits()[id] && inTeam.indexOf(+id) < 0; });
    }

    root.addEventListener('click', function (ev) {
      var a = ev.target.closest('[data-a]'); if (!a || !root.contains(a)) return;
      var act = a.dataset.a;
      if (act === 'run') run();
      else if (act === 'boss') { state.boss = a.dataset.k; save(); render(); }
      else if (act === 'stg') {
        var p = S.bosses()[state.boss]; state.stages = state.stages || {};
        state.stages[state.boss] = Math.max(p.stages.min, Math.min(p.stages.max, stageOf(state.boss) + (+a.dataset.v)));
        save(); render();
      }
      else if (act === 'hero') heroSheet(+a.dataset.i);
      else if (act === 'bossinfo') bossSheet();
      else if (act === 'honesty') honestySheet();
      else if (act === 'more') moreSheet();
      else if (act === 'rp') { cancelAnimationFrame(rp && rp.raf); loadReplay(a.dataset.v); render(); }
      else if (act === 'play') setPlaying(!rp.playing);
      else if (act === 'spd') { rp.speed = +a.dataset.v; rp.userSpeed = true; a.parentNode.querySelectorAll('button').forEach(function (b) { b.setAttribute('aria-pressed', b === a); }); }
      else if (act === 'bp') job('Finding your limit', async function (prog) { extra.bp = await S.survival.breakingPoint(opts, { runs: 40, onProgress: prog }); });
      else if (act === 'healer') job('Testing healers', async function (prog) {
        if (!extra.bp) extra.bp = await S.survival.breakingPoint(opts, { runs: 40, onProgress: function (p) { prog(p * 0.3); } });
        var stress = result.winRate < 0.9 ? opts.rules.bossPower : extra.bp.power;
        extra.healer = await S.survival.healerCheck(opts, ownedPool(), { stress: stress, runs: 40, onProgress: function (p) { prog(0.3 + p * 0.7); } });
        extra.healer.runs = 40;
      });
      else if (act === 'robust') job('Checking', async function (prog) { extra.robust = await S.survival.robustness(opts, { runs: 60, onProgress: prog }); });
    });

    // ------------------------------------------------------------ sheets --
    var sh = null;
    function sheet(inner, onInput) {
      closeSheet();
      sh = document.createElement('div');
      sh.className = 'bs-sheet'; sh.setAttribute('role', 'dialog'); sh.setAttribute('aria-modal', 'true');
      sh.innerHTML = '<div class="bs-sh">' + inner + '</div>';
      document.body.appendChild(sh);
      sh.addEventListener('click', function (e) { if (e.target === sh || e.target.closest('[data-a="close"]')) closeSheet(); });
      if (onInput) { sh.addEventListener('input', onInput); sh.addEventListener('change', onInput); sh.addEventListener('click', onInput); }
      var f = sh.querySelector('input,select,button'); if (f) f.focus({ preventScroll: true });
      return sh;
    }
    function closeSheet() { if (sh) { sh.remove(); sh = null; } }
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') closeSheet(); });

    function heroSheet(i) {
      var id = state.team[i], h = heroOf(id), c = state.heroes[id] = state.heroes[id] || {};
      c.stats = c.stats || {}; c.gear = c.gear || {}; c.artifact = c.artifact || {};
      var calc = {};
      try { var spec = heroSpec(id); delete spec.stats; var fs = S.finalStats(S.buildStats(spec).s); calc = fs; } catch (e) { }
      var arts = Object.keys(S.data().artifacts).map(function (key) { return S.data().artifacts[key]; }).filter(function (a) { return a.season === 's1'; })
        .sort(function (a, b) { var ca = S.artifactsCoded().indexOf(a.n) >= 0 ? 0 : 1, cb = S.artifactsCoded().indexOf(b.n) >= 0 ? 0 : 1; return ca - cb || a.n.localeCompare(b.n); });
      var sets = S.BEGINNER_SETS.map(function (n) { return S.setByName(n); }).filter(Boolean);
      var groups = [['Mythic', '1 piece = effect'], ['Legendary', '2 = stats, 3 = effect'], ['Epic', '2 = stats'], ['Rare', '2 = stats']];
      function setOptions(sel) {
        return '<option value="">None</option>' + groups.map(function (g) {
          return '<optgroup label="' + g[0] + ' (' + g[1] + ')">' + sets.filter(function (s) { return s.r === g[0]; }).map(function (s) { return '<option' + (sel === s.n ? ' selected' : '') + '>' + E(s.n) + '</option>'; }).join('') + '</optgroup>';
        }).join('');
      }
      var fmt = function (key, mul) { var v = calc[key]; if (v == null) return ''; v = v * mul; return mul === 100 ? v.toFixed(0) : Math.round(v); };
      var html = '<div class="hd">' + avatar(id) + '<div><h3>' + E(h.n) + '</h3><div class="bs-small">' + E(h.r) + ' · ' + E(h.sc) + ' · ' + E(h.el) + '</div></div><button class="x" data-a="close" aria-label="Close">×</button></div>' +
        '<div class="bs-row"><button class="bs-btn" data-h="swap">Change hero</button><button class="bs-chip" data-h="cap" aria-pressed="' + (state.captain === i) + '">Captain</button></div>' +
        shotZone() +
        '<div class="bs-grid"><label class="bs-f">Level<input id="bs-lv" type="number" min="1" max="100" inputmode="numeric" value="' + E(c.level || state.level) + '"></label>' +
        '<label class="bs-f">Stars<input id="bs-stars" type="number" min="1" max="5" inputmode="numeric" placeholder="auto" value="' + E(c.stars || '') + '"></label>' +
        '<label class="bs-f">Battle skill level<input id="bs-skb" type="number" min="1" max="5" inputmode="numeric" value="' + E((c.skills && c.skills.battle) || 1) + '"></label>' +
        '<label class="bs-f">Ultimate level<input id="bs-sku" type="number" min="1" max="5" inputmode="numeric" value="' + E((c.skills && c.skills.ult) || 1) + '"></label></div>' +
        '<div class="bs-small">Skill levels 1-5 from the hero\'s skill screen (raised with scrolls). Each level adds damage, effect chance or a faster recharge.</div>' +
        '<div class="bs-ct" style="margin-top:4px"><span>Stats from the hero screen</span><button class="r bs-btn" data-h="clear">Clear</button></div>' +
        '<div class="bs-note">Type the totals the game shows on the hero\'s attribute screen. They already include gear, set stats and the artifact, so nothing is added twice. Empty fields use the estimate shown in grey.</div>' +
        '<div class="bs-grid">' + STATS.map(function (s) { var v = c.stats[s[0]]; return '<label class="bs-f">' + E(s[1]) + '<input data-st="' + s[0] + '" id="bs-st-' + s[0] + '" type="number" step="any" inputmode="decimal" placeholder="' + E(fmt(s[0], s[2])) + '" value="' + E(v == null ? '' : v) + '"></label>'; }).join('') + '</div>' +
        '<div class="bs-ct" style="margin-top:4px"><span>Artifact</span></div>' +
        '<div class="bs-grid"><label class="bs-f" style="grid-column:1/-1">Artifact<select id="bs-art"><option value="">None</option>' + arts.map(function (a) { return '<option value="' + E(a.n) + '"' + (c.artifact.name === a.n ? ' selected' : '') + '>' + E(a.n) + (S.artifactsCoded().indexOf(a.n) >= 0 ? '' : ' (stats only)') + '</option>'; }).join('') + '</select></label>' +
        '<label class="bs-f">Level (0-20)<input id="bs-artlv" type="number" min="0" max="20" inputmode="numeric" value="' + E(c.artifact.level == null ? 20 : c.artifact.level) + '"></label>' +
        '<label class="bs-f">Effect stars (1-6)<input id="bs-arttier" type="number" min="1" max="6" inputmode="numeric" value="' + E((+c.artifact.tier || 0) + 1) + '"></label></div>' +
        '<div class="bs-ct" style="margin-top:4px"><span>Gear sets</span><span class="r">Season 1 sets only</span></div>' +
        '<div class="bs-grid">' + SLOTS.map(function (sl) { return '<label class="bs-f">' + sl + '<select data-gear="' + sl + '" id="bs-g-' + sl + '">' + setOptions(c.gear[sl]) + '</select></label>'; }).join('') + '</div>' +
        '<div class="bs-small" id="bs-setsum"></div>';
      var s = sheet(html, function (e) {
        var t = e.target;
        if (e.type === 'click') {
          var b = t.closest('[data-h]'); if (!b) return;
          if (b.dataset.h === 'shot') return;
          if (b.dataset.h === 'cap') { state.captain = i; b.setAttribute('aria-pressed', 'true'); save(); render(); }
          else if (b.dataset.h === 'clear') { c.stats = {}; s.querySelectorAll('[data-st]').forEach(function (n) { n.value = ''; }); save(); render(); }
          else if (b.dataset.h === 'swap') pickSheet(i);
          return;
        }
        if (t.dataset.st) c.stats[t.dataset.st] = t.value === '' ? '' : +t.value;
        else if (t.dataset.gear) c.gear[t.dataset.gear] = t.value;
        else if (t.id === 'bs-lv') c.level = Math.max(1, Math.min(100, +t.value || state.level));
        else if (t.id === 'bs-stars') c.stars = t.value === '' ? null : Math.max(1, Math.min(5, +t.value));
        else if (t.id === 'bs-skb' || t.id === 'bs-sku') { c.skills = c.skills || {}; c.skills[t.id === 'bs-skb' ? 'battle' : 'ult'] = Math.max(1, Math.min(5, Math.round(+t.value) || 1)); }
        else if (t.id === 'bs-shot' && e.type === 'change' && t.files && t.files.length) { readShots([].slice.call(t.files), i); t.value = ''; return; }
        else if (t.id === 'bs-art') c.artifact.name = t.value;
        else if (t.id === 'bs-artlv') c.artifact.level = Math.max(0, Math.min(20, +t.value));
        else if (t.id === 'bs-arttier') c.artifact.tier = Math.max(0, Math.min(5, (+t.value || 1) - 1));
        setSum(); save();
        if (e.type === 'change') render();
      });
      s.dataset.hero = i;
      wireShotZone(s, i);
      function setSum() {
        var cnt = {}; SLOTS.forEach(function (sl) { var n = c.gear[sl]; if (n) cnt[n] = (cnt[n] || 0) + 1; });
        var lines = Object.keys(cnt).map(function (n) {
          var st = S.setByName(n), need = st.r === 'Mythic' ? 1 : 3, on = cnt[n] >= need && (st.spell);
          return E(n) + ' ×' + cnt[n] + (st.spell ? (on ? ' · effect on' + (S.setsCoded().indexOf(st.n) < 0 ? ' (not simulated)' : '') : ' · effect needs ' + need) : '');
        });
        var el2 = s.querySelector('#bs-setsum'); if (el2) el2.innerHTML = lines.join('<br>');
      }
      setSum();
    }
    // ------------------------------------------------------- screenshots --
    // A screenshot of a hero screen (attributes, gear, artifact or skills)
    // is read by Claude through the host (artifact `sample` capability with
    // images) and fills the fields it shows. Paste (Ctrl+V), drop or choose.
    var vision = { ok: false };
    if (host.vision && host.vision.ready) Promise.resolve(host.vision.ready).then(function (ok) { vision.ok = !!ok; if (ok && sh && sh.querySelector('.bs-drop')) sh.querySelector('.bs-drop').hidden = false; }, function () { });
    function shotZone() {
      return '<div class="bs-drop" id="bs-drop"' + (vision.ok ? '' : ' hidden') + '><b style="color:var(--label)">Fill from a screenshot</b>' +
        '<span class="bs-small">Paste (Ctrl+V), drop or choose screenshots of this hero\'s screens: attributes, gear, artifact, skills. Each fills what it shows; check the numbers after.</span>' +
        '<label class="bs-btn pri" data-h="shot">Choose screenshots<input type="file" id="bs-shot" accept="image/*" multiple hidden></label><span class="bs-small" id="bs-shotmsg" role="status"></span></div>';
    }
    function wireShotZone(s, i) {
      var z = s.querySelector('#bs-drop'); if (!z) return;
      z.addEventListener('dragover', function (e) { e.preventDefault(); z.classList.add('on'); });
      z.addEventListener('dragleave', function () { z.classList.remove('on'); });
      z.addEventListener('drop', function (e) {
        e.preventDefault(); z.classList.remove('on');
        var f = [].slice.call(e.dataTransfer.files || []).filter(function (x) { return /^image\//.test(x.type); });
        if (f.length) readShots(f, i);
      });
    }
    function imagesFrom(ev) {
      var items = (ev.clipboardData && ev.clipboardData.items) || [], out = [];
      for (var j = 0; j < items.length; j++) if (items[j].kind === 'file' && /^image\//.test(items[j].type)) { var f = items[j].getAsFile(); if (f) out.push(f); }
      return out;
    }
    // Paste anywhere: inside a hero sheet it fills that hero; on the main
    // screen the screenshot says which hero it is.
    var onPaste = function (ev) {
      if (!root.isConnected) { document.removeEventListener('paste', onPaste); return; }
      var imgs = imagesFrom(ev); if (!imgs.length) return;
      if (!vision.ok) return;
      ev.preventDefault();
      var hs = sh && sh.querySelector('#bs-drop');
      readShots(imgs, hs ? +sh.dataset.hero : null);
    };
    document.addEventListener('paste', onPaste);

    function shrink(blob) {
      // Phones and 4K screens make big files; 1600 px on the long side keeps every number readable.
      return new Promise(function (res) {
        if (!window.createImageBitmap) return res(blob);
        createImageBitmap(blob).then(function (bm) {
          var m = Math.max(bm.width, bm.height), f = m > 1600 ? 1600 / m : 1;
          if (f === 1 && blob.size < 3e6) return res(blob);
          var c = document.createElement('canvas'); c.width = Math.round(bm.width * f); c.height = Math.round(bm.height * f);
          c.getContext('2d').drawImage(bm, 0, 0, c.width, c.height);
          c.toBlob(function (b) { res(b || blob); }, 'image/jpeg', 0.9);
        }, function () { res(blob); });
      });
    }
    function shotPrompt() {
      var D = S.data();
      var arts = Object.keys(D.artifacts).map(function (x) { return D.artifacts[x]; }).filter(function (a) { return a.season === 's1'; }).map(function (a) { return a.n; });
      var heroes = Object.keys(D.heroes).map(function (x) { return D.heroes[x].n; });
      return 'This is a screenshot from the game Dragonheir: Silent Gods (a hero screen: attributes, gear, artifact or skills). Read ONLY what is visible; never guess. ' +
        'Answer with one JSON object, leaving out any key you cannot read:\n' +
        '{"hero": exact hero name, "level": number, "stars": 1-5, ' +
        '"stats": {"hp", "atk", "def", "critRate" (percent number, 35.5 for 35.5%), "critDmg" (percent), "acc" (Accuracy / Effect Hit), "res" (Resistance), "ench" (Enlightenment), "haste" (Skill Haste), "atkSpd" (Attack Speed percent; NOT "ATK Interval", which is seconds: leave atkSpd out if only ATK Interval is shown)}, ' +
        '"artifact": {"name" (ONLY if the artifact name is written as text on the screen; never name it from its icon), "level" (enhancement +0..+20, e.g. "+12" -> 12), "stars" (effect stars 1-6)}, ' +
        '"gear": {"Helm": set name, "Weapon": set name, "Armor": set name, "Gloves": set name}, ' +
        '"skills": {"battle": battle skill level 1-5, "ult": ultimate skill level 1-5}}\n' +
        'The attribute screen often shows each stat as a base number followed by a green "+bonus" number (for example "HP 13489 +8610"). Then give that stat as {"base": 13489, "bonus": 8610}; give a plain number only when a single value is shown. Never add them yourself and never drop the bonus. A stat shown as 0 is 0. Skill levels: read the small level number on each skill icon; the first active skill is "battle", the ultimate is "ult". Set names (the screen may show the name in brackets instead): ' + S.BEGINNER_SETS.map(function (n) { var a = (S.SET_ALIASES || {})[n]; return a && a.length ? n + ' (' + a.join(', ') + ')' : n; }).join('; ') + '.\nArtifact names: ' + arts.join('; ') + '.\nHero names: ' + heroes.join('; ') + '.';
    }
    function norm(x) { return String(x || '').toLowerCase().replace(/[^a-z0-9]/g, ''); }
    function matchName(name, list) {
      var n = norm(name); if (!n) return null;
      var hit = list.filter(function (x) { return norm(x) === n; })[0];
      if (!hit) hit = list.filter(function (x) { var m = norm(x); return m && (m.indexOf(n) >= 0 || n.indexOf(m) >= 0); })[0];
      return hit || null;
    }
    // Gear screens may show the set family or piece name ("Mountain Echo:
    // Gloves") instead of the effect name; S.SET_ALIASES maps them back.
    function matchSet(name) {
      var A = S.SET_ALIASES || {}, n = norm(String(name || '').split(':')[0]);
      if (!n) return null;
      var exact = S.BEGINNER_SETS.filter(function (x) { return norm(x) === n; })[0];
      if (exact) return exact;
      for (var c in A) if (A[c].some(function (a) { return norm(a) === n; })) return c;
      return matchName(name, S.BEGINNER_SETS);
    }
    // Apply what one screenshot shows; returns the field names it filled.
    function applyShot(id, js) {
      var c = state.heroes[id] = state.heroes[id] || {}, got = [];
      c.stats = c.stats || {}; c.gear = c.gear || {}; c.artifact = c.artifact || {};
      // A stat may come back as {base, bonus} (the attribute screen shows "13489 +8610") or as one number.
      var one = function (v) { v = typeof v === 'string' ? +v.replace(/[%,\s+]/g, '') : +v; return isFinite(v) ? v : null; };
      var num = function (v) {
        if (v && typeof v === 'object') { var b = one(v.base), x = one(v.bonus); if (b == null && x == null) return one(v.total); return Math.round(((b || 0) + (x || 0)) * 10) / 10; }
        if (typeof v === 'string' && /\d[\s%]*\+\s*\d/.test(v)) return v.split('+').reduce(function (a, p) { var q = one(p); return q == null ? a : a + q; }, 0);
        return one(v);
      };
      if (num(js.level)) { c.level = Math.max(1, Math.min(100, num(js.level))); got.push('level'); }
      if (num(js.stars)) { c.stars = Math.max(1, Math.min(5, num(js.stars))); got.push('stars'); }
      if (js.stats) STATS.forEach(function (st) { var v = num(js.stats[st[0]]); if (v != null) { c.stats[st[0]] = v; got.push(st[0]); } });
      if (js.artifact && typeof js.artifact === 'object') {
        var D = S.data(), an = js.artifact.name && matchName(js.artifact.name, Object.keys(D.artifacts).map(function (x) { return D.artifacts[x].n; }));
        if (an) { c.artifact.name = an; got.push('artifact'); }
        else if (c.artifact.name && (num(js.artifact.level) != null || num(js.artifact.stars))) got.push('artcheck'); // level read, name not: the kept name may be wrong
        // Level and stars only change the artifact the hero already has (or the one just read).
        if (c.artifact.name && num(js.artifact.level) != null) { c.artifact.level = Math.max(0, Math.min(20, num(js.artifact.level))); got.push('artlv'); }
        if (c.artifact.name && num(js.artifact.stars)) { c.artifact.tier = Math.max(0, Math.min(5, num(js.artifact.stars) - 1)); got.push('arttier'); }
      }
      if (js.gear) SLOTS.forEach(function (sl) { var n = matchSet(js.gear[sl]); if (n) { c.gear[sl] = n; got.push(sl); } });
      if (js.skills) ['battle', 'ult'].forEach(function (k2) { var v = num(js.skills[k2]); if (v) { c.skills = c.skills || {}; c.skills[k2] = Math.max(1, Math.min(5, Math.round(v))); got.push(k2 === 'battle' ? 'skb' : 'sku'); } });
      return got;
    }
    async function readShots(files, slot) {
      var msg = function (t) { var m = sh && sh.querySelector('#bs-shotmsg'); if (m) m.textContent = t; };
      if (!vision.ok) return;
      msg('Reading ' + files.length + ' screenshot' + (files.length > 1 ? 's' : '') + '…');
      var filled = [], who = null;
      for (var j = 0; j < files.length; j++) {
        var js;
        try { js = await host.vision.read(shotPrompt(), await shrink(files[j])); }
        catch (e) {
          var why = { not_granted: 'Claude was not allowed to read images on this page.', rate_limited: 'Too many requests, try again in a minute.', images_unavailable: 'Reading images is not available here.', image_rejected: 'This image could not be read (type or size).' }[e && e.code] || 'Could not read the screenshot.';
          msg(why); return;
        }
        if (!js || typeof js !== 'object') continue;
        var id = slot != null ? state.team[slot] : null;
        if (id == null) {
          var hn = matchName(js.hero, Object.keys(S.data().heroes).map(function (x) { return S.data().heroes[x].n; }));
          var h = hn && heroOf(hn);
          if (!h) { shotSheet('The screenshot does not show a hero name. Open the hero in your team and paste it there.'); return; }
          if (state.team.indexOf(h.id) < 0) { shotSheet(h.n + ' is not in your team. Put the hero in a slot first (tap a hero, then Change hero), then paste again.'); return; }
          slot = state.team.indexOf(h.id); id = h.id;
        }
        who = id;
        filled = filled.concat(applyShot(id, js));
      }
      save(); render();
      if (who == null) { msg('Nothing readable found.'); return; }
      heroSheet(slot); // always redraw so the inputs show the new values
      var check = filled.indexOf('artcheck') >= 0, artN = sh && sh.querySelector('#bs-art');
      filled = filled.filter(function (f) { return f !== 'artcheck'; });
      if (check && artN) artN.classList.add('bs-check');
      filled.forEach(function (f) {
        var n = sh && (sh.querySelector('#bs-st-' + f) || sh.querySelector('#bs-g-' + f) || sh.querySelector(f === 'level' ? '#bs-lv' : f === 'stars' ? '#bs-stars' : f === 'artifact' ? '#bs-art' : f === 'artlv' ? '#bs-artlv' : f === 'arttier' ? '#bs-arttier' : f === 'skb' ? '#bs-skb' : f === 'sku' ? '#bs-sku' : null));
        if (n) n.classList.add('bs-filled');
      });
      var m2 = sh && sh.querySelector('#bs-shotmsg');
      if (m2) m2.textContent = filled.length ? 'Filled ' + filled.length + ' fields (green). Check them against the game.' + (check ? ' The artifact name is not written on this screenshot: check the artifact (amber).' : '') : 'Nothing readable found on this screenshot.';
    }
    function shotSheet(t) { sheet('<div class="hd"><h3>Screenshot</h3><button class="x" data-a="close" aria-label="Close">×</button></div><p class="bs-muted" style="margin:0">' + E(t) + '</p>'); }

    function pickSheet(i) {
      var owned = host.owned && host.owned.length ? host.owned : null;
      var ids = Object.keys(S.kits()).map(Number).filter(function (id) { return heroOf(id) && (!owned || owned.indexOf(id) >= 0 || owned.indexOf(String(id)) >= 0); })
        .sort(function (a, b) { var ha = heroOf(a), hb = heroOf(b); return (ha.r === hb.r ? 0 : ha.r === 'Legendary' ? -1 : 1) || ha.n.localeCompare(hb.n); });
      sheet('<div class="hd"><h3>Choose a hero</h3><button class="x" data-a="close" aria-label="Close">×</button></div><div class="bs-pick">' +
        ids.map(function (id) { var h = heroOf(id); return '<button data-pick="' + id + '" aria-pressed="' + (state.team[i] === id) + '">' + avatar(id) + '<span>' + E(h.n) + '</span></button>'; }).join('') + '</div>' +
        '<div class="bs-small">Heroes with a hand-checked skill kit.</div>', function (e) {
        var b = e.type === 'click' && e.target.closest('[data-pick]'); if (!b) return;
        var id = +b.dataset.pick, j = state.team.indexOf(id);
        if (j >= 0) state.team[j] = state.team[i];
        state.team[i] = id; save(); closeSheet(); render();
      });
    }
    function bossSheet() {
      var p = S.bosses()[state.boss];
      sheet('<div class="hd"><h3>' + E(p.name) + '</h3><button class="x" data-a="close" aria-label="Close">×</button></div>' +
        '<div class="bs-small">' + E(p.dungeon || '') + (p.altName ? ' (' + E(p.altName) + ')' : '') + ' · ' + E(p.farm || '') + ' · one skill every ' + (state.boss === 'vortex' ? 5 : 6) + ' s</div>' +
        (p.skills || []).map(function (s) { return '<div class="bs-skill"><b>' + E(s.name) + '</b><span class="t">Hits: ' + E(s.targetText) + '</span><span class="d">' + E(s.text) + '</span></div>'; }).join('') +
        (p.mechanics ? '<div class="bs-skill"><b>Passive</b>' + p.mechanics.map(function (m) { return '<span class="d">' + E(m) + '</span>'; }).join('') + '</div>' : '') +
        '<div class="bs-note">' + E(p.note) + '</div>');
    }
    function moreSheet() {
      sheet('<div class="hd"><h3>Fight settings</h3><button class="x" data-a="close" aria-label="Close">×</button></div><div class="bs-grid">' +
        '<label class="bs-f">Fights<select id="bs-runs">' + [100, 200, 500].map(function (n) { return '<option' + (state.runs === n ? ' selected' : '') + '>' + n + '</option>'; }).join('') + '</select></label>' +
        '<label class="bs-f">Time limit (s)<input id="bs-sec" type="number" min="30" max="600" inputmode="numeric" value="' + state.seconds + '"></label>' +
        '<label class="bs-f">Default hero level<input id="bs-dlv" type="number" min="1" max="100" inputmode="numeric" value="' + state.level + '"></label></div>' +
        '<div class="bs-small">More fights = steadier numbers, a bit slower. Goblin Lair (120 s) and Temporal Vortex (8 min) use their own limit.</div>' +
        '<div class="bs-ct"><span>Boss estimate</span></div><div class="bs-seg" role="group" aria-label="Boss estimate">' + ESTIMATE.map(function (x) { return '<button data-est="' + x[1] + '" aria-pressed="' + (state.strength === x[1]) + '">' + x[0] + '</button>'; }).join('') + '</div>' +
        '<div class="bs-small">The game never shows boss HP and damage, so these are our estimate. If your real fights go better or worse than the simulator, move this. It is not the game\'s difficulty: pick the stage on the main screen for that.</div>' +
        '<div class="bs-ct"><span>Your saved heroes</span></div><div class="bs-row"><label class="bs-btn">Import account JSON<input type="file" accept=".json,application/json" id="bs-imp" hidden></label><button class="bs-btn" data-h="copy">Copy my setup</button></div><div class="bs-small" id="bs-impmsg"></div>',
        function (e) {
          var t = e.target;
          if (e.type === 'click') {
            var est = t.closest('[data-est]');
            if (est) { state.strength = +est.dataset.est; est.parentNode.querySelectorAll('button').forEach(function (b) { b.setAttribute('aria-pressed', b === est); }); save(); render(); return; }
            if (t.closest('[data-h="copy"]')) {
              var txt = JSON.stringify(state);
              var msg = sh.querySelector('#bs-impmsg');
              if (navigator.clipboard) navigator.clipboard.writeText(txt).then(function () { msg.textContent = 'Copied.'; }, function () { msg.textContent = txt; });
              else msg.textContent = txt;
            }
            return;
          }
          if (t.id === 'bs-runs') state.runs = +t.value;
          else if (t.id === 'bs-sec') state.seconds = Math.max(30, Math.min(600, +t.value || 180));
          else if (t.id === 'bs-dlv') state.level = Math.max(1, Math.min(100, +t.value || 59));
          else if (t.id === 'bs-imp' && e.type === 'change' && t.files[0]) {
            var rd = new FileReader();
            rd.onload = function () {
              var msg = sh && sh.querySelector('#bs-impmsg');
              try {
                var js = JSON.parse(rd.result);
                if (js.team && js.heroes) { state = Object.assign(blankState(host), js); if (msg) msg.textContent = 'Setup loaded.'; }
                else {
                  var m = S.survival.fromAccount(js), n = 0;
                  Object.keys(m).forEach(function (id) {
                    var sp = m[id], c = state.heroes[id] = state.heroes[id] || {};
                    c.level = sp.level; if (sp.stars) c.stars = sp.stars;
                    if (sp.stats) { c.stats = {}; STATS.forEach(function (s) { if (sp.stats[s[0]] != null) c.stats[s[0]] = +(sp.stats[s[0]] * s[2]).toFixed(2); }); }
                    if (sp.artifact) c.artifact = sp.artifact;
                    if (sp.sets) { c.gear = {}; var sl = 0; sp.sets.forEach(function (x) { for (var q = 0; q < x.pieces && sl < 4; q++) c.gear[SLOTS[sl++]] = x.name; }); }
                    n++;
                  });
                  if (msg) msg.textContent = 'Imported ' + n + ' heroes.';
                }
                save(); render();
              } catch (err) { if (msg) msg.textContent = 'Could not read this file: ' + err.message; }
            };
            rd.readAsText(t.files[0]);
            return;
          }
          save(); if (e.type === 'change') render();
        });
    }
    function honestySheet() {
      var rows = [
        ['var(--good)', 'Official game data', 'Hero stats, skill numbers and chances, artifact and set texts, captain auras.'],
        ['var(--good)', 'Sourced rules', 'Skill charge times, Skill Haste, Accuracy vs Resistance (a 75% debuff can still miss), status values, Frost 5-stack burst, Support bond shields.'],
        ['var(--warn)', 'Estimated', 'Boss HP, damage and skill sizes (never published), how much each stage adds (from official boss levels), the Domain element penalty, the Defense curve, cast times, gear when you leave stats empty.'],
        ['var(--accent)', 'Checked against your fights', 'Temporal Vortex (Sea King), Difficulty I, Lv59, 5 of your real fights. Total score: Ice team 5.53M (sim 5.37M), Ice team with Lossenia 6.40M (sim 6.2M), Poison team 3.76M (sim 3.9M), Poison + Felosia 3.56M (sim 3.45M), Poison + Hvitar 4.59M (sim 4.7M). The boss and the Poison rate were tuned on the first and third; the others were checks without changes. "Taken" counts HP lost and "Healed" includes shields that blocked damage, like the game screen. Per hero is rougher: Twitch about 25% low, Durango about 15% high, Hvitar 15% low in a full Ice team and 15% high alone. Other difficulties are estimates.'],
        ['var(--warn)', 'Skill levels', 'Common pattern from game tooltips: Battle skill Lv2 +5% damage, Lv3 +10%, Lv4 +25% effect chance, Lv5 3 s faster; Ultimate Lv2 +10% damage, Lv3 +25% chance, Lv4 3 s faster, Lv5 +10% damage. Some heroes upgrade differently.'],
        ['var(--label-3)', 'How to use it', 'Compare teams and setups on equal terms. Typing your real stats makes your side exact; the boss side stays an estimate until we calibrate it from one of your fight statistics screens.']
      ];
      sheet('<div class="hd"><h3>How accurate is this?</h3><button class="x" data-a="close" aria-label="Close">×</button></div><div class="bs-conf">' +
        rows.map(function (r) { return '<span class="bs-dot" style="background:' + r[0] + '"></span><div><b>' + E(r[1]) + '</b><div class="bs-muted">' + E(r[2]) + '</div></div>'; }).join('') + '</div>' +
        '<div class="bs-small">Simulator v' + E(S.VERSION) + '. Every fight rolls crits, debuff chances and boss targets again, so 200 fights show the real spread.</div>');
    }
    // A host whose storage answers late (artifact db) hands the saved setup over here.
    function setState(v) { if (v && v.team) { state = Object.assign(blankState(host), v); render(); } }
    return { rerender: render, state: function () { return state; }, setState: setState };
  }

  root.DHBattleUI = { mount: mount, KEY: KEY };
})(typeof window !== 'undefined' ? window : globalThis);
