(function() {
    'use strict';

    angular
        .module('movieFinderApp')
        .factory('movieFactory', movieFactory);

    movieFactory.$inject = ['$http', '$q'];

    /* @ngInject */
    function movieFactory($http, $q) {
        var service = {
            getMovieData: getMovieData
        };
        return service;

        ////////////////

        function getMovieData(movieTitle) {
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
    }
})();