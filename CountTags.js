/*!
  Author      : Douglas "Amarelo" Lopes
  Author URI  : http://douglasamarelo.com/
  Version     : 1.3.0
*/

// - https://code.tutsplus.com/tutorials/create-bookmarklets-the-right-way--net-18154
// - http://mrcoles.com/bookmarklet/
// - http://bookmarklets.org/maker/

// Count tags
(function(){
	var tagScript = document.querySelectorAll('script');
	var tagCss    = document.querySelectorAll('link');
	var tagIframe = document.querySelectorAll('iframe');

	console.log('==== Contador de tag\'s ====');
	console.log('JS     | ' + tagScript.length);
	console.log('CSS    | ' + tagCss.length);
	console.log('Iframe | ' + tagIframe.length);
	console.log('===========================');
})();


// Count SEO Heading Tags
(function(){
	var tagH1 = document.querySelectorAll('h1');
	var tagH2 = document.querySelectorAll('h2');
	var tagH3 = document.querySelectorAll('h3');
	var tagH4 = document.querySelectorAll('h4');
	var tagH5 = document.querySelectorAll('h5');

	function showTags(tag) {
		if( tag.length > 0 ){
			for( var i = 0; i < tag.length; i++ ) {
				console.log(tag[i].tagName + ' | ' + tag.length + ' | ' + tag[i].textContent);
			}
		}
	}

	console.log('\n \/\/ Heading\'s');
	showTags(tagH1);
	showTags(tagH2);
	showTags(tagH3);
	showTags(tagH4);
	showTags(tagH5);
	console.log('\n');
})();


/*

var tagH2 = document.querySelectorAll('h2');
var resultado = {};

for (const prop in tagH2) {
	if (tagH2.hasOwnProperty(prop)) {
		const element = tagH2[prop];
		resultado[ Number( prop ) + 1 ] = element.textContent.replace(/^\s+/gi, '').replace(/\s+$/gi, '');
	}
}

console.log(tagH2[0].tagName + ' | ' + tagH2.length + ' | ' + resultado);

*/






// Bookmarklet
// Count Tags
javascript:void%20function(){(function(){var%20e=document.querySelectorAll(%22script%22),l=document.querySelectorAll(%22link%22),o=document.querySelectorAll(%22iframe%22),n=document.querySelectorAll(%22h1%22),c=document.querySelectorAll(%22h2%22),t=document.querySelectorAll(%22h3%22),g=document.querySelectorAll(%22h3%22),r=document.querySelectorAll(%22h3%22);console.log(%22====%20Contador%20de%20tag's%20====%22),console.log(%22JS%20%20%20%20%20|%20%22+e.length),console.log(%22CSS%20%20%20%20|%20%22+l.length),console.log(%22Iframe%20|%20%22+o.length),console.log(%22\n%20//%20Heading's%22),console.log(%22H1%20|%20%22+n.length),console.log(%22H2%20|%20%22+c.length),console.log(%22H3%20|%20%22+t.length),console.log(%22H4%20|%20%22+g.length),console.log(%22H5%20|%20%22+r.length),console.log(%22===========================%22)})()}();