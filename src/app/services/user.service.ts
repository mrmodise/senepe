import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {User} from '../models/user';
import {Http, Headers} from '@angular/http';
import {Config} from '../config/config';
import {Photo} from '../models/photo';

@Injectable()
export class UserService {
  // make use of custom configuration class
  config = new Config();
  private token = localStorage.getItem("token");

  constructor(private http: Http) {
  }

  /**
   * Returns a single user's profile
   * @param user
   * @returns {Observable<R|T>}
   */
  public getUserByName(user: string): Observable<User> {
    // set authorization headers
    const headersUrl: Headers = new Headers({'Authorization': 'Bearer ' + this.token});

    return this
      .http
      .post(this.config.USER_BY_NAME_URL, JSON.stringify(user), {headers: headersUrl})
      .map(res => res.json())
      .catch(error => Observable.throw(error.json() || 'Connection To Server Failed'));
  }

  public getPhotosByUser(user: User): Observable<Photo> {
    return this.http.post(this.config.GET_USER_PHOTOS, JSON.stringify(user), {})
      .map(res => res.json())
      .catch(error => Observable.throw(error.json() || 'Connection To Server Failed'));
  }

}
