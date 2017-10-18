// 命名函数
function hi(name: string) {
    console.log(name);
}

// 匿名函数
const sayHi: (name: string) => void = function(name: string) {
    console.log(name);
};

// 默认参数
function fun1(p1: number, p2: number = 50) {

}

// 可选参数
function fun2(p1: number, p2?: number) {
    if (p2) {
        // 处理p2存在的情况
    }
    // 处理没有p2参数的情况
}

// 不定长参数
function fun3(any: any, ...rest: any[]) {
    console.log(any, rest);
}
