"use strict";

interface Identifiable {
	 name : string;
	 identify ();
 }
 
 interface Printable {
	 text : Array<string>;
	 print ();
 }

class Book implements Printable, Identifiable {

	// Shorthand; creats private members automatically
	constructor ( public name : string,  public text : Array<string>) { }
	
	print () : void {
		console.log(this.text);
	}
	
	// This is the same in both classes!
	identify () : void {
		console.log(this.name);
	}
}

class User implements Identifiable {

	constructor (public name : string) { }
	
	// This is the same in both classes!
	identify () : void {
		console.log(this.name);
	}
}
