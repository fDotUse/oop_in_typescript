"use strict";

class Fish {

	constructor (private name : string) { }
	
}

class FreshwaterFish extends Fish {

	constructor (name : string, private salt_tolerant : boolean = false) {
		super(name);
	}
	
}
