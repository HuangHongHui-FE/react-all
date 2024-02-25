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
// const arr: readonly Array<number> = [1, 23];

// 可以这样用
// const a1:ReadonlyArray<number> = [0, 1];
// const a2:Readonly<number[]> = [0, 1];

// const 断言
// const arr = [0, 1] as const;
// arr[0] = [2]; // 报错
// 推断类型时把变量arr推断为只读数组，从而使得数组成员无法改变。

// 4、二维数组
var multi: number[][] = [
  [1, 2, 3],
  [23, 24, 25],
];
