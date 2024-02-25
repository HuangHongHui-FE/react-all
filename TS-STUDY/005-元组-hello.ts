// 1、基础
// const s: [string, number, string] = ['a', 1, 'a'];

// 2、?
// 问号后缀（?），表示该成员是可选的。
// let a:[number, number?] = [1, 2];

// type myTuple = [
//   number,
//   number,
//   number?,
//   string?
// ];

// const str: myTuple = [1,1,1,2]
// const str: myTuple = [1,1,1,2,2]  // 报错
// str[6] = '1' // 报错

// type t1 = [string, number, ...boolean[]];
// type t2 = [string, ...boolean[], number];
// type t3 = [...boolean[], string, number];

// 3、取名，没实际意义，说明成员含义
// type Color = [
//   red: number,
//   green: number,
//   blue: number
// ];
// const c:Color = [255, 255, 255];


// 4、只读元祖
// 写法一
type t = readonly [number, string]
// 写法二
type t = Readonly<[number, string]>

// 5、成员数量推断
// 报错，原因是 TypeScript 发现元组point的长度是2，不可能等于3，这个判断无意义。
function f(point: [number, number]) {
  if (point.length === 3) {  // 报错
    // ...
  }
}
// 对比
const arr = [1, 2];
function add(x:number, y:number){
  // ...
}
add(...arr) // 报错
// 对比
const arr:[number, number] = [1, 2];
function add(x:number, y:number){
  // ...
}
add(...arr) // 正确
