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

var email = 'd.lopes.nascimento@gmail.com';

document.addEventListener('copy', function(event) {
	event.preventDefault();
	if (event.clipboardData) {
		event.clipboardData.setData('text/plain', email);
	}
});

document.execCommand('copy');



// Bookmarklet
javascript:(function()%7Bvar%20email%20%3D%20'd.lopes.nascimento%40gmail.com'%3Bdocument.addEventListener('copy'%2C%20function(event)%20%7Bevent.preventDefault()%3Bif%20(event.clipboardData)%20%7Bevent.clipboardData.setData('text%2Fplain'%2C%20email)%3B%7D%7D)%3Bdocument.execCommand('copy')%7D)()