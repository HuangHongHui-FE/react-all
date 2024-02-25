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
// let x: string | number;
// x = '123'
// x = 123

// 也可以这样写
// let x:
//     |number
//     |string
//     |null
//     |undefined

// let name: string|null;
// x = 'join'
// x = null


// function printId(
//   id:number|string
// ) {
//   if (typeof id === 'string') {
//     console.log(id.toUpperCase());
//   } else {
//     console.log(id);
//   }
// }

// 7、交叉类型
// let x: number&string; // never

// let obj: {foo: number, str: string};
// obj = {
//     foo: 123,
//     str: '123'
// }

// 为对象类型添加新属性。
// let A = { foo: number }
// let B = A & { str: string }

// 8、type命令：定义类型的别名
// type Age = number;
// // type Age = string; // 报错
// let age: Age = 123

// // 别名允许嵌套。
// type A = '123'
// type B = `hello ${A}`

// 9、typeof运算符
// typeof undefined; // "undefined"
// typeof true; // "boolean"
// typeof 1337; // "number"
// typeof "foo"; // "string"
// typeof {}; // "object"
// typeof parseInt; // "function"
// typeof Symbol(); // "symbol"
// typeof 127n // "bigint"

// ts中的typeof: 该值的 TypeScript 类型。
const a = { x: 0 };
type T0 = typeof a;   // { x: number }
type T1 = typeof a.x; // number

// typeof 的参数只能是标识符，不能是需要运算的表达式。
type T = typeof Date(); // 报错

// typeof命令的参数不能是类型。
type Age = number;
type MyAge = typeof Age; // 报错


// 10、块级类型声明
if (true) {
  type T = number;
  let v:T = 5;
} else {
  type T = string;
  let v:T = 'hello';
}

// 11、 类型的兼容
// TypeScript 的类型存在兼容关系，某些类型可以兼容其他类型。
type T = number|string;
let a:number = 1;
let b:T = a;
// 上面示例中，变量a和b的类型是不一样的，但是变量a赋值给变量b并不会报错。这时，我们就认为，b的类型兼容a的类型。
