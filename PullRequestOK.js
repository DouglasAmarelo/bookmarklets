/*!
  Author      : Douglas "Amarelo" Lopes
  Author URI  : http://douglasamarelo.com/
  Version     : 1.3.0
*/

// - https://code.tutsplus.com/tutorials/create-bookmarklets-the-right-way--net-18154
// - http://mrcoles.com/bookmarklet/
// - http://bookmarklets.org/maker/


// Script
const $btnReview = document.querySelector('.js-reviews-toggle');
const author = document.querySelector('#partial-discussion-header .author').textContent;
const pullRequestField = document.querySelector('#pull_request_review_body');
const $formCheckbox = document.querySelector('.form-checkbox input[value="approve"]');
const pullRequestResponseOK = 'Oi @' + author + ', avaliei seu pull request e, parece que está tudo certo. \n' + 'Parabéns! \n\n' + ' ![That is OK](https://i.giphy.com/media/mgqefqwSbToPe/giphy.webp)';

$btnReview.click();
pullRequestField.value = pullRequestResponseOK;
$formCheckbox.click();

// Bookmarklet
javascript:void%20function(){const%20e=document.querySelector(%22.js-reviews-toggle%22),t=document.querySelector(%22%23partial-discussion-header%20.author%22).textContent,o=document.querySelector(%22%23pull_request_review_body%22),u=document.querySelector('.form-checkbox%20input[value=%22approve%22]'),c=%22Oi%20%40%22+t+%22,%20avaliei%20seu%20pull%20request%20e,%20parece%20que%20está%20tudo%20certo.%20\nParabéns!%20\n\n%20![That%20is%20OK](https://i.giphy.com/media/mgqefqwSbToPe/giphy.webp)%22;e.click(),o.value=c,u.click()}();