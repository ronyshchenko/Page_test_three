'use strict';

document.addEventListener('DOMContentLoaded', () => {
let xhr = new XMLHttpRequest();

xhr.open('GET', ' http://my-json-server.typicode.com/mate-academy/literary-blog/articles');

xhr.send();

xhr.onload = function() {
  if (xhr.status != 200) { 
    alert(`Error ${xhr.status}: ${xhr.statusText}`); 
  } else { 
    alert(`Done, got ${xhr.response.length} bytes`); 
  }
};
});