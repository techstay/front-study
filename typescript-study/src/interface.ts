// 接口
interface IPerson {
    name: string;
    age: number;
}

interface IConfig {
    // 只读属性
    readonly name: string;
    // 可选属性
    location?: string;
}

// 函数类型
type IPrint = (any: any) => void;

let printInfo = function(any: any) {
    console.log(any);
};

// 索引类型
interface INameArray {
    [index: number]: string;
}

let arrays: INameArray = ['zhang3', 'li4'];

// 接口扩展
interface IColor {
    color: string;
}

interface IShape extends IColor {
}
