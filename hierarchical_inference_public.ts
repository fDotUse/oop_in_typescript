"use strict";

class Nameable {

  constructor (public name : string) { }

}

class Person extends Nameable {

  public married : boolean;

  public age : number = 12;

  constructor (name : string) { super(name) }

}

class Museum extends Nameable {
  
  public open : boolean;

  public year_installed : number = 2000;

  constructor (name : string) { super(name) }

}

class Planet extends Nameable {

  public habitable : boolean;
  
  constructor (name : string) { super(name) }

}


const struct  = [new Person('Euler'), new Museum('MOMA'), new Planet('Zeltron')],

       union   = [new Museum('MOMA'), new Planet('Zeltron'), new Person('Fis')],

       proper  = [new Person('John'), new Museum('Met'), new Planet('Xaltrix'), new Nameable('Fish'), ];

struct.a;
union.a;
proper.a;
