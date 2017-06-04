// defaults
import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';

// RxJS
import {Observable} from 'rxjs/Observable';

// custom
import {User} from '../models/user';
import {Config} from '../config/config';

// router
import {Router} from '@angular/router';
import {HttpClientService} from "./http-client.service";

@Injectable()
export class LoginService {

  // make use of custom configuration class
  config = new Config();

  constructor(private httpClient: HttpClientService, private router: Router) {
  }

  /**
   * Pings the server for a login request
   * @param model
   * @returns {Observable<User>}
   */
  public login(model): Observable<User> {
    return this
      .httpClient
      .post(this.config.LOGIN_URL, model, this.config.JSON_HEADERS);
  }

  /**
   * Checks if user is authenticated
   * @returns {boolean}
   */
  public isAuthenticated() {
    // if the user and token exists in the local storage, user is authenticated
    if (localStorage.getItem('currentUserName') !== '' && localStorage.getItem('token') !== '') {
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
    localStorage.setItem('token', '');
    localStorage.setItem('currentUserName', '');
    this.router.navigate(['home']);
    //alert('You have been logged out');
  }
}
