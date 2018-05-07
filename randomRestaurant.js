(function(){
	'use strict';

	var restaurants = [
		'Benedito',
		'Madero',
		'Bassano',
		'Mulher que Dança',
		'Karinas'
	];

	function randomRestaurant() {
		var i = Math.floor( Math.random() * restaurants.length );
		return restaurants[i]
	}

	console.log(randomRestaurant());
})()