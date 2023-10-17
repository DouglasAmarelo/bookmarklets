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
  'ar4x1w44umngk',
  'l0Iy7r2oR1L6MfKWQ',
  'tCV2LrPPYfqCY',
  'Z0uKzOZ11xTJm',
  'IdD98kNkrI8EVFGocX',
  'ulAzjbcBtwDSZqYrZQ',
  'FsWBTQ0M7rEs5SkFMk',
  'S6qkS0ETvel6EZat45',
  'pzTDF5eeYBVUO6Sgyf',
  'm8ou5Eny9qoObXTHm4',
  'fSGurTVkZbLeTQusvP',
  'YRuFixSNWFVcXaxpmX',
  'bKBM7H63PIykM',
  'WR8XvgP6EoJBB0H41h',
  '5eFFiVzRjeeRCEeTAP',
  'cPkUnVPxfmkMWzZfzx',
  'l3vQYfr7AHKzcEu9W',
  'hQFfgnzV03wsQ9Lrzy',
  'Jg1kqGHqOwiJcjtOSK',
  'qlefm8VHyu7ZpCgfeg',
  'k6iq3IZ8qGKIlCM6R8',
  'pbV5lYogNRZ2Re4kzG',
  'dNoi1L4IjK83Ad0E8Z',
  'dntsQlPTDzRuXEGIzY',
  '10spcFioEOY7zG',
  'jR4p5oRNxG7sSLmKgb',
  'KTxwI0erYLwXP78GNQ',
  'c4rB7DMXKgktG',
  '3q3QK6KyDVUBzih7hB',
  'b5WsjNpMc35za',
  'weUJO57AKHWfK',
  'AGOPaltgJ2pBC',
  'AGOPaltgJ2pBC',
  'Kzvsru1JqQg4E',
  'brDwVn5kGIz3W',
  'BzeblrT5c3rq0',
  'l2R0dZTDEZ9rS2O6k',
  'm9xBNF76A2k00',
  'MERSjwRwFEN0rMkh9J',
  'dUa0YL1AZlevEpLrEx',
  'lnybhKvp3I29BbzmOC',
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
  '#pull_requests_submit_review input[value="approve"]'
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
javascript:void%20function(){var%20e=[%22tIeCLkB8geYtW%22,%22GCvktC0KFy9l6%22,%22111ebonMs90YLu%22,%223oz8xQQP4ahKiyuxHy%22,%22diUKszNTUghVe%22,%224PSEQpvV5wUpnmpP1l%22,%22a3zqvrH40Cdhu%22,%22Q6gPyUYrCk76g%22,%22vgUFOWBwBkziE%22,%22n0eJLge10ujSM%22,%22QJsP0cTAJhg7O47ub2%22,%22iCOHNz43WB2GQ%22,%22POWvddaQEHrgc%22,%2226FeYTVINJ8swpzlC%22,%22xpdGL7GkPt5h6%22,%22bORG0Mkf56oGQ%22,%223o6UB3VhArvomJHtdK%22,%22nXxOjZrbnbRxS%22,%22f6VfCFyOL5KmiICskp%22,%22hXDrTueJWAscK3xWQ2%22,%22NEvPzZ8bd1V4Y%22,%223WY8qMF9l3ldK%22,%22mQK3uf6KC88De%22,%22TKACZoi3zPkq6fGKVp%22,%2248PRoiVHcsuMfByB9s%22,%223ohzdIuqJoo8QdKlnW%22,%22DffShiJ47fPqM%22,%2213rdfktDFVa7TO%22,%22kwCLw42hH2cxvIywIi%22,%22xUySTUZ8A2RJBQitEc%22,%22aCrRttmzK1jKo%22,%2211a8FLrVeoLnna%22,%2213ZHjidRzoi7n2%22,%223ov9k01Y5IKizNmC7S%22,%22kRXnZwKrPTwVq%22,%22HjPbLbmep2aJO%22,%22cstHEo3umAADEfFAvZ%22,%22KEYbcgR8oKQzwpwvLU%22,%228FuLs6fBgzP17yjZCu%22,%222Ur80AinbjjmvAgKTs%22,%229x8BBIQ3L6WY8hlPbd%22,%22Od0QRnzwRBYmDU3eEO%22,%2273Y6EEJqbyGovenlLE%22,%22Rkoat5KMaw2aOHDduz%22,%223osxYdek8wYWCOLgT6%22,%22jL6OeIhk3zPi%22,%22uiMIJMFYgRaAz5Pcb7%22,%22AGOPaltgJ2pBC%22,%22IpyB5ftX2De2kMMqyY%22,%22ar4x1w44umngk%22,%22l0Iy7r2oR1L6MfKWQ%22,%22tCV2LrPPYfqCY%22,%22Z0uKzOZ11xTJm%22,%22IdD98kNkrI8EVFGocX%22,%22ulAzjbcBtwDSZqYrZQ%22,%22FsWBTQ0M7rEs5SkFMk%22,%22S6qkS0ETvel6EZat45%22,%22pzTDF5eeYBVUO6Sgyf%22,%22m8ou5Eny9qoObXTHm4%22,%22fSGurTVkZbLeTQusvP%22,%22YRuFixSNWFVcXaxpmX%22,%22bKBM7H63PIykM%22,%22WR8XvgP6EoJBB0H41h%22,%225eFFiVzRjeeRCEeTAP%22,%22cPkUnVPxfmkMWzZfzx%22,%22l3vQYfr7AHKzcEu9W%22,%22hQFfgnzV03wsQ9Lrzy%22,%22Jg1kqGHqOwiJcjtOSK%22,%22qlefm8VHyu7ZpCgfeg%22,%22k6iq3IZ8qGKIlCM6R8%22,%22pbV5lYogNRZ2Re4kzG%22,%22dNoi1L4IjK83Ad0E8Z%22,%22dntsQlPTDzRuXEGIzY%22,%2210spcFioEOY7zG%22,%22jR4p5oRNxG7sSLmKgb%22,%22KTxwI0erYLwXP78GNQ%22,%22c4rB7DMXKgktG%22,%223q3QK6KyDVUBzih7hB%22,%22b5WsjNpMc35za%22,%22weUJO57AKHWfK%22,%22AGOPaltgJ2pBC%22,%22AGOPaltgJ2pBC%22,%22Kzvsru1JqQg4E%22,%22brDwVn5kGIz3W%22,%22BzeblrT5c3rq0%22,%22l2R0dZTDEZ9rS2O6k%22,%22m9xBNF76A2k00%22,%22MERSjwRwFEN0rMkh9J%22,%22dUa0YL1AZlevEpLrEx%22,%22lnybhKvp3I29BbzmOC%22],o=function(e){return%20e[Math.floor(Math.random()*e.length)]},r=document.querySelector(%22.js-reviews-toggle%22),t=document.querySelector(%22%23partial-discussion-header%20.author%22).textContent,u=document.querySelector(%22%23pull_request_review_body%22),c=document.querySelector('.form-checkbox%20input[value=%22approve%22]'),i=%22Oi%20%40%22+t+%22,%20vi%20seu%20pull%20request%20e%20parece%20que%20está%20tudo%20certo!!!%20\n\n%20![Está%20tudo%20certo](https://i.giphy.com/media/%22+o(e)+%22/giphy.webp)%22;r.click(),u.value=i,c.click()}();
