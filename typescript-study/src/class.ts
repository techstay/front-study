// TypeScript默认访问修饰符是public
class Person {
    private name: string;
    private age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    public sayHello() {
        console.log(`${name} say hello`);
    }
}

class Student extends Person {
    constructor(name: string, age: number) {
        super(name, age);
    }

    public sayHello() {
        console.log(`Student ${name} say hello`);
    }
}

// 在构造函数声明属性
class MyClass1 {
    constructor(public name: string,
                public age: number) {

    }
}

// 访问器
class MyClass2 {
    private _name: string;
    get name() {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }
}

// 静态属性
class MyClass3 {
    public static count = 0;

    constructor() {
        MyClass3.count++;
    }
}
