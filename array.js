"use strict";
// The item type, T, followed by brackets means, "an array whose items are of type T."
var divine_lovers = ["Zeus", "Aphrodite"];
// Writing Array<[Item Type]> means the same thing.
var digits = [143219876, 112347890];
// But this doesn't work. Hm. . . 
var mixed_array = [];
mixed_array.push("This Works!");
mixed_array.push(42); // This doesn't.
