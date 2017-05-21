// defaults
import {Injectable} from '@angular/core';
import {Http, Headers} from "@angular/http";

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
   * @returns {Observable<User>}
   */
  public login(model): Observable<User> {
    return this.http
      .post(this.properties.LOGIN_URL, model, {headers: this.properties.JSON_HEADERS}) // stringify payload and post to server
      .map(res => res.json()) // .json() to return the data
      .catch(error => Observable.throw(error.json() || 'Connection To Server Failed')); // error handling
  }

  // for each login session we send a token
  public sendToken(token) {
    // set authorization headers
    let headersUrl = new Headers({ 'Authorization': 'Bearer ' + token });
    // send the token details to backend
    return this
      .http
      .get(this.properties.TOKENIZE_URL, {headers: headersUrl}) // send authorization headers
      .map(res => res.json()) // .json() to return the data
      .catch(error => Observable.throw(error.json() || 'Connection To Server Failed')); // errpr handling
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

  /**
   * handles the logout process
   */
  public logOut() {
    // clear local storage
    localStorage.setItem("token", "");
    localStorage.setItem("currentUserName", "");
    this.router.navigate(['home'])
    alert("You have been logged out");
  }
}
