/*!
  Author      : Douglas "Amarelo" Lopes
  Author URI  : http://douglasamarelo.com/
  Version     : 1.0.0
*/

// - https://code.tutsplus.com/tutorials/create-bookmarklets-the-right-way--net-18154
// - http://mrcoles.com/bookmarklet/
// - http://bookmarklets.org/maker/

// Script
(function() {
	var inputs = document.querySelectorAll('input[type=password]');
	inputs.forEach(function(item) {
		item.setAttribute('type', 'text');
	});
})();


// Bookmarklet
javascript:(function(){var%20t=document.querySelectorAll(%22input[type=password]%22);t.forEach(function(t){t.setAttribute(%22type%22,%22text%22)})})();
