/// <reference path='../_all.ts'/>

module Postman {
  export interface IUserService {
    create(email: string): JQueryPromise<User>
  }
}
