//Typescript基本数据类型

//布尔值
let boolValue: boolean = true;
boolValue = false;

//数值（浮点数）
let decimal: number = 10;
let octal: number = 0o17;
let binary: number = 0b0101;
let hex: number = 0xcafe;

//字符串（单双引号均可）
let text: string = "some data";
text = 'some other data';

//字符串插值
let data: string = `${text} is data`;

//数组
let numbers: number[] = [1, 2, 3, 4, 5];
let names: Array<string> = ['Leo', 'Anna'];

//元组
let pair: [number, number] = [0, 0];

//枚举
enum Gender {Male = 1, Female = 0}

let gender: Gender = Gender.Female;

//任意类型，和JavaScript动态类型匹配
let notSure: any = 10;
notSure = 'some string';

//空类型
//void除了用于函数返回值，可以用于声明变量，不过没用
let useless: void = null;

//never，当永远不可能返回的时候
function neverReturn(): never {
    throw new Error();
}
