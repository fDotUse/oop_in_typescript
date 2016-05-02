"use strict";

class ListComponent {
  
	constructor (private _things : ListItem[]) { }

	get things () : ListItem[] { return this._things; }
	
}

class ListItem {

	constructor (private _name) { }

	get name () : string { return this._name; }
	
}

const item = new ListItem('Thing to Do');
console.log(item.name); // Property 'name' is private

item.name = 'Fish';
console.log(item.name); // 
