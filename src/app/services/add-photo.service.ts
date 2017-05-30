import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Photo} from '../models/photo';
import {Config} from '../config/config';
import {Http} from '@angular/http';

@Injectable()
export class AddPhotoService {

  properties: Config = new Config();

  constructor(private http: Http) {
  }

  public sendPhoto(photo: Photo): Observable<Photo> {
    return this
      .http
      .post(this.properties.ADD_PHOTO_URL, JSON.stringify(photo), {headers: this.properties.JSON_HEADERS})
      .map(res => res.json())
      .catch(error => Observable.throw(error.json() || 'Server connection failed!'));
  }

}
