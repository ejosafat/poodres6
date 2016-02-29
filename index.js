require('babel-register');
const Gear = require('./ch02/Gear01');

console.log((new Gear(52, 11)).ratio());
console.log((new Gear(30, 27)).ratio());
