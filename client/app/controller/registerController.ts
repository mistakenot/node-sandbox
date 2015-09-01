/// <reference path='../../typings/tsd.d.ts'/>

module Postman {
  export class RegisterController {

    public static $inject = ['$scope','http','url'];
    
    constructor (
      private $scope: IRegisterControllerScope,
      private $http: angular.IHttpService,
      private url: string
    ) {
      $scope.email = '';
      $scope.password = '';
    }

    submitRegistration(): angular.IPromise<User> {
      return this.$http.put<User>(
        this.url + '/registration',
        new Registration(this.$scope.email, this.$scope.password)
      );
    }

    submitLogin(): angular.IPromise<User> {
      return this.$http.put<User>(
        this.url + '/login',
        new Registration(this.$scope.email, this.$scope.password)
      );
    }
  }

  export interface IRegisterControllerScope extends angular.IScope {
    email: string;
    password: string;
  }
}
