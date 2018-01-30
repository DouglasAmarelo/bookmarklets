/*!
  Author      : Douglas "Amarelo" Lopes
  Author URI  : http://douglasamarelo.com/
  Version     : 1.3.0
*/

// - https://code.tutsplus.com/tutorials/create-bookmarklets-the-right-way--net-18154
// - http://mrcoles.com/bookmarklet/

// Script
// var myEmail = 'd.lopes.nascimento@gmail.com';
// window.copy(myEmail);

prompt('Email', 'd.lopes.nascimento@gmail.com');


// Bookmarklet
javascript:(function()%7Bprompt('Email'%2C%20'd.lopes.nascimento%40gmail.com')%7D)()