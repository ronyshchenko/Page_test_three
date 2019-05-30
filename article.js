'use strict';
class Article {
  constructor(title, author, text) {
    this.title = title;
    this.author = author;
    this.text = text;
    }
  matches(query) {
    let testForTitle = this.title.indexOf(query) + 1;
    let testForAuthor = this.author.indexOf(query) + 1;
    let testForText = this.text.indexOf(query) + 1;
    if ((testForTitle + testForAuthor + testForText) > 0) {
        return true; 
    }
    else return false; 
      }
    }