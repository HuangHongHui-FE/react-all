// tsc 001-hello.tsc
// tsc --noEmitOnError hello.ts
// 1、
// function greet(person, date) {
//   console.log(`Hello ${person}, today is ${date}!`);
// }
// greet('Brendan');
// 2、
function greet(person, date) {
    console.log(`Hello ${person}, today is ${date.toDateString()}!`);
}
greet('Maddison', new Date());
// 3、
// let msg = "hello there!";
