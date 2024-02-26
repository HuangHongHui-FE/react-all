// 1、
// interface Foo {
//   a: string;
// }
// type A = Foo["a"]; // string

// 2、
// interface 可以表示对象的各种语法，它的成员有5种形式。
// 对象属性
// 对象的属性索引
// 对象方法
// 函数
// 构造函数

// interface Point {
//   x: number;
//   y: number;
// }

// interface Point {
//   x?: string;
// }

// interface Point {
//   readonly x: string;
// }

// interface Point {
//   [prop: number]: string
// }
// const point:Point = ['a', 'b', 'c']  // 也对
// const point: Point = {
//   name: 'hhh',
// }

// 3、对象的方法
// interface A {
//   f(x: boolean): string;
// }

// interface B {
//   f: (x: boolean) => string;
// }

// interface C {
//   f: { (x: boolean): string };
// }

// 类型方法重载
// interface A {
//   f(): number;
//   f(x: boolean): boolean;
//   f(x: string, y: string): string;
// }

// __todo: 重载
// interface A {
//   f(): number;
//   f(x: boolean): boolean;
//   f(x: string, y: string): string;
// }

// function MyFunc(): number;
// function MyFunc(x: boolean): boolean;
// function MyFunc(x: string, y: string): string;
// function MyFunc(x?: boolean | string, y?: string): number | boolean | string {
//   if (x === undefined && y === undefined) return 1;
//   if (typeof x === "boolean" && y === undefined) return true;
//   if (typeof x === "string" && typeof y === "string") return "hello";
//   throw new Error("wrong parameters");
// }

// const a: A = {
//   f: MyFunc,
// };
// 上面示例中，接口A的方法f()有函数重载，需要额外定义一个函数MyFunc()实现这个重载，然后部署接口A的对象a的属性f等于函数MyFunc()就可以了。

// 4、生命函数类型
// interface Add {
//   (x: number, y: number): number;
// }

// const myAdd: Add = (x, y) => {
//   return x + y;
// };

// 5、interface的继承
// interface 继承interface
// interface Father {
//   money: number;
// }
// interface GrandFather {
//   car: string;
// }

// interface Son extends Father, GrandFather {
//   age: number;
// }

// interface 继承type
// type Father = {
//   money: number;
// };
// type GrandFather = {
//   car: string;
// };

// interface Son extends Father, GrandFather {
//   age: number;
// }

// const son: Son = {
//   money: 111,
//   car: "msld",
//   age: 18,
// };

// interface继承class
// class Father {
//   money: number = 100;
//   makeMoney(): number {
//     return 1;
//   }
// }

// interface Son extends Father {
//   age: number;
// }

// 6、接口合并 __todo
// 同名接口合并时，如果同名方法有不同的类型声明，那么会发生函数重载。而且，后面的定义比前面的定义具有更高的优先级。
// interface Cloner {
//   clone(animal: Animal): Animal;
// }

// interface Cloner {
//   clone(animal: Sheep): Sheep;
// }

// interface Cloner {
//   clone(animal: Dog): Dog;
//   clone(animal: Cat): Cat;
// }

// // 等同于
// interface Cloner {
//   clone(animal: Dog): Dog;
//   clone(animal: Cat): Cat;
//   clone(animal: Sheep): Sheep;
//   clone(animal: Animal): Animal;
// }
// 上面示例中，clone()方法有不同的类型声明，会发生函数重载。这时，越靠后的定义，优先级越高，排在函数重载的越前面。比如，clone(animal: Animal)是最先出现的类型声明，就排在函数重载的最后，属于clone()函数最后匹配的类型。

// 7、联合类型
// 两个 interface 组成的联合类型存在同名属性，那么该属性的类型也是联合类型。
interface Circle {
  area: bigint;
}
interface Rectangle {
  area: number;
}
declare const s: Circle | Rectangle;
s.area; // bigint | number


// 8、interface 与 type 区别
// （1）type能够表示非对象类型，而interface只能表示对象类型（包括数组、函数等）。
// （2）interface可以继承其他类型，type不支持继承。
// （3）同名interface会自动合并，同名type则会报错。也就是说，TypeScript 不允许使用type多次定义同一个类型。
// （4）interface不能包含属性映射（mapping），type可以
// （5）this关键字只能用于interface。
class Calculator implements Foo {
  result = 0;
  add(num:number) {
    this.result += num;
    return this;
  }
}
// （6）type 可以扩展原始数据类型，interface 不行。
// （7）interface无法表达某些复杂类型（比如交叉类型和联合类型），但是type可以。
type A = { /* ... */ };
type B = { /* ... */ };
type AorB = A | B;
type AorBwithName = AorB & {
  name: string
};

// 般情况下，interface灵活性比较高，便于扩充类型或自动合并，建议优先使用。！！！