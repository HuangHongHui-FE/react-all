// 1、简介
let x: symbol = Symbol();

// 2、unique symbol
// symbol的子类型
// 正确
const x:unique symbol = Symbol();
// 报错
let y:unique symbol = Symbol();