/// <reference path='../typings/tsd.d.ts'/>

module Postman {
  var app = angular.module('app', [
    'ngResource'
  ]);

  app.value('url', 'http://localhost:3000/');

  app.config(["$rouetProvider", ($routeProvider: angular.route.IRouteProvider) => {
    $routeProvider
      .when('/', {
        templateUrl: '',
        controller: ''
      })
      .otherwise({
        redirectTo: ''
      });
  }]);
}
