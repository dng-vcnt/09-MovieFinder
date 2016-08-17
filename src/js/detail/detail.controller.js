(function() {
    'use strict';

    angular
        .module('movieFinderApp')
        .controller('DetailController', DetailController);

    DetailController.$inject = ['movieFactory',
                                '$stateParams'
                                ];

    /* @ngInject */
    function DetailController( movieFactory, $stateParams) {
        var vm = this;
        vm.title = 'DetailController';
        vm.imdbId = $stateParams.imdbCode;
        vm.movie;
        vm.getMovie = getMovie;


        getMovie(vm.imdbId);
        ////////////////


        // Retrieve movie detail
        function getMovie(imdb) {
            var promise = movieFactory.getMovieDetail(imdb);
            promise.then(
                function(data) {
                    vm.movie = data;
                    console.log(vm.movie);
                },
                function(err) {
                    console.log(error);
                }
            );
        }
    }
})();   

