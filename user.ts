"use strict";

class User {

	constructor (private _name : string,
	             private _email : string) {}
	
	get name () : string  { return this._name; }
	
	get email () : string { return this._email; }

	speak () : void { console.log('I am Thor'); }
}

// Here's an actual user. It behaves exactly as the class describes.
const peleke = new User('Peleke', 'resil.design@gmail.com');
console.log(peleke.name);

peleke.speak();
console.log(peleke.hasOwnProperty('_name')); // private variable still visible
console.log(peleke.hasOwnProperty('speak')); // Method call delegated to User.prototype

User.prototype.speak = undefined;

try {
  peleke.speak();
} catch (err) {
  // Throws TypeError
  console.log(err);
}
