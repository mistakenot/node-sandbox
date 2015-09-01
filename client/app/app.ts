/// <reference path='../typings/tsd.d.ts'/>

module Postman {
  var app = angular.module('app', [
    'ngResource',
    'ngRoute'
  ]);

  app.value('url', 'http://localhost:3000/');

  app.config(["$routeProvider", ($routeProvider: angular.route.IRouteProvider) => {
    $routeProvider
      .when('/', {
        templateUrl: 'views/home.html',
        controller: 'controller/homeController.js'
      })
      .otherwise({
        redirectTo: '/'
      });
  }]);
}
