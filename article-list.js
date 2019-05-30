'use strict';
class ArticleList {
    constructor(container) {
      let arrayArticles = [];
      this.container = container;
      }
      addArticle(article) {
        this.arrayArticles.push(article);
      }

      removeArticle(article) {
        this.arrayArticles.splice(this.arrayArticles.indexOf(article), 1);
      }

      render() {
        document.getElementById('container').innerHTML = "";
        for (let i =0; i < this.arrayArticles.length; i++) {
          let divMain = document.createElement('div');
          document.body.appendChild(divMain);
          let divTitle = document.createElement('div');
          divTitle.innerHTML = this.arrayArticles[i].title;
          document.divMain.appendChild(divTitle);
          let divAuhtor = document.createElement('div');
          divAuhtor.innerHTML = this.arrayArticles[i].author;
          document.divMain.appendChild(divAuhtor);
          let divText = document.createElement('div');
          divText.innerHTML = this.arrayArticles[i].text;
          document.divMain.appendChild(divText);  
        }
      }
      }
