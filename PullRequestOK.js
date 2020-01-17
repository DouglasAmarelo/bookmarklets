/*!
  Author      : Douglas "Amarelo" Lopes
  Author URI  : http://douglasamarelo.com/
  Version     : 1.3.0
*/

// - https://code.tutsplus.com/tutorials/create-bookmarklets-the-right-way--net-18154
// - http://mrcoles.com/bookmarklet/
// - http://bookmarklets.org/maker/


// Script
const okImagesIds = [
  'tIeCLkB8geYtW',
  'GCvktC0KFy9l6',
  '111ebonMs90YLu',
  '3oz8xQQP4ahKiyuxHy',
  'diUKszNTUghVe',
  '4PSEQpvV5wUpnmpP1l',
  'a3zqvrH40Cdhu',
  'Q6gPyUYrCk76g',
  'vgUFOWBwBkziE',
  'n0eJLge10ujSM',
  'QJsP0cTAJhg7O47ub2',
  'iCOHNz43WB2GQ',
  'POWvddaQEHrgc',
  '26FeYTVINJ8swpzlC'
];

const ramdomImage = (arrImages = okImagesIds) => {
  return arrImages[Math.floor(Math.random() * arrImages.length)];
};

const $btnReview = document.querySelector('.js-reviews-toggle');
const author = document.querySelector('#partial-discussion-header .author').textContent;
const pullRequestField = document.querySelector('#pull_request_review_body');
const $formCheckbox = document.querySelector('.form-checkbox input[value="approve"]');
const pullRequestResponseOK = 'Oi @' + author + ', vi seu pull request e parece que está tudo certo!!! \n\n' + ' ![Está tudo certo](https://i.giphy.com/media/' + ramdomImage() + '/giphy.webp)';

$btnReview.click();
pullRequestField.value = pullRequestResponseOK;
$formCheckbox.click();

// Bookmarklet
javascript:(function()%7Bconst%20okImagesIds%20%3D%20%5B'tIeCLkB8geYtW'%2C'GCvktC0KFy9l6'%2C'111ebonMs90YLu'%2C'3oz8xQQP4ahKiyuxHy'%2C'diUKszNTUghVe'%2C'4PSEQpvV5wUpnmpP1l'%2C'a3zqvrH40Cdhu'%2C'Q6gPyUYrCk76g'%2C'vgUFOWBwBkziE'%2C'n0eJLge10ujSM'%2C'QJsP0cTAJhg7O47ub2'%2C'iCOHNz43WB2GQ'%2C'POWvddaQEHrgc'%2C'26FeYTVINJ8swpzlC'%5D%3Bconst%20ramdomImage%20%3D%20(arrImages%20%3D%20okImagesIds)%20%3D%3E%20%7Breturn%20arrImages%5BMath.floor(Math.random()%20*%20arrImages.length)%5D%3B%7D%3Bconst%20%24btnReview%20%3D%20document.querySelector('.js-reviews-toggle')%3Bconst%20author%20%3D%20document.querySelector('%23partial-discussion-header%20.author').textContent%3Bconst%20pullRequestField%20%3D%20document.querySelector('%23pull_request_review_body')%3Bconst%20%24formCheckbox%20%3D%20document.querySelector('.form-checkbox%20input%5Bvalue%3D%22approve%22%5D')%3Bconst%20pullRequestResponseOK%20%3D%20'Oi%20%40'%20%2B%20author%20%2B%20'%2C%20vi%20seu%20pull%20request%20e%20parece%20que%20est%C3%A1%20tudo%20certo!!!%20%5Cn%5Cn'%20%2B%20'%20!%5BEst%C3%A1%20tudo%20certo%5D(https%3A%2F%2Fi.giphy.com%2Fmedia%2F'%20%2B%20ramdomImage()%20%2B%20'%2Fgiphy.webp)'%3B%24btnReview.click()%3BpullRequestField.value%20%3D%20pullRequestResponseOK%3B%24formCheckbox.click()%7D)()
