//单行注释
/*多行注释*/

//数据类型：数字、字符串和布尔值
var i = 12;
var trueValue = true;
var falseValue = false;
var str = '123';
var str2 = "456";
console.log(i, trueValue, falseValue, str, str2);

//数组
var array1 = new Array(1, 2, 3);
var array2 = [4, 5, 6];
var array3 = [];
array3[0] = 1;
array3[1] = 2;
console.log(array1, array2, array3);

//对象
var obj = {name: 'yitian', age: 22};
console.log(obj);

//空值
obj = null;
console.log(obj);

//全局对象

globleObj = "This is global";
console.log(globleObj);

//三元运算符
var value = str == null ? "hehe" : str;
console.log(value);


//条件语句
var condition = true;
if (condition) {
    console.log("真值")
} else {
    condition.log("假值");
}

//switch语句
var v = 5;
switch (v) {
    case 1:
        console.log("它是1");
        break;
    case 2:
    case 3:
    case 4:
        console.log("它在2-4之间");
        break;
    default:
        console.log("它是其他值");
}
//循环语句
var i = 1;
while (i <= 10) {
    console.log(i);
    i++;
}

//for循环
for (var it = 1; i <= 5; ++i) {
    console.log("i=" + it);
}

// for-loop循环
var array = [1, 2, 3, 4];
for (var it in array) {
    console.log("i=" + it);
}
//函数，函数返回值有没有都行

//求阶乘
function factorial(n) {
    if (n == 0 || n == 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}
console.log(factorial(5));

//字符串
str = "12345678";
console.log(str.length);

//正则表达式
var pattern = /test/i;
var text = "This is a test";
console.log(text.search(pattern));
