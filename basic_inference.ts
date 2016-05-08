"use strict";

// Requires string inputs
function buildName (first_name : string, last_name : string, title : string) : string {
	if (title)
		return `${title} ${first_name} ${last_name}`
	else
		return `${first_name} ${last_name}`
}

// No annotations . . . 
const first_name = 1337,
	    last_name  = 'Haxor',
	    title      = 'Dr';
	 
// . . . But TypeScript's a smart language that don't need no annotations
console.log(buildName(first_name, last_name, title)); // TypeError
