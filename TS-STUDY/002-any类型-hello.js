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
var v = 123;
var v1 = v;
