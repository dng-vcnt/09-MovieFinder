(function() {
    'use strict';

    angular
        .module('movieFinderApp')
        .factory('movieFactory', movieFactory);

    movieFactory.$inject = ['$http', '$q'];

    /* @ngInject */
    function movieFactory($http, $q) {
        var service = {
            getMovieSearch: getMovieSearch,
            getMovieDetail: getMovieDetail
        };
        return service;

        ////////////////

        // Get list of movie search based on user input
        function getMovieSearch(movieTitle) {
        	var defer = $q.defer();
        	$http.get('http://www.omdbapi.com/?s='+ movieTitle).then(
        		function(response){
        			defer.resolve(response.data);
        		},
        		function(error) {
        			console.log(error);
        			defer.reject(error);
        		}
        	);

        	return defer.promise;
        }

        // Get movie detail from user's selection using IMDB code
        function getMovieDetail(imdb) {
            console.log(imdb);
            var defer = $q.defer();
            $http.get('http://www.omdbapi.com/?i=' + imdb + '&plot=Full&tomatoes=true').then(
                function(response){
                    defer.resolve(response.data);
                    console.log(response.data);
                },
                function(error) {
                    console.log(error);
                    defer.reject(error);
                }
            );

            return defer.promise;
        }

    }
})();