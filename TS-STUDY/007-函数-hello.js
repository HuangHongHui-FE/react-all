// 1、简介
// function hello(txt: string): void {
//   console.log(txt);
// }
// 写法1
// const hello = function (txt: string) {
//   console.log('hello', txt);
// };
// 写法2
// const hello: (txt: string) => void = function (txt) {
//   console.log(txt);
// };
var people = ['a', 'b', 'c'].map(function (name) {
    ({ name: name });
});
