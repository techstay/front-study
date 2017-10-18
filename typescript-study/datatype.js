//Typescript基本数据类型
//布尔值
var boolValue = true;
boolValue = false;
//数值（浮点数）
var decimal = 10;
var octal = 15;
var binary = 5;
var hex = 0xcafe;
//字符串（单双引号均可）
var text = "some data";
text = 'some other data';
//字符串插值
var data = text + " is data";
//数组
var numbers = [1, 2, 3, 4, 5];
var names = ['Leo', 'Anna'];
//元组
var pair = [0, 0];
//枚举
var Gender;
(function (Gender) {
    Gender[Gender["Male"] = 1] = "Male";
    Gender[Gender["Female"] = 0] = "Female";
})(Gender || (Gender = {}));
var gender = Gender.Female;
//任意类型，和JavaScript动态类型匹配
var notSure = 10;
notSure = 'some string';
//空类型
//void除了用于函数返回值，可以用于声明变量，不过没用
var useless = null;
//never，当永远不可能返回的时候
function neverReturn() {
    throw new Error();
}
