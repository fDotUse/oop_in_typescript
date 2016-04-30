"use strict";

class Fish {

	constructor (public name : string) { }
	
}

class FreshwaterFish extends Fish {

	constructor (name : string, public salt_tolerant : boolean = false) {
		super(name);
	}
	
}

const fresh = new FreshwaterFish('Halibut');

console.log(fresh.salt_tolerant);
console.log(fresh.name);

function report (fish : Fish) : void {
  console.log(fish.name);
}

report(fresh);
