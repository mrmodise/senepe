import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {User} from '../models/user';
import {Config} from '../config/config';
import {Photo} from '../models/photo';
import {HttpClientService} from './http-client.service';

@Injectable()
export class UserService {
  // make use of custom configuration class
  config = new Config();
  private token = localStorage.getItem('token');

  constructor(private httpClient: HttpClientService) {}

  public getPhotosByUser(user: User): Observable<Photo[]> {
    return this
      .httpClient
      .post(this.config.GET_USER_PHOTOS, user, this.config.AUTH_HEADERS);
  }

}
