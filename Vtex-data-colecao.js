/*!
  Author     : Douglas "Amarelo" Lopes
  Author URI : http://douglasamarelo.com/
  Version    : 1.3.0
*/

// - https://code.tutsplus.com/tutorials/create-bookmarklets-the-right-way--net-18154
// - http://mrcoles.com/bookmarklet/
// - http://bookmarklets.org/maker/

// Script
(function() {
	var endColectionDate = window.prompt('Informe a data no formato: dd/mm/aaaa');
	var inputDate = document.querySelector('#dateToShelf')
	inputDate.value = endColectionDate;
})();

// Bookmarklet
javascript:void%20function(){(function(){var%20o=window.prompt(%22Informe%20a%20data%20no%20formato:%20dd/mm/aaaa%22),a=document.querySelector(%22%23dateToShelf%22);a.value=o})()}();