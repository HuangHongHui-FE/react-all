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
var p = { x: 10, y: 10 };
