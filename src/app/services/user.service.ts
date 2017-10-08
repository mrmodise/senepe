import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {User} from '../models/user';
import {Config} from '../config/config';
import {HttpClientService} from './http-client.service';

@Injectable()
export class UserService {

  constructor(private httpClient: HttpClientService) {
  }

  /**
   * retrieves currently logged in user's photo details
   * @param {string} userName
   * @returns {User}
   */
  getCurrentUser(userName: string): Observable<User> {
    return this
      .httpClient
      .post(Config.POST_USER_URL, userName, Config.AUTH_HEADERS);
  }

  /**
   * updates user details
   * @param {User} user
   * @returns {Observable<User>}
   */
  updateUser(user: User): Observable<User> {
    return this
      .httpClient
      .post(Config.POST_USER_URL, user, Config.AUTH_HEADERS);
  }

}
