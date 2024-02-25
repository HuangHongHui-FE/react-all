// 1、
// let arr:number[] = [1, 2, 3];
// let arr: (number | string)[] = [1, '1'];
// let arr: Array<number> = [1, 2, 3];
// let arr: Array<number | string> = [1, '1'];
// 2、类型推断
// 推断为 any[]
// const arr = [];
// const arr = [];
// arr // 推断为 any[]
// arr.push(123);
// arr // 推断类型为 number[]
// arr.push('abc');
// arr // 推断类型为 (string|number)[]
// 3、const 只读数组
// 删除、修改、新增数组成员都会报错。
// const arr:readonly number[] = [0, 1];
// readonly不能与数组的泛型一起用
var arr = [1, 23];
