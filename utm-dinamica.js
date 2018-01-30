// UTM dinâmica

var link = location.href;

var link2 = link.split('=');

if (!link2[1] ) {
	location.href = link + '?utm_teste=0';
	// console.log(link + 'utm_teste=0');
}
else {
	var link3 = parseInt(link2[1]) + parseInt(1);

	// console.log(link2[0] + '=' + link3);
	location.href = link2[0] + '=' + link3;
}



// Código atalho
javascript:(function(){
	var link = location.href;
	var link2 = link.split('=');

	if (!link2[1] ) {
		location.href = link + '?utm_teste=0';
	}
	else {
		var link3 = parseInt(link2[1]) + parseInt(1);

		location.href = link2[0] + '=' + link3;
	}

})();