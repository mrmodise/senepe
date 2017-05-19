import {Injectable} from '@angular/core';
import {Http} from "@angular/http";
import {Observable} from "rxjs/Observable";
import {User} from "../models/user";
import {Config} from "../config/config";
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
    return this
      .http
      .post(this.properties.LOGIN_URL, model, {headers: this.properties.JSON_HEADERS})
      .map(res => res.toString())
      .catch(error => error.toString());
  }

  /**
   * Pings the server to request data tokenization
   * @param data
   * @returns {Observable<R|T>}
   */
  public tokenizePayload(data) {
    // set authentication header
    const TOKEN_HEADER: Headers = new Headers({'Authorization': 'Bearer ' + data});
    return this
      .http
      .post(this.properties.TOKENIZE_URL, {headers: TOKEN_HEADER})
      .map(res => res.toString())
      .catch(error => error.toString());
  }

  /**
   * handles the logout process
   */
  public logout() {
    localStorage.setItem("token", "");
    localStorage.setItem("currentUserName", "");
    this.router.navigate(['/home'])
    alert("You have been logged out");
  }

  /**
   * Checks if user is authenticated
   * @returns {boolean}
   */
  public isAuthenticated() {
    // set
    let storeUser = localStorage.getItem("currentUserName");
    let storeToken = localStorage.getItem("token");

    if ((storeUser != "" || storeUser != undefined) && (storeToken != "" || storeToken!= undefined)) {
      return true;
    } else {
      return false;
    }
  }


}
