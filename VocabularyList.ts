"use strict";

const CONFIG = {
	api : 'wordreference',
	key : 'API_KEY'
};

class VocabularyList {

  private english_words : Array<string>;

	constructor (private spanish_words : Array<string>) {
	  this.english_words = [];
	}
	
	fetchWords () : Map<string, string> {
		return this.parseResponse ( this.makeRequest(CONFIG.api, CONFIG.key) );
	}

	private makeRequest (api : string, key : string) : any {
	  const magicalJson = { /* For illustration */ }
	  return magicalJson; 
	}

	private magicallyGetWord (word : string) : any {
	  // Mock data to please compiler
	  return { english_data : 'English language data' }
	}

	// This logic is specific to WR's (made-up) response format:
	//    We have to extract the english_entries property from the response
	private parseResponse (json : any) : Map<string, string> {
		const translations : Map<string, string> = new Map<string, string>();
		
		this.spanish_words.forEach((spanish_word) => {
			// Get word from API with magic spell
			const translation_data = this.magicallyGetWord(spanish_word);

			// Get data from WORDREFERENCE response
			const english_data = translation_data.english_data;
			// Get data from MERRIAM-WEBSTER response -- 
			//   this is the only place we need to make a change!
			// const english_data = getDataFromUglyResponse( translation_data );
			
			// Get the english_entries property -- let's pretend it's also an object
		  translations.set(spanish_word, english_data)
		});
		
		return translations;
	}
}
