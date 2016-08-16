(function() {
    'use strict';

    angular
        .module('movieFinderApp')
        .controller('SearchController', SearchController);

    SearchController.$inject = ['movieFactory',
                                '$stateParams'];

    /* @ngInject */
    function SearchController(movieFactory, $stateParams) {
        var vm = this;
        vm.title = 'SearchController';
        vm.movieList;
        vm.getMovieRes = getMovieRes;

        ////////////////

        function getMovieRes(title) {
            var promise = movieFactory.getMovieData(title);
            promise.then(
                function(data) {
                    vm.movieList = data;
                    console.log(vm.movieList);
                },
                function(err) {
                    toastr.error(error);
                }
            );
        }
    }
})();   