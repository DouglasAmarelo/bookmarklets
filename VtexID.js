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
	var vtextUI       = document.querySelector('.vtexIdUI'),
		els           = document.querySelectorAll('#vtexIdUI-auth-selector .vtexIdUI-providers-list li'),
		inputEmail    = document.querySelector('#inputEmail'),
		inputPassword = document.querySelector('#inputPassword'),
		buttonLogin   = document.querySelector('#classicLoginBtn');

	if( vtextUI ) {
		vtextUI.style.height = '420px';
	}

	if( els ) {
		els.forEach(function(el){
			el.classList.remove('ng-hide');
		});
	}

	inputEmail.value = 'douglas@jussi.com.br';
	inputPassword.value = 'W3bD3v456';
	buttonLogin.click();
})();


// Bookmarklet
javascript:(function()%7B(function()%7Bvar%20vtextUI%20%20%20%20%20%20%20%3D%20document.querySelector('.vtexIdUI')%2Cels%20%20%20%20%20%20%20%20%20%20%20%3D%20document.querySelectorAll('%23vtexIdUI-auth-selector%20.vtexIdUI-providers-list%20li')%2CinputEmail%20%20%20%20%3D%20document.querySelector('%23inputEmail')%2CinputPassword%20%3D%20document.querySelector('%23inputPassword')%2CbuttonLogin%20%20%20%3D%20document.querySelector('%23classicLoginBtn')%3Bif(%20vtextUI%20)%20%7BvtextUI.style.height%20%3D%20'420px'%3B%7Dif(%20els%20)%20%7Bels.forEach(function(el)%7Bel.classList.remove('ng-hide')%3B%7D)%3B%7DinputEmail.value%20%3D%20'douglas%40jussi.com.br'%3BinputPassword.value%20%3D%20'W3bD3v456'%3BbuttonLogin.click()%3B%7D)()%7D)()