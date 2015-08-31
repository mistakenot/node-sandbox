/// <reference path='../../typings/tsd.d.ts'/>

module Postman {
  export interface IRegistration extends angular.resource.IResource<IRegistration> {
    successful: string;
    id: string;
    email: string;
  }

  export interface IRegisterResource extends angular.resource.IResourceClass<IRegistration> {
    create(registration: IRegistration): IRegistration;
  }
}
