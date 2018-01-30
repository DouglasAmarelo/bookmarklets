var restaurants = [
	'Benedito',
	'Madero',
	'Bassano',
	'Mulher que Dança',
	'Karinas'
];

function randomRestaurant() {
	var i = Math.floor( Math.random() * restaurants.length );
	console.log(i);

	return restaurants[i]
}