// tsc 001-hello.tsc
// tsc --noEmitOnError hello.ts
// 1、
// function greet(person, date) {
//   console.log(`Hello ${person}, today is ${date}!`);
// }
// greet('Brendan');
// 2、
function greet(person, date) {
    console.log("Hello ".concat(person, ", today is ").concat(date.toDateString(), "!"));
}
greet('Maddison', new Date());
// 3、
// let msg = "hello there!";

// 1、类型声明
// let foo: String;
// function toString(num: number): string {
//     return String(num)
// }
// 报错
// let foo: String = 123
// let foo: number;
// console.log(foo);

// 2、类型判断
// 报错
// let foo = 123;
// foo = '123';
// 函数返回值的类型通常是省略不写的
// function toString(num: number): string {
//     return String(num);
// }

// 3、TypeScript 的编译
// TypeScript 的类型检查只是编译时的类型检查，而不是运行时的类型检查

// 4、
// TypeScript 代码只涉及类型，不涉及值。所有跟“值”相关的处理，都由 JavaScript 完成。
// TypeScript 的编译过程，实际上就是把“类型代码”全部拿掉，只保留“值代码”。

// 5、ts在线编译链接
// https://www.typescriptlang.org/play?#code/PTAEHUFMBsGMHsC2lQBd5oBYoCoE8AHSAZVgCcBLA1UABWgEM8BzM+AVwDsATAGiwoBnUENANQAd0gAjQRVSQAUCEmYKsTKGYUAbpGF4OY0BoadYKdJMoL+gzAzIoz3UNEiPOofEVKVqAHSKymAAmkYI7NCuqGqcANag8ABmIjQUXrFOKBJMggBcISGgoAC0oACCbvCwDKgU8JkY7p7ehCTkVDQS2E6gnPCxGcwmZqDSTgzxxWWVoASMFmgYkAAeRJTInN3ymj4d-jSCeNsMq-wuoPaOltigAKoASgAywhK7SbGQZIIz5VWCFzSeCrZagNYbChbHaxUDcCjJZLfSDbExIAgUdxkUBIursJzCFJtXydajBBCcQQ0MwAUVWDEQC0gADVHBQGNJ3KAALygABEAAkYNAMOB4GRonzFBTBPB3AERcwABS0+mM9ysygc9wASmCKhwzQ8ZC8iHFzmB7BoXzcZmY7AYzEg-Fg0HUiQ58D0Ii8fLpDKZgj5SWxfPADlQAHJhAA5SASPlBFQAeS+ZHegmdWkgR1QjgUrmkeFATjNOmGWH0KAQiGhwkuNok4uiIgMHGxCyYrA4PCCJSAA

// 6、tsc命令
// tsc 001-基础知识-hello.ts
// tsc -h
// tsc -all
// tsc file1.ts file2.ts file3.ts
// tsc 001-基础知识-hello.ts 002-日常类型-hello --outFile app.js
