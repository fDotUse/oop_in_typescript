class Fish {

	constructor (public name : string) { }
	
	// Pseudo-abstract method :: No-op, unless
	//   a subclass provides an implementation.
	cook () : void { }
	
}

class SushiFish extends Fish {

	constructor ( name : string, cooked : boolean = false ) {
		super(name);
	}
	
  cook () : void { 
	  console.log('You don\'t cook a sushi fish!')
  }
	
}

class CookedFish extends Fish {

  constructor (name : string, cooked : boolean = true) {
	  super (name);
  }

}

const tuna = new Fish('Tuna');
const dinner = new CookedFish('Halibut');

tuna.cook(); // 'Fish has been cooked!'
dinner.cook(); // 'This fish is already cooked!'
