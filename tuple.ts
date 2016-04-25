"use strict";

// [Date, Month, Year] :: Triplet of numbers
let date_triplet : [number, number, number];
date_triplet = [31, 6, 2016];

// [Name, Age]
let athena : [string, number];
athena = ['Athena', 9386];

// You retrieve items with indexes, as with arrays. 
//  TS remembers the type for you.
var name : string = athena[0];
const age : number = athena[1];

// But:
name  = athena[1]; // No dice. We're writing TypeScript now.
