// defaults
import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';

// custom
import {User} from '../models/user';
import {Config} from '../config/config';

/**
 * Handles all logic related to registration
 * @author Morebodi Modise
 * @class RegisterService
 */

@Injectable()
export class RegisterService {

  // make use of custom configuration class
  properties: Config = new Config();

  // inject the http instance
  constructor(private http: Http) {}

  /**
   * Pings the server to save registration information
   * @param user
   * @returns {Observable<R|T>}
   */
  public register(user: User): Observable<User> {
    return this
      .http
      .post(this.properties.POST_USER_URL, JSON.stringify(user), {headers: this.properties.JSON_HEADERS}) // stringify payload
      .map(res => res.json()) // map response
      .catch(error => Observable.throw(error.json() || 'Connection To Server Failed')); // catch any error if it exists
  }


}
