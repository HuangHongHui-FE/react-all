// 1、介绍
// type T = 'a'|'b'|'c';
// let foo = 'a';

// let bar:T = foo; // 报错
// let bar:T = foo as T;

// 2、两种写法
// 语法一：<类型>值
// <Type>value

// 语法二：值 as 类型
// value as Type

// 3、
// const p:{ x: number } = { x: 0, y: 0 };  // 报错

// const p: { x: number } = { x: 10, y: 10 } as { x: number };
const p: { x: number } = { x: 10, y: 10 } as { x: number; y: number };

// 4、
// 指定 unknown 类型的变量的具体类型。
const value: unknown = "Hello World";
const s1: string = value; // 报错
const s2: string = value as string; // 正确
// unknown 类型的变量value不能直接赋值给其他类型的变量，但是可以将它断言为其他类型，这样就可以赋值给别的变量了。

// 5、as const
// 类型推断为基本类型 string
let s1 = "JavaScript";
// 类型推断为字符串 “JavaScript”
const s2 = "JavaScript";

let s = "JavaScript" as const;
s = "Python"; // 报错

// as const断言只能用于字面量，不能用于变量。
let s = "JavaScript";
setLang(s as const); // 报错
// 上面示例中，as const断言用于变量s，就报错了。下面的写法可以更清晰地看出这一点。
let s1 = "JavaScript";
let s2 = s1 as const; // 报错

// 6、
function add(x: number, y: number) {
  return x + y;
}

// const nums = [1, 2];
// const total = add(...nums); // 报错
// nums的类型推断为number[]，因为add()只能接受两个参数，而...nums并不能保证参数的个数。
// 对于固定参数个数的函数，如果传入的参数包含扩展运算符，那么扩展运算符只能用于元组。只有当函数定义使用了 rest 参数，扩展运算符才能用于数组。
const nums = [1, 2] as const;
const total = add(...nums); // 正确

// 7、非空断言
// demo
const root = document.getElementById("root")!;
root.addEventListener("click", (e) => {
  /* ... */
});

// 规范写法
const root = document.getElementById("root");
if (root === null) {
  throw new Error("Unable to find DOM element #root");
}
root.addEventListener("click", (e) => {
  /* ... */
});

// 非空断言只有在打开编译选项strictNullChecks时才有意义。如果不打开这个选项，编译器就不会检查某个变量是否可能为undefined或null。

// 7、断言函数
// 老写法
// function isString(value: unknown): void {
//   if (typeof value !== "string") throw new Error("Not a string");
// }

// function toUpper(x: string | number) {
//   isString(x);
//   return x.toUpperCase();
// }

// 新写法
// function isString(value: unknown): asserts value is string {
//   if (typeof value !== "string") throw new Error("Not a string");
// }
// isString()的返回值类型写成asserts value is string，其中asserts和is都是关键词，value是函数的参数名，string是函数参数的预期类型。
// 用来断言参数value的类型是string，如果达不到要求，程序就会在这里中断。
// 使用了断言函数的新写法以后，TypeScript 就会自动识别，只要执行了该函数，对应的变量都为断言的类型。

// 8、
// 如果要断言参数非空，可以使用工具类型NonNullable<T>。
// function assertIsDefined<T>(value: T): asserts value is NonNullable<T> {
//   if (value === undefined || value === null) {
    // throw new Error(`${value} is not defined`);
//   }
// }
// 上面示例中，工具类型NonNullable<T>对应类型T去除空类型后的剩余类型。


// 9、断言函数用于函数表达式，可以采用下面的写法。

// 写法一
const assertIsNumber = (
  value:unknown
):asserts value is number => {
  if (typeof value !== 'number')
    throw Error('Not a number');
};

// 写法二
type AssertIsNumber =
  (value:unknown) => asserts value is number;

const assertIsNumber:AssertIsNumber = (value) => {
  if (typeof value !== 'number')
    throw Error('Not a number');
};