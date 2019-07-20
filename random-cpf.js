/*!
  Author      : Douglas "Amarelo" Lopes
  Author URI  : http://douglasamarelo.com/
  Version     : 1.3.0
*/

// - https://code.tutsplus.com/tutorials/create-bookmarklets-the-right-way--net-18154
// - http://bookmarklets.org/maker/
// - http://mrcoles.com/bookmarklet/

// Script
(function(){
	'use strict';

	const cpfs = [
		'92890487008',
		'90339169087',
		'61275756050'
	];

	const getRandomCPF = function() {
		const cpf = cpfs[Math.floor(Math.random() * cpfs.length)];
		return cpf;
	}

	prompt('CPF', getRandomCPF());
})();

// Bookmarklet
