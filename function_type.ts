"use strict";

let multiply : (first : number, second : number) => number;
multiply = function (first, second) {
  return first * second;
}

let multiplyFirst : ( first : number) => ((second : number) => number)
multiplyFirst = function (first) {
  return function (num) {
    return first * num;
  }
} 

console.log(multiply(5, 2)); // '10'
console.log(multiplyFirst(9)(2)); // '18'
