// defaults
import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';

// custom
import {Photo} from '../models/photo';
import {Config} from '../config/config';

// observable
import 'rxjs/Rx';

/**
 * Handles all logic related to photos
 * @author Morebodi Modise
 * @class PhotoService
 * @date May 2017
 */

@Injectable()
export class PhotoService {

  // make use of custom configuration class
  properties: Config = new Config();

  // inject the http instance
  constructor(private http: Http) {
  }

  /**
   * Pings the server for all photos avaibles
   * @returns {Observable<R|T>}
   */
  public getAllPhotos(): Observable<Photo> {
    // Observable to return all photos every 10 seconds.
    return Observable
      .interval(10000)
      .switchMap(() =>
        this.http
          .get(this.properties.GET_PHOTOS_URL, {headers: this.properties.JSON_HEADERS}) // stringify payload
          .map(res => res.json()) // map response
          .catch(error => error.json())); // catch any error if it exists
  }

  /**
   * Pings the server for a single photo
   * @param photoId
   * @returns {Observable<R|T>}
   */
  public getPhotosByUser(photoId: number): Observable<Photo> {
    return this.http
      .post(this.properties.GET_USER_PHOTOS, photoId, {headers: this.properties.JSON_HEADERS}) // stringify payload
      .map(res => res.json()) // map response
      .catch(error => error.json()); // catch any error if it exists
  }

  /**
   * Pings the server to request updating a photo
   * @param photo
   * @returns {Observable<R|T>}
   */
  public updatePhoto(photo: Photo): Observable<Photo> {
    return this.http
      .post(this.properties.UPDATE_PHOTO_URL, photo, {headers: this.properties.JSON_HEADERS}) // stringify payload
      .map(res => res.toString()) // map response
      .catch(error => error.toString()); // catch any error if it exists
  }



}
