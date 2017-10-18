// 泛型函数
function hello(name) {
    console.log(name);
    return name;
}
// 泛型类
var MyClass = /** @class */ (function () {
    function MyClass() {
    }
    MyClass.prototype.printName = function () {
        console.log(name);
    };
    return MyClass;
}());
var SayHello = /** @class */ (function () {
    function SayHello(hello) {
        this.hello = hello;
    }
    SayHello.prototype.sayHello = function () {
        this.hello.sayHello();
    };
    return SayHello;
}());
//# sourceMappingURL=generic.js.map