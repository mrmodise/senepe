import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Photo} from '../models/photo';
import {Config} from '../config/config';
import {HttpClientService} from "./http-client.service";

@Injectable()
export class AddPhotoService {

  // common configurations
  config = new Config();

  constructor(private httpClient: HttpClientService) {}

  /**
   * Pings server with request to save a photo
   * @param photo
   * @returns {Observable<Photo>}
   */
  public sendPhoto(photo: Photo): Observable<Photo> {
    return this
      .httpClient
      .post(this.config.ADD_PHOTO_URL, photo, this.config.AUTH_HEADERS);
  }

}
