module Postman {
  export class EmailHeader extends Model {
    constructor (
      id: string = '',
      from: string = '',
      at: string = '',
      subject: string = '',
      snippet: string = '')
    {
      super(id);
    }

    static SNIPPET_LENGTH: number = 20;
  }
}
