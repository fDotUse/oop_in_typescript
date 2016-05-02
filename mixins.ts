"use strict";

class Printable {
	
	text : string;
	
	print () : void {
		console.log(this.text);
	}
	
}

class Identifiable {

	name : string;
	id : number;
	
	identify () : void {
		console.log(`My name is ${this.name}, and my ID is ${this.id}`);
	}
}

class Book implements Printable, Identifiable {

  name : string;
  id : number;

  text : string;

	constructor (name : string, id : number, text : string) {
		this.name = name;
		this.id = id;
		
		this.text = text;
	}
	
	// Printable
	print : () => void;
	
	// Identifiable
	identify : () => void;
	
}
applyMixins(Book, [Printable, Identifiable]);

const bad_novel = new Book('A Buncha Nonsense', 2190, 'This book/Is awful. FIN');
bad_novel.print();

// NECESSARY EVIL :: 
//  From TS docs :: http://www.typescriptlang.org/docs/handbook/mixins.html
function applyMixins(derivedCtor: any, baseCtors: any[]) {
    baseCtors.forEach(baseCtor => {
        Object.getOwnPropertyNames(baseCtor.prototype).forEach(name => {
            derivedCtor.prototype[name] = baseCtor.prototype[name];
        });
    });
}
