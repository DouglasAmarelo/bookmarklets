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
var $btnPreview = document.querySelector('.js-preview-tab');
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
$btnPreview.click();

// Bookmarklet
javascript:(function()%7Bvar%20okImagesIds%20%3D%20%5B'tIeCLkB8geYtW'%2C'GCvktC0KFy9l6'%2C'111ebonMs90YLu'%2C'3oz8xQQP4ahKiyuxHy'%2C'diUKszNTUghVe'%2C'4PSEQpvV5wUpnmpP1l'%2C'a3zqvrH40Cdhu'%2C'Q6gPyUYrCk76g'%2C'vgUFOWBwBkziE'%2C'n0eJLge10ujSM'%2C'QJsP0cTAJhg7O47ub2'%2C'iCOHNz43WB2GQ'%2C'POWvddaQEHrgc'%2C'26FeYTVINJ8swpzlC'%2C'xpdGL7GkPt5h6'%2C'bORG0Mkf56oGQ'%2C'3o6UB3VhArvomJHtdK'%2C'nXxOjZrbnbRxS'%2C'f6VfCFyOL5KmiICskp'%2C'hXDrTueJWAscK3xWQ2'%2C'NEvPzZ8bd1V4Y'%2C'3WY8qMF9l3ldK'%2C'mQK3uf6KC88De'%2C'TKACZoi3zPkq6fGKVp'%2C'48PRoiVHcsuMfByB9s'%2C'3ohzdIuqJoo8QdKlnW'%2C'DffShiJ47fPqM'%2C'13rdfktDFVa7TO'%2C'kwCLw42hH2cxvIywIi'%2C'xUySTUZ8A2RJBQitEc'%2C'aCrRttmzK1jKo'%2C'11a8FLrVeoLnna'%2C'13ZHjidRzoi7n2'%2C'3ov9k01Y5IKizNmC7S'%2C'kRXnZwKrPTwVq'%2C'HjPbLbmep2aJO'%2C'cstHEo3umAADEfFAvZ'%2C'KEYbcgR8oKQzwpwvLU'%2C'8FuLs6fBgzP17yjZCu'%2C'2Ur80AinbjjmvAgKTs'%2C'9x8BBIQ3L6WY8hlPbd'%2C'Od0QRnzwRBYmDU3eEO'%2C'73Y6EEJqbyGovenlLE'%2C'Rkoat5KMaw2aOHDduz'%2C'3osxYdek8wYWCOLgT6'%2C'jL6OeIhk3zPi'%2C'uiMIJMFYgRaAz5Pcb7'%2C'AGOPaltgJ2pBC'%2C'IpyB5ftX2De2kMMqyY'%2C'ar4x1w44umngk'%2C'l0Iy7r2oR1L6MfKWQ'%2C'tCV2LrPPYfqCY'%2C'Z0uKzOZ11xTJm'%2C'IdD98kNkrI8EVFGocX'%2C'ulAzjbcBtwDSZqYrZQ'%2C'FsWBTQ0M7rEs5SkFMk'%2C'S6qkS0ETvel6EZat45'%2C'pzTDF5eeYBVUO6Sgyf'%2C'm8ou5Eny9qoObXTHm4'%2C'fSGurTVkZbLeTQusvP'%2C'YRuFixSNWFVcXaxpmX'%2C'bKBM7H63PIykM'%2C'WR8XvgP6EoJBB0H41h'%2C'5eFFiVzRjeeRCEeTAP'%2C'cPkUnVPxfmkMWzZfzx'%2C'l3vQYfr7AHKzcEu9W'%2C'hQFfgnzV03wsQ9Lrzy'%2C'Jg1kqGHqOwiJcjtOSK'%2C'qlefm8VHyu7ZpCgfeg'%2C'k6iq3IZ8qGKIlCM6R8'%2C'pbV5lYogNRZ2Re4kzG'%2C'dNoi1L4IjK83Ad0E8Z'%2C'10spcFioEOY7zG'%2C'jR4p5oRNxG7sSLmKgb'%2C'KTxwI0erYLwXP78GNQ'%2C'c4rB7DMXKgktG'%2C'3q3QK6KyDVUBzih7hB'%2C'b5WsjNpMc35za'%2C'weUJO57AKHWfK'%2C'AGOPaltgJ2pBC'%2C'AGOPaltgJ2pBC'%2C'Kzvsru1JqQg4E'%2C'brDwVn5kGIz3W'%2C'BzeblrT5c3rq0'%2C'l2R0dZTDEZ9rS2O6k'%2C'm9xBNF76A2k00'%2C'MERSjwRwFEN0rMkh9J'%2C'dUa0YL1AZlevEpLrEx'%2C'lnybhKvp3I29BbzmOC'%2C%5D%3Bvar%20ramdomImage%20%3D%20function%20(arrImages)%20%7Breturn%20arrImages%5BMath.floor(Math.random()%20*%20arrImages.length)%5D%3B%7D%3Bvar%20%24btnReview%20%3D%20document.querySelector('.js-reviews-toggle')%3Bvar%20%24btnPreview%20%3D%20document.querySelector('.js-preview-tab')%3Bvar%20author%20%3D%20document.querySelector('%23partial-discussion-header%20.author').textContent%3Bvar%20pullRequestField%20%3D%20document.querySelector('%23pull_request_review_body')%3Bvar%20%24formCheckbox%20%3D%20document.querySelector('%23pull_requests_submit_review%20input%5Bvalue%3D%22approve%22%5D')%3Bvar%20pullRequestResponseOK%20%3D'Oi%20%40'%20%2Bauthor%20%2B'%2C%20vi%20seu%20pull%20request%20e%20parece%20que%20est%C3%A1%20tudo%20certo!!!%20%5Cn%5Cn'%20%2B'%20!%5BEst%C3%A1%20tudo%20certo%5D(https%3A%2F%2Fi.giphy.com%2Fmedia%2F'%20%2BramdomImage(okImagesIds)%20%2B'%2Fgiphy.webp)'%3B%24btnReview.click()%3BpullRequestField.value%20%3D%20pullRequestResponseOK%3B%24formCheckbox.click()%3B%24btnPreview.click()%7D)()
