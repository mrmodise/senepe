export interface IUser {
  email: string,
  role: string,
  message: string,
  fullName: string
}

export class User implements IUser {
  email: string;
  role: string;
  message: string;
  fullName: string;

  constructor(public token: string,
              public username: string,
              public password?: string) {

  }
}
