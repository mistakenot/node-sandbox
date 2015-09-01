/// <reference path='../_all.ts'/>

module Postman {
  export class User extends Model {
    constructor(public email: string, id: string) {
      super(id);
    }
  }
}
