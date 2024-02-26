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
// 函数写法
// function fn<T>(a: T[]): T {
//   return a[0];
// }
// fn<number>([1, 2, 3]);
// // 写法一
// let myId: <T>(arg: T) => T = id;
// // 写法二
// let myId: { <T>(arg: T): T } = id;

// 接口写法
// interface Box<Type> {
//   contents: Type;
// }
// let box: Box<string>;

// 类的写法
// class Pair<K, V> {
//   key: K;
//   value: V;
// }

// class A<T> {
//   value: T;
// }
// class B extends A<any> {
// }

// class C<NumType> {
//   value!: NumType;  // 非空断言
//   add!: (x: NumType, y: NumType) => NumType;
// }

// let foo = new C<number>();

// foo.value = 0;
// foo.add = function (x, y) {
//   return x + y;
// };

// 类型别名的泛型写法
type Container<T> = { value: T };

const a: Container<number> = { value: 0 };
const b: Container<string> = { value: "b" };

// 5、__todo: 泛型类写成构造函数

// 6、泛型的默认值
function getFirst<T = string>(arr: T[]): T {
  return arr[0];
}
getFirst([1,2,3]) // 正确

class Generic<T = string> {
  list:T[] = []
  add(t:T) {
    this.list.push(t)
  }
}
const g = new Generic();
g.add(4) // 报错
g.add('hello') // 正确

// 7、数组的泛型表示 __todo