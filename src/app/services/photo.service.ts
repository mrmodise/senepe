// defaults
import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
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

  // make use of custom configuration class
  config = new Config();

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
      .get(this.config.GET_PHOTOS_URL, this.config.AUTH_HEADERS);
  }

  /**
   * Pings the server for a single photo
   * @param photoId
   * @returns {Observable<R|T>}
   */
  public getPhotosByUser(photoId: number): Observable<Photo> {
    return this
      .httpClient
      .post(this.config.GET_USER_PHOTOS, photoId, this.config.JSON_HEADERS);
  }

  /**
   * Pings the server to request updating a photo
   * @param photo
   * @returns {Observable<R|T>}
   */
  public updatePhoto(photo: Photo): Observable<Photo> {
    return this.httpClient
      .post(this.config.UPDATE_PHOTO_URL, photo, {headers: this.config.JSON_HEADERS});
  }
}
