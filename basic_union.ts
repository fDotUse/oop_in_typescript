"use strict";

// foo can print either numbers or strings without issue.
function foo (bar : (string | number)) : void {
	console.log(`foo says ${bar}.`);
}

foo('Hello, world');
foo(42);
