"use strict";

interface Printable {
  print () : void;
}

class Book {

  constructor (public title : string, 
               public length : number, // Printable pages
               public author : string,
               public text : string) { }

  print () : void {
    console.log(this.text);
  }

}

// Compatibile, because Book has all of the members that Printable does.
let printable : Printable
printable = new Book('Eugene Onegin', 132, 'Alexander Pushkin', 'Not planning fun . . . ');

// We can also cast between compatible types without error.
const book : Book = new Book('1984', 222, 'Orwell', 'Perhaps one did not want to be love so much as understood.'),
  new_printable = <Printable> book;

// This doesn't work with incompatible types!
//  If you run this line, you'll get an error, because the object doesn't
//  contain a member called print.
// ==
// const broken = <Printable> { not_printable : 'Well, this was a mistake.' }
