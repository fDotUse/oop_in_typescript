"use strict";

// Parentheses aren't required in type alias definitions.
type Alphanumeric = string | number;

function foo (bar : Alphanumeric) : void {
	console.log(`foo says ${bar}.`);
}

foo('Hello, world');
foo(42);
