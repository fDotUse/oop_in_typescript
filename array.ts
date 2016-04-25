"use strict";

// The item type, T, followed by brackets means, "an array whose items are of type T."
const divine_lovers : string[] = ["Zeus", "Aphrodite"];

// Writing Array<[Item Type]> means the same thing.
const digits : Array<number> = [143219876, 112347890];

// But this doesn't work. Hm. . . 
const mixed_array : string[] = [];
mixed_array.push("This Works!")
mixed_array.push(42); // This doesn't.
