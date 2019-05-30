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

      print () {
          console.log(this.title, this.author, this.text);
      }
    }

    
    class ArticleList {
        constructor(container) {
            
          this.arrayArticles = [];
          
          this.container = container;
          }
          addArticle(article) {
            this.arrayArticles.push(article);
          }
    
          removeArticle(article) {
            this.arrayArticles.splice(this.arrayArticles.indexOf(article), 1);
          }
    
          render() {
            
            document.getElementById('article-list').innerHTML = "";
            

            for (let i =0; i < this.arrayArticles.length; i++) {
              
              let divMain = document.createElement('div');

              document.body.appendChild(divMain);
                  
              }
          }

          print() {
              console.log(this.arrayArticles, this.container);
          }
 
          }

          document.addEventListener(
            'DOMContentLoaded', function() {
              let roma = new Article ("Roma", "hel", "1972");
              let nata = new Article ("Nata", "relig", "1984");
              let fam = new ArticleList ("article-list");
              fam.addArticle("roma");
              fam.addArticle("nata");
              fam.addArticle("mama");
              fam.render();
            }
          );
          
          