angular.module('appRoutes', []).
    config(['$routeProvider', '$locationProvider',
           function($routeProvider, $locationProvider) {

               $routeProvider

               // home page
               .when('/', {
                   templateUrl: 'views/home.html',
                   controller: 'MainController'
               })

               .when('/foo', {
                   templateUrl: 'views/foo.html',
                   controller: 'FooController'
               })

               $locationProvider.html5Mode(true);

           }]);
