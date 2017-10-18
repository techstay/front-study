var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// TypeScript默认访问修饰符是public
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.sayHello = function () {
        console.log(name + " say hello");
    };
    return Person;
}());
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(name, age) {
        return _super.call(this, name, age) || this;
    }
    Student.prototype.sayHello = function () {
        console.log("Student " + name + " say hello");
    };
    return Student;
}(Person));
// 在构造函数声明属性
var MyClass1 = /** @class */ (function () {
    function MyClass1(name, age) {
        this.name = name;
        this.age = age;
    }
    return MyClass1;
}());
// 访问器
var MyClass2 = /** @class */ (function () {
    function MyClass2() {
    }
    Object.defineProperty(MyClass2.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: true,
        configurable: true
    });
    return MyClass2;
}());
// 静态属性
var MyClass3 = /** @class */ (function () {
    function MyClass3() {
        MyClass3.count++;
    }
    MyClass3.count = 0;
    return MyClass3;
}());
//# sourceMappingURL=class.js.map