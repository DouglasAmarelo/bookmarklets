/*!
  Author      : Douglas "Amarelo" Lopes
  Author URI  : http://douglasamarelo.com/
  Version     : 1.3.0
*/

// - https://code.tutsplus.com/tutorials/create-bookmarklets-the-right-way--net-18154
// - http://mrcoles.com/bookmarklet/

// Script
(function(){
	var loja = window.jsnomeLoja,
		css = $('link[href*="' + loja + '2-style.css"]'),
		cssHref = css.attr('href'),
		cssVersion = 1;

	if( cssHref.indexOf('?v=') >= 0 ){
		cssVersion = parseInt(cssHref.match(/v=\d+/)[0].replace('v=',''));
		cssVersion++;
		cssHref = cssHref.split('?')[0];
	}

	css.attr('href', cssHref + '?v=' + cssVersion);
})();

// Bookmarklet
javascript:(function()%7B(function()%7Bvar%20loja%20%3D%20window.jsnomeLoja%2Ccss%20%3D%20%24('link%5Bhref*%3D%22'%20%2B%20loja%20%2B%20'2-style.css%22%5D')%2CcssHref%20%3D%20css.attr('href')%2CcssVersion%20%3D%201%3Bif(%20cssHref.indexOf('%3Fv%3D')%20%3E%3D%200%20)%7BcssVersion%20%3D%20parseInt(cssHref.match(%2Fv%3D%5Cd%2B%2F)%5B0%5D.replace('v%3D'%2C''))%3BcssVersion%2B%2B%3BcssHref%20%3D%20cssHref.split('%3F')%5B0%5D%3B%7Dcss.attr('href'%2C%20cssHref%20%2B%20'%3Fv%3D'%20%2B%20cssVersion)%3B%7D)()%7D)()