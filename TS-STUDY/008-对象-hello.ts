// 1、基础
// type Obj = {
//   name: string;
//   age: number;
// };
// const obj: Obj = {
//   name: 'hhh',
//   age: 18,
// };

// const obj: Obj = {  // 报错
//     name: 'hhh'
// }

// const obj: Obj = {  // 报错
//     name: 'hhh',
//     age: 18,
//     class: 11
// }

// console.log(obj.z); // 报错
// obj.z = 1; // 报错
// delete obj.name // 报错
// object.name = '1'

// 2、对象里加函数
// const obj: {
//   name: string;
//   //   add(x: number, y: number): number;
//   // 或者
//   add: (x: number, y: number) => number;
// } = {
//   name: '111',
//   add: function (x, y) {
//     return x + y;
//   },
// };

// 3、interface
// type命令可以为对象类型声明一个别名，TypeScript 还提供了interface命令，可以把对象类型提炼为一个接口
// type Obj = {
//   x: number;
// };
// const obj: Obj = {
//   x: 1,
// };

// interface Obj {  // 注意！！！没有=
//   x: number;
// }
// const obj: Obj = {
//   x: 1,
// };

// TypeScript 不区分对象自身的属性和继承的属性，一律视为对象的属性。
// interface MyInterface {
//   toString(): string; // 继承的属性
//   prop: number; // 自身的属性
// }
// const obj: MyInterface = {
//   prop: 123,
// };

// 4、可选属性
// type User = {
//   name: string;
//   age?: number;
// };

// // 等同于
// type User = {
//     name: string;
//     age: number | undefined;
// }

// 5、只读属性
// const person: {
//   readonly age: number;
// } = {
//   age: 20,
// };
// person.age = 200 // 报错

// 希望属性值是只读的，除了声明时加上readonly关键字，还有一种方法，就是在赋值时，在对象后面加上只读断言as const。
// const myUser = {
//   name: 'Sabrina',
// } as const;
// myUser.name = 'Cynthia'; // 报错

// const myUser: { name: string } = {
//   name: 'Sabrina',
// } as const;
// myUser.name = 'Cynthia'; // 正确
// 上面示例中，根据变量myUser的类型声明，name不是只读属性，但是赋值时又使用只读断言as const。这时会以声明的类型为准，因为name属性可以修改。

// 6、属性名的类型索引
// type MyObj = {
//   [property: string]: string;
// };
// const obj: MyObj = {
//   foo: 'a',
//   bar: 'b',
//   baz: 'c',
// };

// 还有这两种
// type T1 = {
//   [property: number]: string;
// };

// type T2 = {
//   [property: symbol]: string;
// };

// type MyType = {
//   foo: boolean; // 报错
//   [x: string]: string;
// }

// 7、解构赋值
// const {
//   id,
//   name,
//   price,
// }: {
//   id: string;
//   name: string;
//   price: number;
// } = product;

// 8、严格字面量检查
// const point: {
//   x: number;
//   y: number;
// } = {
//   x: 1,
//   y: 1,
//   z: 1, // 报错
// };
// 上面示例中，等号右边是一个对象的字面量，这时会触发严格字面量检查。只要有类型声明中不存在的属性（本例是z），就会导致报错。
// 如果等号右边不是字面量，而是一个变量，根据结构类型原则，是不会报错的。
// const myPoint = {
//   x: 1,
//   y: 1,
//   z: 1,
// };
// const point: {
//   x: number;
//   y: number;
// } = myPoint; // 正确
// 上面示例中，等号右边是一个变量，就不会触发严格字面量检查，从而不报错。

// let x: {
//   foo: number;
//   [x: string]: any;
// };

// x = { foo: 1, baz: 2 }; // Ok


// 9、空对象
// 错误
const pt = {};
pt.x = 3;
pt.y = 4;

// 正确
const pt = {
  x: 3,
  y: 4,
};
