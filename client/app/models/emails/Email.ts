module Postman {
  export class Email extends EmailHeader {
    constructor (
      id: string = '',
      from: string = '',
      at: string = '',
      subject: string = '',
      body: string = '')
    {
      super(id, from, at, subject, body.substr(0, EmailHeader.SNIPPET_LENGTH));
    }
  }
}
