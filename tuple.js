"use strict";
// [Date, Month, Year] :: Triplet of numbers
var date_triplet;
date_triplet = [31, 6, 2016];
// [Name, Age]
var athena;
athena = ['Athena', 9386];
// You retrieve items with indexes, as with arrays. 
//  TS remembers the type for you.
var name = athena[0];
var age = athena[1];
// But:
name = athena[1]; // No dice. We're writing TypeScript now.
