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
	const $btnChave = document.querySelector('#loginWithAccessKeyBtn');
	const $inputEmail = document.querySelector('#appendedInputButton');
	const $btnConfirmar = document.querySelector('#sendAccessKeyBtn');

	$btnChave.click();
	$inputEmail.value = 'douglas@jussi.com.br';
	$btnConfirmar.click();
})();


// Bookmarklet
javascript:void%20function(){(function(){const%20e=document.querySelector(%22%23loginWithAccessKeyBtn%22),c=document.querySelector(%22%23appendedInputButton%22),n=document.querySelector(%22%23sendAccessKeyBtn%22);e.click(),c.value=%22douglas%40jussi.com.br%22,n.click()})()}();
