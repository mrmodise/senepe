export interface IUser {
  email: string,
  role: string,
  message: string,
  fullName: string,
  likedPhotoList
}

export class User implements IUser {
  likedPhotoList;
  email: string;
  role: string;
  message: string;
  fullName: string;

  constructor(public token: string,
              public username: string,
              public password?: string) {

  }
}
