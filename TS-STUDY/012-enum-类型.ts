// 1、基本使用
// enum Color {
//   Red,  // 0
//   Yellow,  // 1
//   Blue,  // 2
// }
// const c = Color['Red'];
// console.log("🚀 ~ c:", c)
// const c = Color.Red

// 2、
// enum Operator {
//   ADD,
//   DIV,
//   MUL,
//   SUB,
// }
// function compute(op: Operator, a: number, b: number) {
//   switch (op) {
//     case Operator.ADD:
//       return a + b;
//     case Operator.DIV:
//       return a / b;
//     case Operator.MUL:
//       return a * b;
//     case Operator.SUB:
//       return a - b;
//     default:
//       throw new Error('wrong operator');
//   }
// }

// compute(Operator.ADD, 1, 3); // 4

// 3、Enum 结构可以被对象的as const断言替代。
// enum Foo {
//   A,
//   B,
//   C,
// }

// const Bar = {
//   A: 0,
//   B: 1,
//   C: 2,
// } as const;

// if (x === Foo.A) {
// }
// // 等同于
// if (x === Bar.A) {
// }

// 4、enum成员值
// enum Color {
//   Red = 7,
//   Green, // 8
//   Blue, // 9
// }

// // 或者
// enum Color {
//   Red, // 0
//   Green = 7,
//   Blue, // 8
// }

// 5、加个const不能再次赋值
// const enum Color {
//   Red,
//   Green,
//   Blue,
// }
// const x = Color.Red;
// const y = Color.Green;
// const z = Color.Blue;

// // 编译后
// const x = 0; /* Color.Red */
// const y = 1; /* Color.Green */
// const z = 2; /* Color.Blue */

// 6、keyof
// enum MyNum {
//   A = 'a',
//   B = 'b',
// }
// type Foo = keyof typeof MyEnum; // 'A'|'B'

// 7、获取所有值
// enum MyEnum {
//   A = 'a',
//   B = 'b',
// }
// // { a: any, b: any }
// type Foo = { [key in MyEnum]: any };

// 8、反向映射

// enum Weekdays {
//   Monday = 1,
//   Tuesday,
//   Wednesday,
//   Thursday,
//   Friday,
//   Saturday,
//   Sunday,
// }

// console.log(Weekdays[3]); // Wednesday

// 字符串不存在反向映射
// enum MyEnum {
//   A = 'a',
//   B = 'b',
// }
