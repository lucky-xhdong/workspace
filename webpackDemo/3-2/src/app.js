//es module
import sum from './sum';

//commonjs
var minus = require('./minus');

//amd:异步代码模块，所以当require时，muti会形成一个单独的chunk进来，所以打包时会有两个bundle.js
require(['./muti'], function (muti) {
    console.log('muti(2, 3) = ', muti(2, 3));
});

console.log('sum(23, 24) = ', sum(23, 24))
console.log('minus(24, 17) = ', minus(24, 17))

