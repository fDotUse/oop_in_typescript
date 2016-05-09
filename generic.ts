"use strict";

interface DataManager {
  cache<E>( items? : E[] ) : void;
  refresh : (() => void);
}

class WordManager implements DataManager {

  cache<E>(items : E[]) : void {
    // Cache stuff
  }

  refresh () : void { }
}

class View<T extends DataManager> {

  constructor (private _manager : T) { }

  get manager () : T {
    return this._manager;
  }

}

let wordManager = new WordManager();

const wordsList = new View(wordManager);
