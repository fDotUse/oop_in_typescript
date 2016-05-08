"use strict";

class Nameable {

  constructor (public name : string) { }

}

class Person extends Nameable {

  private boolean : married;

  constructor (name : string) { super(name) }

}

class Museum extends Nameable {
  
  private open : boolean;

  constructor (name : string) { super(name) }

}

class Planet extends Nameable {

  private habitable : boolean;
  
  constructor (name : string) { super(name) }

}

class Planet extends Nameable {

  private habitable : boolean;
  
  constructor () { super(name) }

}

const struct  = [new Person('Euler'), new Museum('MOMA'), new Planet('Zeltron')],

       union   = [new Museum('MOMA'), new Planet('Zeltron'), new Nameable('fish'), new Person('Fis')],

       proper  = [new Person('John'), new Museum('Met'), new Planet('Xaltrix'), new Nameable('Fish'), ];
