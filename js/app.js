var app = angular.module('myApp', ['ngRoute', 'ngCookies', 'ngAnimate', 'ngSanitize', 'ui.bootstrap']);

app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    //$locationProvider.html5Mode(true);
    $locationProvider.hashPrefix('');
    $routeProvider 
      .when('/', { 
        controller: 'HomeController', 
        templateUrl: 'views/home.html' 
      })
      .when('/dataanalysis', { 
        controller: 'DAController', 
        templateUrl: 'views/da.html' 
      })
      .when('/webdevelopment', { 
        controller: 'WDController', 
        templateUrl: 'views/wd.html' 
      })
      .when('/contact', { 
        controller: 'ContactController', 
        templateUrl: 'views/contact.html' 
      })
      .otherwise({ 
        redirectTo: '/' 
      }); 
}]);