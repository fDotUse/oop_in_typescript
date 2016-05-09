"use strict";

type Alphanumeric = string | number;

function echoType (message : Alphanumeric) : void {
	if (typeof message === "string")
		console.log(`You sent me a message: '${message}'!`);
	else
		console.log(`You sent me your number: ${message}!`);
}

echoType("You're amazing"); // "You sent me a message: 'You're amazing'!"
echoType(42);
