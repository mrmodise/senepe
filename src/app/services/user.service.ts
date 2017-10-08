import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {User} from '../models/user';
import {Config} from '../config/config';
import {Photo} from '../models/photo';
import {HttpClientService} from './http-client.service';

@Injectable()
export class UserService {

  constructor(private httpClient: HttpClientService) {
  }

  /**
   *
   * @param {User} user
   * @returns {Observable<Photo[]>}
   */
  getPhotosByUser(user: User): Observable<Photo[]> {
    return this
      .httpClient
      .post(Config.GET_USER_PHOTOS, user, Config.AUTH_HEADERS);
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

}
