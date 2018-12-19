"use strict";

var a = 10;
var b = 20;
var val = Object.assign({
  a: '1'
}, {
  a: 'b'
});
console.log("".concat(a + b));
console.log(val);