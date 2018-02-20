/*!
  Author      : Douglas "Amarelo" Lopes
  Author URI  : http://douglasamarelo.com/
  Version     : 1.3.0
*/

// - https://code.tutsplus.com/tutorials/create-bookmarklets-the-right-way--net-18154
// - http://mrcoles.com/bookmarklet/
// - http://bookmarklets.org/maker/

// Script
(function(){
	var htmlItems = document.querySelector('#ghostery-trackerList').innerHTML;

	console.log( '\n\nQuantidade de itens: ' +  htmlItems.match(/>([^<]+)</gi).length );

	console.log( 'Itens: \n' +
		htmlItems.match(/>([^<]+)</gi).map(function( item ) {
			return item.replace('>', '').replace('<', '');
		}).join(', ')
	);

})();


// Bookmarklet