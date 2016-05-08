"use strict";

// Structurally identical classes are equivalent.
//   This seems obvious, but would not be the case in a classical OO language.
class Book {

  constructor (public title : string, 
               public length : number, // Printable pages
               public author : string) { }

}

class Article {

  constructor (public title : string,
               public length : number,
               public author : string) { }

}

let x : Book;
x = new Article('From JavaScript to TypeScript III', 6, 'Peleke')
