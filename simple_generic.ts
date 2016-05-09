"use strict";

// There's nothing special about T.
function identity1<T>(input : T) : T {
  // This works, because we can return "input" no matter what it is.
  return input;
}

// We could have used anything else instead. Like Q, because Q is cool.
function identity2<Q>(input : Q) : string {
  // This works, because everything in JavaScript can call 
  //   Object.prototype.toString.
  return input.toString();
}


// function getMixedContents1<T>(input : T) : T {
//   let contents : T[] = [];
// 
//   // This doesn't work. Only Array has a forEach. What if we get a string?
//   input.forEach((val) => contents.push(val))
// 
//   return contents;
// }

function getMixedContents2<T>(input : T[]) : T[] {
  let contents : T[] = [];

  // This works, because all arrays have a forEach.
  input.forEach((val) => contents.push(val))

  return contents;
}
