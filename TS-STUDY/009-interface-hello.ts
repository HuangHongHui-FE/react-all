// 1、
interface Foo {
  a: string;
}
type A = Foo['a']; // string

// 2、
// interface 可以表示对象的各种语法，它的成员有5种形式。
// 对象属性
// 对象的属性索引
// 对象方法
// 函数
// 构造函数

// 3、
interface A {
  f(x: boolean): string;
}

interface B {
  f: (x: boolean) => string;
}

interface C {
  f: { (x: boolean): string };
}
