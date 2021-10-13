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
  'Od0QRnzwRBYmDU3eEO',
  '73Y6EEJqbyGovenlLE',
  'Rkoat5KMaw2aOHDduz',
  '3osxYdek8wYWCOLgT6',
  'jL6OeIhk3zPi',
  'uiMIJMFYgRaAz5Pcb7',
  'AGOPaltgJ2pBC',
  'IpyB5ftX2De2kMMqyY',
];

var ramdomImage = function (arrImages) {
  return arrImages[Math.floor(Math.random() * arrImages.length)];
};

var $btnReview = document.querySelector('.js-reviews-toggle');
var author = document.querySelector(
  '#partial-discussion-header .author'
).textContent;
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
javascript:void%20function(){var%20e=[%22tIeCLkB8geYtW%22,%22GCvktC0KFy9l6%22,%22111ebonMs90YLu%22,%223oz8xQQP4ahKiyuxHy%22,%22diUKszNTUghVe%22,%224PSEQpvV5wUpnmpP1l%22,%22a3zqvrH40Cdhu%22,%22Q6gPyUYrCk76g%22,%22vgUFOWBwBkziE%22,%22n0eJLge10ujSM%22,%22QJsP0cTAJhg7O47ub2%22,%22iCOHNz43WB2GQ%22,%22POWvddaQEHrgc%22,%2226FeYTVINJ8swpzlC%22,%22xpdGL7GkPt5h6%22,%22bORG0Mkf56oGQ%22,%223o6UB3VhArvomJHtdK%22,%22nXxOjZrbnbRxS%22,%22f6VfCFyOL5KmiICskp%22,%22hXDrTueJWAscK3xWQ2%22,%22NEvPzZ8bd1V4Y%22,%223WY8qMF9l3ldK%22,%22mQK3uf6KC88De%22,%22TKACZoi3zPkq6fGKVp%22,%2248PRoiVHcsuMfByB9s%22,%223ohzdIuqJoo8QdKlnW%22,%22DffShiJ47fPqM%22,%2213rdfktDFVa7TO%22,%22kwCLw42hH2cxvIywIi%22,%22xUySTUZ8A2RJBQitEc%22,%22aCrRttmzK1jKo%22,%2211a8FLrVeoLnna%22,%2213ZHjidRzoi7n2%22,%223ov9k01Y5IKizNmC7S%22,%22kRXnZwKrPTwVq%22,%22HjPbLbmep2aJO%22,%22cstHEo3umAADEfFAvZ%22,%22KEYbcgR8oKQzwpwvLU%22,%228FuLs6fBgzP17yjZCu%22,%222Ur80AinbjjmvAgKTs%22,%229x8BBIQ3L6WY8hlPbd%22,%22Od0QRnzwRBYmDU3eEO%22,%2273Y6EEJqbyGovenlLE%22,%22Rkoat5KMaw2aOHDduz%22,%223osxYdek8wYWCOLgT6%22,%22jL6OeIhk3zPi%22,%22uiMIJMFYgRaAz5Pcb7%22,%22AGOPaltgJ2pBC%22,%22IpyB5ftX2De2kMMqyY%22],o=function(e){return%20e[Math.floor(Math.random()*e.length)]},t=document.querySelector(%22.js-reviews-toggle%22),u=document.querySelector(%22%23partial-discussion-header%20.author%22).textContent,r=document.querySelector(%22%23pull_request_review_body%22),i=document.querySelector('.form-checkbox%20input[value=%22approve%22]'),c=%22Oi%20%40%22+u+%22,%20vi%20seu%20pull%20request%20e%20parece%20que%20está%20tudo%20certo!!!%20\n\n%20![Está%20tudo%20certo](https://i.giphy.com/media/%22+o(e)+%22/giphy.webp)%22;t.click(),r.value=c,i.click()}();
