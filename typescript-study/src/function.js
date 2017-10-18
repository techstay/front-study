// 命名函数
function hi(name) {
    console.log(name);
}
// 匿名函数
var sayHi = function (name) {
    console.log(name);
};
// 默认参数
function fun1(p1, p2) {
    if (p2 === void 0) { p2 = 50; }
}
// 可选参数
function fun2(p1, p2) {
    if (p2) {
        // 处理p2存在的情况
    }
    // 处理没有p2参数的情况
}
// 不定长参数
function fun3(any) {
    var rest = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        rest[_i - 1] = arguments[_i];
    }
    console.log(any, rest);
}
//# sourceMappingURL=function.js.map