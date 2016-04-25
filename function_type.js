"use strict";
var multiply;
multiply = function (first, second) {
    return first * second;
};
var multiplyFirst;
multiplyFirst = function (first) {
    return function (num) {
        return first * num;
    };
};
console.log(multiply(5, 2)); // '10'
console.log(multiplyFirst(9)(2)); // '18'
