//数字没有整数小数之分，全部都是double类型

var i = 3.14;

console.log(typeof(i));

//8进制和16进制
var oct = 017;
var hex = 0xCAFE;
console.log(oct, hex);

var integer = 234;
console.log(integer.toString(8));
console.log(integer.toString(16));

//无穷大
var infinity = Infinity;
console.log(infinity);
console.log(typeof(infinity));

//非数字
var nan=NaN;
console.log(nan);
console.log(typeof(nan));