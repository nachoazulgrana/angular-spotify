(function () {

	var app = angular.module('spotify', [
		'ngRoute',
		'spotify.controllers',
		'spotify.filters',
		'spotify.directives'
	]);

	app.config(['$routeProvider', function ($routeProvider) {

		$routeProvider
			.when('/', {
				templateUrl: 'views/artists.html',
				controller: 'ArtistsController'
			})
			.when('/artist/:id', {
				templateUrl: 'views/artist.html',
				controller: 'ArtistController',
				controllerAs: 'artCtrl'
			})
			.otherwise({
				redirectTo: '/'
			});

	}]);

})();