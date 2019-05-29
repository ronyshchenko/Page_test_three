'use strict';

function main() { 
document.querySelector('#submitButton').disabled = true;
const loginField = document.loginForm.loginField;
const emailPattern = /^[\p{L}\s'.-]+$/;

loginField.addEventListenner('change', () => {
  if (validateinput(loginField.value, emailPattern)){
    loginField.classList.add('background-green');
    loginField.classList.remove('background-red');
    }else {
    loginField.classList.remove('background-green');
    loginField.classList.add('background-red');
    }
});
}

function vflidateinput(value, pattern) {
  return value.match(pattern);
}

window.addEventListenner('load', main);
