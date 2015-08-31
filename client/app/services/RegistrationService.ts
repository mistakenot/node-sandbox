///<reference path='../all.ts'/>

module Postman {
  export interface IRegistrationService {
    create(email: string, password: string): angular.IPromise<User>;
  }

  export class RegistrationService implements IRegistrationService {
    constructor(
      private $http: angular.IHttpService,
      private $q: angular.IQService,
      private url: string) { }

    create(email: string, password: string): angular.IPromise<User> {
      return this.$q<User>((resolve: angular.IQResolveReject<User>, reject: angular.IQResolveReject<User>) => {
        this.$http.put<User>(
          this.url + 'registration',
          new User(email, password)
        )
        .success(resolve)
        .error(reject)
      });
    }
  }
}
