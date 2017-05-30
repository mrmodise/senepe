import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {User} from '../models/user';
import {Http} from '@angular/http';
import {Config} from '../config/config';
import {Photo} from '../models/photo';

@Injectable()
export class UserService {
  // make use of custom configuration class
  properties: Config = new Config();

  constructor(private http: Http) {
  }

  /**
   * Returns a single user's profile
   * @param user
   * @returns {Observable<R|T>}
   */
  public getUserByName(user: string): Observable<User> {
    return this
      .http
      .post(this.properties.USER_BY_NAME_URL, JSON.stringify(user), {})
      .map(res => res.json())
      .catch(error => Observable.throw(error.json() || 'Connection To Server Failed'));
  }

  public getPhotosByUser(user: User): Observable<Photo> {
    return this.http.post(this.properties.GET_USER_PHOTOS, JSON.stringify(user), {})
      .map(res => res.json())
      .catch(error => Observable.throw(error.json() || 'Connection To Server Failed'));
  }

}
