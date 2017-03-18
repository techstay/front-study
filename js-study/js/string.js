//字符串长度

var str = "12345678";
console.log(str);
console.log(str.length);

//字符串操作
console.log(str.match(/234/));
console.log(str.indexOf("23"));
str = str.replace(/234/, "987");
console.log(str);


//大小写转换
var text = "abcde";
console.log(text.toUpperCase());

//拆分
text = "a b c d e";
var array = text.split(" ");
console.log(array);