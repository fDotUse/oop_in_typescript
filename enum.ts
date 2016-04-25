"use strict";

// This is an example from the TypeScript docs.
//    http://bit.ly/1XQjl2Y
enum Color { Red, Green, Blue };
const red : Color = Color.Red;

// Enums are like associative arrays. Each enum constant is associated with an index, starting at 0.
console.log(Color[0]); // 'Red'

// You can start from any number instead of zero, if you want.
enum RomanceLanguages { Spanish = 1, French, Italian, Romanian, Portuguese };
console.log(RomanceLanguages[4]); // 'Romanian'
console.log(RomanceLanguages[0]);
