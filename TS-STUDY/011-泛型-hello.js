// 泛型的特点就是带有“类型参数”（type parameter）。
// 1、
// function getFirst<T>(arr: T[]): T {
//   return arr[0];
// }
// // 调用
// getFirst<number>([1, 2, 3]);
// 2、
// function fn<T>(a: T[], b: T[]): T[] {
//   return a.concat(b);
// }
// fn<number | string>(["a", "b"], [1, 2]);
// 3、不止可以用T
// function map<T, U>(arr: T[], f: (arg: T) => U): U[] {
//   return arr.map(f);
// }
// // 用法实例
// map<string, number>(["1", "2", "3"], (n) => parseInt(n)); // 返回 [1, 2, 3]
// 4、泛型的写法
// 1、函数写法
function fn(a) {
    return a[0];
}
fn([1, 2, 3]);
