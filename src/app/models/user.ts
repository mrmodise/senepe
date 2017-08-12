export class User {
  public email: string;
  public role: string;
  public message: string;
  public fullname: string;

  constructor(public token: string,
              public username: string,
              public password?: string) {

  }
}
