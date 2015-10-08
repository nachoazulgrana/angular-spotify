(function () {
	angular.module('spotify.controllers', [])
		.controller('ArtistsController', ['$scope', '$http', function ($scope, $http){
			$scope.artists = [];

			$http.get('/artists.json')
				.success(function (data) {
					$scope.artists = data;
				});
		}])

		.controller('ArtistController', ['$scope', function ($scope) {
			$scope.artist = {
				name: "La Beriso",
				genere: [ "Rock", "Rocanrol" ],
				albums: [ "SoloCanciones", "DescartandoMiserias", "Culpable", "Historias"],
				description: "La Beriso es una banda de Rock and roll independiente formada en Avellaneda, Buenos Aires, Argentina, en el año 1998. Su estilo, es representativo del rock callejero y urbano.",
				popular: [ "Madrugada", "No Me Olvides", "Traicionero", "Ella", "Otra Noche Más" ],
				stats: {
					uno: 859390,
					dos: 943642,
					tres: 544083,
					cuatro: 576643,
					cinco: 462914
				}
			};
		}])

		.controller('TabsController', function () {
			this.tab = 1;

			this.selectTab = function (tab) {
				this.tab = tab;
			};
		});
		
})();