const assert = require('assert');
const { saluer } = require('./script.js'); 

assert.strictEqual(saluer('nada'), 'Bonjour nada !');
console.log('Test OK');
