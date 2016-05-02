"use strict";

interface User {
	// PROPERTIES
	name : string;
	email : string;
	avatar? : Object;

  // API
  print () : void;
}

class RegisteredUser implements User {

  constructor (public name : string, public email : string) { }

  print () : void {
    console.log(`Name: ${this.name} | Email: ${this.email} | No avatar.`);
  }

}

class ImageUser implements User {

  constructor (public name : string,
               public email : string,
               public avatar : Object) { }

  print () : void {
    console.log(`Name: ${this.name} | Email: ${this.email} | Has avatar.`);
  }

}

const user = new RegisteredUser('Peleke', 'resil.design@gmail.com');
user.print();
