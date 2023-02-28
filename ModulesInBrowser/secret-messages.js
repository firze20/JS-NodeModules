/* secret-messages.js */

import {changeToFunkyColor, toggleHiddenElement} from './dom-functions/dom-functions';

const buttonElement = document.getElementById('secret-button');
const pElement = document.getElementById('secret-p');
 
 
buttonElement.addEventListener('click', () => {
  toggleHiddenElement(pElement);
});

