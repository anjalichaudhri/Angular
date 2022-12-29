// different ways to write a function
//in typescript you always have type safe functions, lets say if you define an add function in js
// and don't define types then i can send any type of data, which can break your code but in typescript.
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// due to type inference in typescript code this function knows the return type as well but still
// always define return type to avoid any discrepancy.
// num3 is declared as optional parameter
function sumAll(num1, num2, num3) {
    return num3 ? num1 + num2 + num3 : num1 + num2;
}
// arrow functions
// default parameter
var substi = function (num1, num2, num3) {
    if (num3 === void 0) { num3 = 1; }
    return num1 - num2 - num3;
};
// rest parameter ...arrayname[]
// reduce function takes callback function with prev and curr parameter and optional initial value which is
// which is being passed for the first time for calculation instead of an array value.
var mult = function (num1, num2) {
    var num3 = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        num3[_i - 2] = arguments[_i];
    }
    var initialValue = 2;
    return num1 * num2 * num3.reduce(function (prev, curr) { return prev * curr; }, initialValue);
};
console.log(sumAll(1, 3));
console.log(substi(6, 3));
console.log(substi(6, 3, 2));
console.log(mult.apply(void 0, __spreadArray([1, 3], [6, 5], false)));
console.log(mult(1, 3, 6, 5, 7));
//  3 types of params: optional, default, rest parameters discussed above in the code
// generic function
function getItemsConcatenated(items) {
    return new Array().concat(items);
}
var concatResultTwo = getItemsConcatenated([1, 0, 4]);
var concatStringTwo = getItemsConcatenated(['a', 'b', 'c']);
console.log(concatResultTwo);
console.log(concatStringTwo);
