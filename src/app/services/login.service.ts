// defaults
import {Injectable} from '@angular/core';
import {Http} from "@angular/http";

// RxJS
import {Observable} from "rxjs/Observable";

// custom
import {User} from "../models/user";
import {Config} from "../config/config";

// router
import {Router} from "@angular/router";

@Injectable()
export class LoginService {

  // make use of custom configuration class
  properties: Config = new Config();

  constructor(private http: Http, private router: Router) {
  }

  /**
   * Pings the server for a login request
   * @param model
   * @returns {Observable<Response>}
   */
  public login(model): Observable<User> {
    return this.http
      .post(this.properties.LOGIN_URL, model, {headers: this.properties.JSON_HEADERS}) // stringify payload and post to server
      .map(res => res.json()) // .json() to return the data
      .catch(error => Observable.throw(error.json() || 'Connection To Server Failed')); // error handling
  }

  /**
   * Checks if user is authenticated
   * @returns {boolean}
   */
  public isAuthenticated() {

    // if the user and token exists in the local storage, user is authenticated
    if ((localStorage.getItem("currentUserName") != null ||
      localStorage.getItem("currentUserName") != undefined)
      && (localStorage.getItem("token") != null || localStorage.getItem("token") != undefined)) {
      return true;
    } else {
      return false;
    }
  }
}
