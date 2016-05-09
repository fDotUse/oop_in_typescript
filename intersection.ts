"use strict";

type DynamicWidget = Updatable & Cacheable;

function handleRefresh (widget : DynamicWidget) : void {
  // Update widget's cache, and inform listening views that it's time to 
  //   update the UI.
}

// Interfaces
// ===============================================
interface Updatable {

  // SettingsWidget changes user settings; VocabularyWidget fetches new 
  //   translations.
  update : (() => void);
}

interface Cacheable {

  // This is an example of where interfaces shine. Both widgets below are
  //   cacheable, but each takes a totally different approach to caching:
  //   VocabularyWidget does so based on network responses, whereas our
  //   SettingsWidget saves user preferences to local storage.
  cache : (() => void)

}

// Utility Class
// ===============================================
class User { /* Omitted for brevity */  }

// Widget classes
// ===============================================
abstract class Widget { /* Omitted for brevity */ }

class VocabularyWidget extends Widget implements Updatable, Cacheable {

  constructor(private user : User, private words : String[]) { super() }

  cache () : void {
    // Cache API responses . . .
  }

  /* Remainder omitted */

}

class SettingsWidget extends Widget implements Updatable, Cacheable {

  constructor(private user : User) { super() }

  cache () : void {
    // Save user preferences to local storage . ..  
  }

  /* Remainder omitted */
}
