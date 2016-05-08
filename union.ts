"use strict";

class Article {

	static articles : Article[] = [];
	
	static submit (article) : boolean;
	static submit (article) : Article;
	static submit (article  : Article) : any {
		if (Article.articles.length >= 1)
			return article;
		else {
			Article.articles.push(article)
      return true;
    }
	}

	constructor (public text : string) { }
	
}

// Submit returns true if the submission was successful, and the
//    article that failed to be submitted, otherwise.
const bool : (boolean | Article) = Article.submit(new Article("It was the best of times . . . ")), // true
      obj  : (boolean | Article) = Article.submit(new Article("Wasn't my best article, anyway . . . ")); // article

console.log(bool);
console.log(obj);
