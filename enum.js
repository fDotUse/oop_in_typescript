"use strict";
// This is an example from the TypeScript docs.
//    http://bit.ly/1XQjl2Y
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
;
var red = Color.Red;
// Enums are like associative arrays. Each enum constant is associated with an index, starting at 0.
console.log(Color[0]); // 'Red'
// You can start from any number instead of zero, if you want.
var RomanceLanguages;
(function (RomanceLanguages) {
    RomanceLanguages[RomanceLanguages["Spanish"] = 1] = "Spanish";
    RomanceLanguages[RomanceLanguages["French"] = 2] = "French";
    RomanceLanguages[RomanceLanguages["Italian"] = 3] = "Italian";
    RomanceLanguages[RomanceLanguages["Romanian"] = 4] = "Romanian";
    RomanceLanguages[RomanceLanguages["Portuguese"] = 5] = "Portuguese";
})(RomanceLanguages || (RomanceLanguages = {}));
;
console.log(RomanceLanguages[4]); // 'Romanian'
console.log(RomanceLanguages[0]);
