'use strict';
class Article {
  constructor(title, author, text) {
    this.title = title;
    this.author = author;
    this.text = text;
    }
  matches(query) {
    let testForTitle = titleindexOf("query") + 1;
    let testForAuthor = authorindexOf("query") + 1;
    let testForText = textindexOf("query") + 1;
    if ((testForTitle + testForAuthor + testForText) > 0) {
        return true; 
    }
    else return false; 
      }
    }