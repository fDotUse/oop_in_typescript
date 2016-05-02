"use strict";

interface User {
	name : string;
	email : string;
}

class RegisteredUser implements User {

  constructor (public name : string, public email : string) { }

}
