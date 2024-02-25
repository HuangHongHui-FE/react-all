// 1、简介
// function hello(txt: string): void {
//   console.log(txt);
// }
// 写法1
// const hello = function (txt: string) {
//   console.log('hello', txt);
// };
// 写法2
// const hello: (txt: string) => void = function (txt) {
//   console.log(txt);
// };

// 会被认为any类型
// type MyFunc = (string, number) => number;
// (string: any, number: any) => number

// 实际常用
// type MyFunc = (txt: string) => void;
// const hello: MyFunc = function (txt) {
//   console.log('hello ' + txt);
// };

// typeof妙用
// function add(x: number, y: number) {
//   return x + y;
// }
// const myAdd: typeof add = function (x, y) {
//   return x + y;
// };

// 函数类型对象写法，
// let add: {
//   (x: number, y: number): number;
// };
// add = function (x, y) {
//   return x + y;
// };

// 适合这种
// function f(x: number) {
//   console.log(x);
// }
// f.version = '1.0';

// let f: {
//   (x: number): void;
//   version: string;
// };

// 接口
// interface myfn {
//   (a: number, b: number): number;
// }

// var add: myfn = (a, b) => a + b;

// 2、Function类型
// function fn(x: Function) {
//   return x(1);
// }

// 3、箭头函数
// const repeat = (str: string, times: number): string => str.repeat(times);

// function greet(fn: (a: string) => void): void {
//   fn('h');
// }

// type Person = { name: string };
// const people = ['a', 'b', 'c'].map((name): Person => ({ name }));

// 4、可选参数
// function f(x?: number) {
//   // ...
// }
// f();
// f(10);

// 前部参数有可能为空，这时只能显式注明该参数类型可能为undefined。
// let myFunc: (a: number | undefined, b: number) => number;

// 可选参数使用时要判断下
// let myFunc: (a: number, b?: number) => number;
// myFunc = function (x, y) {
//   if (y === undefined) {
//     return x;
//   }
//   return x + y;
// };

// 5、参数默认值
// function createPoint(x: number = 0, y: number = 0): [number, number] {
//   return [x, y];
// }
// createPoint(); // [0, 0]

// 设有默认值的参数，如果传入undefined，也会触发默认值。
// function f(x = 5) {
//   return x;
// }
// f2(undefined); // 5

// 6、参数结构
// type ABC = { a: number; b: number; c: number };

// function sum({ a, b, c }: ABC) {
//   console.log(a + b + c);
// }

// 7、rest参数
// function multiply(n: number, ...m: number[]) {
//   return m.map((x) => n * x);
// }

// function f(...args: [boolean, ...string[]]) {
//   // ...
// }

// 8、void
// function f(): void {
//   return undefined; // 正确
// }

// function f(): void {
//   return null; // 正确
// }

// 9、never 类型
// 函数不会正常执行结束
// function fail(msg: string): never {
//   throw new Error(msg);
// }

// 非never类型
// function fail(): Error {
//   return new Error('Something failed');
// }

// const sing = function (): never {
//   while (true) {
//     console.log('sing');
//   }
// };

// 使用
// function neverReturns(): never {
//   throw new Error();
// }
// function f(x: string | undefined) {
//   if (x === undefined) {
//     neverReturns();
//   }
//   x; // 推断为 string
// }

// 10、局部类型
// function hello(txt: string) {
//   type message = string;
//   let newTxt: message = 'hello ' + txt;
//   return newTxt;
// }
// const newTxt: message = hello('world'); // 报错

// 11、函数重载
// __todo

// 12、构造函数
// class Animal {
//   numLegs: number = 4;
// }
// type AnimalConstructor = new () => Animal;
// function create(c: AnimalConstructor): Animal {
//   return new c();
// }
// const a = create(Animal);

// 某些函数既是构造函数，又可以当作普通函数使用，比如Date()。这时，类型声明可以写成下面这样。
// type F = {
//   new (s: string): object;
//   (n?: number): number;
// };
