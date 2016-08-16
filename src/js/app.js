(function() {
   'use strict';

   angular
       .module('movieFinderApp', ['ui.router'])
       .config(function ($urlRouterProvider, $stateProvider) {

           $urlRouterProvider.otherwise('/search');
           
           $stateProvider
           .state('search', {
               url: '/search',
               templateUrl: '/js/search/search.html',
               controller: 'SearchController as search'
           })
           .state('detail', {
               url: '/detail',
               templateUrl: '/js/detail/detail.html',
               controller: 'DetailController as detail'            
           })
       });
})();