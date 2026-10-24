// Loads the simulator in Node: engine, official data, kits, items, enemies.
var S = require('./sim.js');
globalThis.DHSim = S;
S.setData(require('./data/sim-data.js'));
require('./kits.js');
require('./items.js');
require('./enemies.js');
module.exports = S;
