"use strict";

class ListComponent {

  private _things : Array<ListItem>;
  
	constructor () {
		this._things = []; 
	}

	get things () : Array<ListItem> { return this._things; }
	
}

class ListItem {

  private _name : string;

	constructor (name) {
		this._name = name;
	}

	get name () : string { return this._name; }
	
}

const item = new ListItem('Thing to Do');
console.log(item.name); // Property 'name' is private

item.name = 'Fish';
console.log(item.name); // 
