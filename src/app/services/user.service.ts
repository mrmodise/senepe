import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {User} from '../models/user';
import {Config} from '../config/config';
import {Photo} from '../models/photo';
import {HttpClientService} from './http-client.service';

@Injectable()
export class UserService {

  constructor(private httpClient: HttpClientService) {}

  /**
   *
   * @param {User} user
   * @returns {Observable<Photo[]>}
   */
  public getPhotosByUser(user: User): Observable<Photo[]> {
    return this
      .httpClient
      .post(Config.GET_USER_PHOTOS, user, Config.AUTH_HEADERS);
  }

}
