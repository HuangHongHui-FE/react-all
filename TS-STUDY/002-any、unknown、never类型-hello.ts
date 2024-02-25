// 1、any
// let foo: any = 1;

// 不报错
// foo = 1;
// foo = 'hello';
// foo();
// foo.a = 1;



// 2、any - noImplicitAny
// 没有指定类型、TypeScript 必须自己推断类型的那些变量，如果无法推断出类型，TypeScript 就会认为该变量的类型是any
// function foo(a, b) {
//   return a + b;
// }

// 不报错
// foo(1, [1, 2, 3]);

// 不报错
// tsc 002-any类型-hello.ts

// 报错  推断出any类型就会报错
// tsc 002-any类型-hello.ts --noImplicitAny

// 但是这种也不会报错
// let x;
// x = 123;
// x = { foo: 'hello' };



// 3、any - 污染其他变量
// let string:any = '123';
// let num: number;

// // 不报错
// num = string
// // 不报错
// num * 3



// 4、unknown
// let x:unknown;
// x = 1;
// x = 'string';
// x = () => {}



// 5、unknown

let v:unknown = 123

// 报错 - 不能直接赋值给其他类型的变量（除了any类型和unknown类型）
// let v1:number = v;

// 报错 - 不能直接调用unknown类型变量的方法和属性。
// let v1:unknown = { foo: 123 };
// v1.foo  // 报错

// let v2:unknown = 'hello';
// v2.trim() // 报错

// let v3:unknown = (n = 0) => n + 1;
// v3() // 报错



// 6、never - 空集
// 不可能赋给x任何值，否则都会报错。
// let x:never;

// 参数多个类型，处理完后就剩never了
// function fn(x:string|number) {
//   if (typeof x === 'string') {
//     // ...
//   } else if (typeof x === 'number') {
//     // ...
//   } else {
//     x; // never 类型
//   }
// }

// 可以赋值给任意其他类型。
function f():never {
  throw new Error('Error');
}

let v1:number = f(); // 不报错
let v2:string = f(); // 不报错
let v3:boolean = f(); // 不报错


