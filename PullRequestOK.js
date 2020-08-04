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
  '26FeYTVINJ8swpzlC',
  'xpdGL7GkPt5h6',
  'bORG0Mkf56oGQ',
  '3o6UB3VhArvomJHtdK',
  'nXxOjZrbnbRxS',
  'f6VfCFyOL5KmiICskp',
  'hXDrTueJWAscK3xWQ2',
  'NEvPzZ8bd1V4Y',
  '3WY8qMF9l3ldK',
  'mQK3uf6KC88De',
  'TKACZoi3zPkq6fGKVp',
  '48PRoiVHcsuMfByB9s',
  '3ohzdIuqJoo8QdKlnW',
  'DffShiJ47fPqM',
  '13rdfktDFVa7TO',
  'kwCLw42hH2cxvIywIi',
  'xUySTUZ8A2RJBQitEc',
  'aCrRttmzK1jKo',
  '11a8FLrVeoLnna',
  '13ZHjidRzoi7n2',
  '3ov9k01Y5IKizNmC7S',
  'kRXnZwKrPTwVq',
  'HjPbLbmep2aJO',
  'cstHEo3umAADEfFAvZ',
  'KEYbcgR8oKQzwpwvLU',
  '8FuLs6fBgzP17yjZCu',
  '2Ur80AinbjjmvAgKTs',
  '9x8BBIQ3L6WY8hlPbd',
];

const ramdomImage = function (arrImages = okImagesIds) {
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
javascript:(function()%7B%2F%2F%20Scriptconst%20okImagesIds%20%3D%20%5B'tIeCLkB8geYtW'%2C'GCvktC0KFy9l6'%2C'111ebonMs90YLu'%2C'3oz8xQQP4ahKiyuxHy'%2C'diUKszNTUghVe'%2C'4PSEQpvV5wUpnmpP1l'%2C'a3zqvrH40Cdhu'%2C'Q6gPyUYrCk76g'%2C'vgUFOWBwBkziE'%2C'n0eJLge10ujSM'%2C'QJsP0cTAJhg7O47ub2'%2C'iCOHNz43WB2GQ'%2C'POWvddaQEHrgc'%2C'26FeYTVINJ8swpzlC'%2C'xpdGL7GkPt5h6'%2C'bORG0Mkf56oGQ'%2C'3o6UB3VhArvomJHtdK'%2C'nXxOjZrbnbRxS'%2C'f6VfCFyOL5KmiICskp'%2C'hXDrTueJWAscK3xWQ2'%2C'NEvPzZ8bd1V4Y'%2C'3WY8qMF9l3ldK'%2C'mQK3uf6KC88De'%2C'TKACZoi3zPkq6fGKVp'%2C'48PRoiVHcsuMfByB9s'%2C'3ohzdIuqJoo8QdKlnW'%2C'DffShiJ47fPqM'%2C'13rdfktDFVa7TO'%2C'kwCLw42hH2cxvIywIi'%2C'xUySTUZ8A2RJBQitEc'%2C'aCrRttmzK1jKo'%2C'11a8FLrVeoLnna'%2C'13ZHjidRzoi7n2'%2C'3ov9k01Y5IKizNmC7S'%2C'kRXnZwKrPTwVq'%2C'HjPbLbmep2aJO'%2C'cstHEo3umAADEfFAvZ'%2C'KEYbcgR8oKQzwpwvLU'%2C'8FuLs6fBgzP17yjZCu'%2C'2Ur80AinbjjmvAgKTs'%2C'9x8BBIQ3L6WY8hlPbd'%2C%5D%3Bconst%20ramdomImage%20%3D%20function%20(arrImages%20%3D%20okImagesIds)%20%7Breturn%20arrImages%5BMath.floor(Math.random()%20*%20arrImages.length)%5D%3B%7D%3Bconst%20%24btnReview%20%3D%20document.querySelector('.js-reviews-toggle')%3Bconst%20author%20%3D%20document.querySelector('%23partial-discussion-header%20.author').textContent%3Bconst%20pullRequestField%20%3D%20document.querySelector('%23pull_request_review_body')%3Bconst%20%24formCheckbox%20%3D%20document.querySelector('.form-checkbox%20input%5Bvalue%3D%22approve%22%5D')%3Bconst%20pullRequestResponseOK%20%3D%20'Oi%20%40'%20%2B%20author%20%2B%20'%2C%20vi%20seu%20pull%20request%20e%20parece%20que%20est%C3%A1%20tudo%20certo!!!%20%5Cn%5Cn'%20%2B%20'%20!%5BEst%C3%A1%20tudo%20certo%5D(https%3A%2F%2Fi.giphy.com%2Fmedia%2F'%20%2B%20ramdomImage()%20%2B%20'%2Fgiphy.webp)'%3B%24btnReview.click()%3BpullRequestField.value%20%3D%20pullRequestResponseOK%3B%24formCheckbox.click()%7D)()
