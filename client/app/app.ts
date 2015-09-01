/// <reference path='../typings/tsd.d.ts'/>
/// <reference path='./controller/HomeController'/>


var app = angular.module('app', [
  'ngResource',
  'ngRoute'
]);

app.value('url', 'http://localhost:3000/');

app.controller('HomeController', HomeController);

app.config(["$routeProvider", ($routeProvider: angular.route.IRouteProvider) => {
  $routeProvider
    .when('/', {
      templateUrl: 'app/views/home.html',
      controller: 'HomeController'
    })
    .otherwise({
      redirectTo: '/'
    });
}]);
