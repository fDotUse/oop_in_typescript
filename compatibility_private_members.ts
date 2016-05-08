"use strict";

// Identical shapes and member names, but incompatible due to private members.
class User {

	constructor (private name : string, private age : number) { }
	
}

class Country {

	constructor (private name : string, private age : number) { }

}

let rando : User;
rando = new Country('Azerbaijan', 15); // Error
