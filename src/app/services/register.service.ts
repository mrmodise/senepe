// defaults
import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';

// custom
import {User} from '../models/user';
import {Config} from '../config/config';
import {HttpClientService} from "./http-client.service";

/**
 * Handles all logic related to registration
 * @author Morebodi Modise
 * @class RegisterService
 */

@Injectable()
export class RegisterService {

  // make use of custom configuration class
  config = new Config();

  // inject the http instance
  constructor(private httpClient: HttpClientService) {}

  /**
   * Pings the server to save registration information
   * @param user
   * @returns {Observable<User>}
   */
  public register(user: User): Observable<User> {
    return this
      .httpClient
      .post(this.config.POST_USER_URL, user, this.config.JSON_HEADERS);
  }


}
