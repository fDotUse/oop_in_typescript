"use strict";

interface User {
	name : string;
	email : string;
	avatar? : Object;
}

class RegisteredUser implements User {

  constructor (public name : string, public email : string) { }

}

class ImageUser implements User {

  constructor (public name : string,
               public email : string,
               public avatar : Object) { }

}
