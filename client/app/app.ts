/// <reference path='../typings/tsd.d.ts'/>

module Postman {
  var app = angular.module('app', [
    'ngResource'
  ]);
  app.value('url', 'http://localhost:3000/');
  app.config(
    ($stateProvider: angular.ui.IStateProvider,
    $urlRouterProvider: angular.ui.IUrlRouterProvider) => {
      $urlRouterProvider.otherwise('/register');
      $stateProvider
        .state('home', {
          url: '/'
        })
        .state('register', {
          url: '/register',
          templateUrl: 'views/register.html',
          controller: RegisterController
        });
    })
}
