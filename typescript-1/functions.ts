// different ways to write a function
//in typescript you always have type safe functions, lets say if you define an add function in js
// and don't define types then i can send any type of data, which can break your code but in typescript.

// due to type inference in typescript code this function knows the return type as well but still
// always define return type to avoid any discrepancy.

// num3 is declared as optional parameter
function sumAll(num1: number, num2: number, num3?: number): number {
  return num3 ? num1 + num2 + num3 : num1 + num2;
}

// arrow functions
// default parameter
const substi = (num1: number, num2: number, num3 = 1): number => {
  return num1 - num2 - num3;
};

// rest parameter ...arrayName[]
// reduce function takes callback function with prev and curr parameter and optional initial value which is
// which is being passed for the first time for calculation instead of an array value.
const mult = function (num1: number, num2: number, ...num3: number[]): number {
  let initialValue: number = 2;
  return num1 * num2 * num3.reduce((prev, curr) => prev * curr, initialValue);
};

console.log(sumAll(1, 3));
console.log(substi(6, 3));
console.log(substi(6, 3, 2));
console.log(mult(1, 3, ...[6, 5]));
console.log(mult(1, 3, 6, 5, 7));

//  3 types of params: optional, default, rest parameters discussed above in the code

// generic function

function getItemsConcatenated<Type>(items: Type[]): Type[] {
  return new Array<Type>().concat(items);
}

let concatResultTwo = getItemsConcatenated<number>([1, 0, 4]);
let concatStringTwo = getItemsConcatenated<string>(['a', 'b', 'c']);

console.log(concatResultTwo);
console.log(concatStringTwo);