// 1、基本使用
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Yellow"] = 1] = "Yellow";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var c = Color['Red'];
console.log("🚀 ~ c:", c);
// const c = Color.Red
