/// <reference path='../../typings/tsd.d.ts'/>

module Postman {

  export class HomeController {

    public static $inject = ['$scope', '$http', 'url'];

    constructor(
      public $scope: IHomeScope,
      private $http: angular.IHttpService,
      private url: string
    ) {

    }

    getEmailSummaries (pageNumber: number, pageSize: number = 10) {
      return this.$http.get<EmailHeader[]>(
        this.url + 'emails',
        {
          params: {
            page: pageNumber,
            count: pageSize,
            headers: true
          }
        })
        .success(data => {
          this.$scope.emailHeaders = data
        });
    }

    getEmail (id: string) {
      return this.$http.get<Email>(
        this.url + 'email/' + id,
        {
          params: {
            headers: false
          }
        })
        .success(data => {
          this.$scope.currentEmail = data;
        })
    }
  }

  export interface IHomeScope extends angular.IScope {
    currentEmail: Email;
    emailHeaders: EmailHeader[];
    page: number;
    pageSize: number;
  }
}
