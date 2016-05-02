"use strict";

// ListComponent maintains a list of things that a user can
//   add to and delete from. This is a pure JavaScript class.
class ListComponent {

  public things : Array<ListItem>;
  
	constructor () {
		this.things = []; 
	}
	
}

// A ListItem is a wrapper around the items in our list.
//   This is also pure JavaScript, for now.
class ListItem {

  public name : string;

	constructor (name) {
		this.name = name;
	}
	
}

const item = new ListItem('Thing to Do');
console.log(item.name); // 'Thing to Do'
