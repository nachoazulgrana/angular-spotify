(function () {
	var app = angular.module('spotify', []);

	app.controller('ArtistController', function () {
		this.tab = 1;

		this.artist = {
			name: "La Beriso",
			genere: [ "Rock", "Rocanrol" ],
			albums: [ "SoloCanciones", "DescartandoMiserias", "Culpable", "Historias"],
			description: "La Beriso es una banda de Rock and roll independiente formada en Avellaneda, Buenos Aires, Argentina, en el año 1998. Su estilo, es representativo del rock callejero y urbano.",
			popular: [ "Madrugada", "No Me Olvides", "Traicionero", "Ella", "Otra Noche Más" ],
			stats: {
				madrugada: 859390,
				nomeolvides: 943642,
				traicionero: 544083,
				ella: 576643,
				otranochemas: 462914
			}
		};

		this.selectTab = function (tab) {
			this.tab = tab;
		};

	});


})();