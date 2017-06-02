import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Photo} from '../models/photo';
import {Config} from '../config/config';
import {Http, Headers} from '@angular/http';

@Injectable()
export class AddPhotoService {

  config = new Config();

  constructor(private http: Http) {
  }

  public sendPhoto(photo: Photo): Observable<Photo> {

    // retrieve token from local storage
    const token = localStorage.getItem("token");

    // set authorization headers
    const headersUrl = new Headers({'Authorization': token});

    console.log(headersUrl)

    return this
      .http
      .post(this.config.ADD_PHOTO_URL, JSON.stringify(photo), {headers: headersUrl})
      .map(res => res.json())
      .catch(error => Observable.throw(error.json() || 'Server connection failed!'));
  }

}
