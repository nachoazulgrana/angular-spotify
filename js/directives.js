(function () {
	angular.module('spotify.directives', [])
		.directive('artistData', function () {
			return {
				restrict: 'E',
				templateUrl: 'partials/artist-data.html'
			};
		})

		.directive('albumsData', function () {
			return {
				restrict: 'E',
				templateUrl: 'partials/albums-data.html'
			};
		})

		.directive('popularData', function () {
			return {
				restrict: 'E',
				templateUrl: 'partials/popular-data.html'
			};
		})

		.directive('commentsData', function () {
			return {
				restrict: 'E',
				templateUrl: 'partials/comments-data.html',
				controller: function () {
					this.comments = [];
					this.comment = {};
					this.show = false;

					this.toggle = function () {
						this.show = !this.show;
					};

					this.anonymousChanged = function () {
						if (this.comment.anonymous) {
							this.comment.email = "";
						}
					};

					this.addComment = function () {
						this.comment.date = Date.now();
						this.comments.push(this.comment);
						this.comment = {};
					};	 
				},
				controllerAs: 'cmtsCtrl'
			};
		});
}());