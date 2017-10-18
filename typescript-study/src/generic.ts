// 泛型函数
function hello<T>(name: T): T {
    console.log(name);
    return name;
}

// 泛型类
class MyClass<T> {
    public name: T;

    public printName() {
        console.log(name);
    }
}

// 泛型约束
interface IHello {
    sayHello(): void;
}

class SayHello<T extends IHello> {
    constructor(private hello: IHello) {

    }

    public sayHello() {
        this.hello.sayHello();
    }
}
