import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import {Observable} from "rxjs/Observable";

/**
 * Custom Http handler
 * @author Morebodi Modise
 * @class HttpClientService
 * @date June 2017
 */

@Injectable()
export class HttpClientService {

  constructor(private http: Http) { }

  /**
   * Custom post method to handle all Http POSTS in the app
   * @param url
   * @param data
   * @returns {Observable<R|T>}
   */
  public post(url, data, headers): any {
    return this
      .http
      .post(url, JSON.stringify(data), {headers: headers}) // stringify payload and post to server
      .map(res => res.json()) // .json() to return the data
      .catch(error => Observable.throw(error.json() || 'Server connection failed!')); // error handling
  }

  /**
   *  Custom post method to handle all Http GET in the app
   * @param url
   * @returns {Observable<R|T>}
   */
  public get(url, headers): any {
    return this
      .http
      .get(url, {headers: headers})
      .map(res => res.json()) // .json() to return the data
      .catch(error => Observable.throw(error.json() || 'Server connection failed!')); // error handlin
  }

}
