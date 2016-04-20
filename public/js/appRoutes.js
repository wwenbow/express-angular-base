angular.module('appRoutes', []).
    config(['$routeProvider', '$locationProvider',
           function($routeProvider, $locationProvider) {

               $routeProvider

               // home page
               .when('/', {
                   templateUrl: 'views/home.html',
                   controller: 'MainController'
               })

               .when('/json', {
                   templateUrl: 'views/json.html',
                   controller: 'JsonController'
               })

               .when('/marlinadmin', {
                   templateUrl: 'views/marlinadmin.html',
                   controller: 'MarlinAdminController'
               })

               .when('/marlin', {
                   templateUrl: 'views/marlin.html',
                   controller: 'MarlinController'
               })

               $locationProvider.html5Mode(true);

           }]);
