// 1、js八种类型
// number
// string
// boolean
// object
// symbol
// bigint
// undefined
// null
// 2、ts的类型
// const x: boolean = false;
// const x:boolean = true
// const num: number = 123;
// 报错
// number类型不能赋值给5
// const x:5 = 4 + 1;
// const str: string = '123';
// const bi: bigint = 123n;
// tsc 003-系统类型-helo.ts --target es2021
// 报错
// const bi: bigint = 123
// const x: symbol = Symbol();
// const obj: object = { a: 1 };
// const obj: object = [22334, 112]
// const ud: undefined = undefined;
// const nl: null = null;
// 3、包装对象
// 3.1
// boolean
// string
// number
// bigint
// symbol
// 3.2
// String()只有当作构造函数使用时（即带有new命令调用），才会返回包装对象。
// 如果当作普通函数使用（不带有new命令），返回就是一个普通字符串
// const s = new String('hello');
// typeof s; // 'object'
// s.charAt(1); // 'e'
// 3.3 包装对象类型、字面量类型
// 'hello' 字面量
// new String('hello') 包装对象
// 3.4 ts类型大小写区别
// const s1:String = 'hello';
// const s2:String = new String('hello');
// const s3:string = 'hello';
// // 错误
// const s4:string = new String('hello');
// const n1:number = 1;
// const n2:Number = 1;
// Math.abs(n1) // 1
// Math.abs(n2) // 报错
// 4、 Object 类型与 object 类型
// 4.1
// let obj:Object;
// obj = true;
// obj = 'hi';
// obj = 1;
// obj = { foo: 123 };
// obj = [1, 2];
// obj = (a:number) => a + 1;
// // 报错
// obj = null
// // 报错
// obj = undefined
// 4.2
// let obj:object;
// obj = { foo: 123 };
// obj = [1, 2];
// obj = (a:number) => a + 1;
// obj = true; // 报错
// obj = 'hi'; // 报错
// obj = 1; // 报错
// 5、undefined 和 null 的特殊性
// let age:number = 24;
// age = null;
// age = undefined;
// 6、联合类型
let x;
x = '123';
x = 123;
