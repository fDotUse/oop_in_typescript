"use strict";

function capitalizeName (name : string) : string {
  return name.toUpperCase();
}

console.log('geronimo'); // 'GERONIMO'

// But:
console.log(42); // Error; 42 isn't a string.

// TypeScript checks at compile-time if you're returning the right type.
function even_broken (num : number) : boolean {
   return (num % 2); // WRONG. This will cause a compile-time error.
}

function even (num : number) : boolean {
   return (num % 2 == 0); // Much better; this works.
}
