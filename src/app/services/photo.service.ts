// defaults
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';

// custom
import {Photo} from '../models/photo';
import {Config} from '../config/config';

// observable
import 'rxjs/Rx';
import {HttpClientService} from './http-client.service';

/**
 * Handles all logic related to photos
 * @author Morebodi Modise
 * @class PhotoService
 * @date May 2017
 */

@Injectable()
export class PhotoService {

  // inject the http instance
  constructor(private httpClient: HttpClientService) {
  }

  /**
   * Pings the server for all available photos
   * @returns {Observable<Photo[]>}
   */
  public getAllPhotos(): Observable<Photo[]> {
    return this
      .httpClient
      .get(Config.GET_PHOTOS_URL, Config.getAuthOptions());
  }

  /**
   * Pings the server for a single photo
   * @param photoId
   * @returns {Observable<Photo>}
   */
  public getPhotosByUser(photoId: number): Observable<Photo> {
    return this
      .httpClient
      .post(Config.GET_USER_PHOTOS, photoId, Config.getOptions());
  }

  /**
   * Pings the server to request updating a photo
   * @param photo
   * @returns {Observable<Photo>}
   */
  public updatePhoto(photo: Photo): Observable<Photo> {
    return this.httpClient
      .post(Config.UPDATE_PHOTO_URL, photo, {headers: Config.JSON_HEADERS});
  }
}
