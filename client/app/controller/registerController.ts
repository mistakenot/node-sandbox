/// <reference path='../../typings/tsd.d.ts'/>

module Postman {
  export class RegisterController {

    public static $inject = [
      '$scope',
      '$http'
    ];

    constructor (
      private $scope: IRegisterControllerScope,
      private $http: angular.IHttpService
    ) {
      $scope.email = '';
      $scope.password = '';
    }

    submit(): angular.IPromise<IRegistration> {
      return this.$http.put<IRegistration>('http://localhost:3000/registration', {});
    }
  }

  export interface IRegisterControllerScope extends angular.IScope {
    email: String;
    password: String;
  }
}
