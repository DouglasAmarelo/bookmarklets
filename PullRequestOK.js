/*!
  Author      : Douglas "Amarelo" Lopes
  Author URI  : http://douglasamarelo.com/
  Version     : 1.3.0
*/

// - https://code.tutsplus.com/tutorials/create-bookmarklets-the-right-way--net-18154
// - http://mrcoles.com/bookmarklet/
// - http://bookmarklets.org/maker/

// Script
var okImagesIds = [
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

var ramdomImage = function (arrImages) {
  return arrImages[Math.floor(Math.random() * arrImages.length)];
};

var $btnReview = document.querySelector('.js-reviews-toggle');
var author = document.querySelector('#partial-discussion-header .author')
  .textContent;
var pullRequestField = document.querySelector('#pull_request_review_body');
var $formCheckbox = document.querySelector(
  '.form-checkbox input[value="approve"]'
);
var pullRequestResponseOK =
  'Oi @' +
  author +
  ', vi seu pull request e parece que está tudo certo!!! \n\n' +
  ' ![Está tudo certo](https://i.giphy.com/media/' +
  ramdomImage(okImagesIds) +
  '/giphy.webp)';

$btnReview.click();
pullRequestField.value = pullRequestResponseOK;
$formCheckbox.click();

// Bookmarklet
javascript: var okImagesIds = [
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
  ],
  ramdomImage = function (e) {
    return e[Math.floor(Math.random() * e.length)];
  },
  $btnReview = document.querySelector('.js-reviews-toggle'),
  author = document.querySelector('#partial-discussion-header .author')
    .textContent,
  pullRequestField = document.querySelector('#pull_request_review_body'),
  $formCheckbox = document.querySelector(
    '.form-checkbox input[value="approve"]'
  ),
  pullRequestResponseOK =
    'Oi @' +
    author +
    ', vi seu pull request e parece que está tudo certo!!! \n\n ![Está tudo certo](https://i.giphy.com/media/' +
    ramdomImage(okImagesIds) +
    '/giphy.webp)';
$btnReview.click(),
  (pullRequestField.value = pullRequestResponseOK),
  $formCheckbox.click();
