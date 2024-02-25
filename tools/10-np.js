// import NP from 'number-precision';
const NP = require('number-precision')
console.log(NP.divide(1000, 100));
console.log(NP.divide(1173958.8, 10**5));
NP.divide('10000', 100)