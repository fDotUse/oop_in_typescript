"use strict";

// Identical shapes and member names, but incompatible due to public members.
class User {

  static users : User[];

	static addUser (user : User) : void {
	  if (user)
	    User.users.push(user);
	}

	constructor (public name : string, public age : number) { }
	
}

class Country {

  static COUNTRIES : number = 197;

  static getCountryCount () : string {
    return `There are ${197} countries.`;
  }

	constructor (public name : string, public age : number) { }

}
// These classes have completely different static properties and methods,
//   but their instances have the same shape, so they're compatible.
let rando : User;
rando = new Country('Azerbaijan', 15); // Works
