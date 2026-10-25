const { chromium } = require('playwright');
const path = require('path').join(__dirname, '../demo/battle-sim.html');
(async () => {
  const br = await chromium.launch();
  const pg = await br.newPage({ viewport: { width: 1100, height: 1400 } });
  const errs = []; pg.on('pageerror', e => errs.push(e.message));
  await pg.addInitScript(() => {
    window.__calls = [];
    const fake = { limits: async () => ({ images: { maxCount: 5 } }), json: async (p, o) => { window.__calls.push(p); return window.__answer; } };
    window.claude = { use: async (n) => n === 'sample' ? fake : null };
    // Oggok already in the team with OLD values, as on Darko's page
    localStorage.setItem('dhsim:sim/loadout', JSON.stringify({ team: [21700, 13022, 12914, 10666, 15537], captain: 0, heroes: { 21700: { stats: { hp: 15000, atk: 700 }, artifact: { name: 'Ring of Winter', level: 20, tier: 0 } } } }));
    // Answer in the shape the new prompt asks for (Oggok attribute screen: base + green bonus)
    window.__answer = { hero: 'Oggok', level: 59, stats: { hp: { base: 13489, bonus: 8610 }, atk: { base: 648, bonus: 326 }, def: { base: 568, bonus: 136 }, critRate: { base: 10, bonus: 31.4 }, critDmg: { base: 50, bonus: 17.3 }, acc: { base: 0, bonus: 73 }, res: '0 +36', ench: { base: 0, bonus: 72 }, haste: 0 }, artifact: { level: 12 } };
  });
  await pg.goto('file://' + path);
  await pg.waitForSelector('.bs-team');
  await pg.click('[data-a="hero"][data-i="0"]');
  await pg.waitForSelector('#bs-st-hp');
  await pg.evaluate(async () => {
    const c = document.createElement('canvas'); c.width = 40; c.height = 40; c.getContext('2d').fillRect(0, 0, 20, 20);
    const blob = await new Promise(r => c.toBlob(r, 'image/png'));
    const dt = new DataTransfer(); dt.items.add(new File([blob], 'oggok.png', { type: 'image/png' }));
    document.dispatchEvent(new ClipboardEvent('paste', { clipboardData: dt, bubbles: true }));
  });
  await pg.waitForTimeout(1500);
  const v = await pg.evaluate(() => { const q = id => { const n = document.querySelector(id); return n && n.value; }; return { hp: q('#bs-st-hp'), atk: q('#bs-st-atk'), def: q('#bs-st-def'), cr: q('#bs-st-critRate'), cd: q('#bs-st-critDmg'), acc: q('#bs-st-acc'), res: q('#bs-st-res'), ench: q('#bs-st-ench'), haste: q('#bs-st-haste'), lv: q('#bs-lv'), art: q('#bs-art'), artlv: q('#bs-artlv'), msg: document.querySelector('#bs-shotmsg').textContent, green: document.querySelectorAll('.bs-filled').length, bonusInPrompt: /bonus/.test(window.__calls[0] || '') }; });
  console.log(JSON.stringify(v));
  const exp = { hp: '22099', atk: '974', def: '704', cr: '41.4', cd: '67.3', acc: '73', res: '36', ench: '72', haste: '0', lv: '59', artlv: '12' };
  const bad = Object.keys(exp).filter(k => v[k] !== exp[k]);
  console.log(bad.length ? 'FAIL ' + bad.join(',') : 'PASS all values', 'errors', errs);
  await pg.screenshot({ path: 'oggok.png' });
  await br.close();
})();
