import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Photo} from '../models/photo';
import {Config} from '../config/config';
import {HttpClientService} from './http-client.service';

@Injectable()
export class AddPhotoService {

  constructor(private httpClient: HttpClientService) {}

  /**
   * Pings server with request to save a photo
   * @param photo
   * @returns {Observable<any>}
   */
  public sendPhoto(photo: Photo): Observable<any> {
    return this
      .httpClient
      .post(Config.ADD_PHOTO_URL, photo, Config.AUTH_HEADERS);
  }

}
