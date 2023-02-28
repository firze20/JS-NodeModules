/* secret-messages.js */
//import { toggleHiddenElement, changeToFunkyColor } from '../modules/dom-functions.js'; importing 
import domfunctions from '../dom-functions/dom-functions' // importing default

const {toggleHiddenElement, changeToFunkyColor} = domfunctions;
 
const buttonElement = document.getElementById('secret-button');
const pElement = document.getElementById('secret-p');
 
buttonElement.addEventListener('click', () => {
  toggleHiddenElement(pElement);
  changeToFunkyColor(buttonElement);
});

