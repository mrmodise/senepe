// defaults
import {Injectable} from '@angular/core';

// RxJS
import {Observable} from 'rxjs/Observable';

// custom
import {User} from '../models/user';
import {Config} from '../config/config';

// router
import {Router} from '@angular/router';
import {HttpClientService} from './http-client.service';

@Injectable()
export class LoginService {

  /**
   * Checks if user is authenticated
   * @returns {boolean}
   */
  static isAuthenticated(): boolean {
    const userName = localStorage.getItem('currentUserName');
    const token = localStorage.getItem('token');

    if ((userName !== '' && userName !== null) && (token !== '' && token !== null)) {
      // if the user and token exists in the local storage, user is authenticated
      return true;
    } else {
      return false;
    }
  }

  constructor(private httpClient: HttpClientService, private router: Router) {
  }


  /**
   * Pings the server for a login request
   * @param model
   * @returns {Observable<User>}
   */
  login(model): Observable<User> {
    return this
      .httpClient
      .post(Config.LOGIN_URL, model, Config.JSON_HEADERS);
  }

  /**
   * handles the logout process
   */
  logOut() {
    // clear local storage
    localStorage.setItem('token', '');
    localStorage.setItem('currentUserName', '');
    this.router.navigate(['home']);
    // alert('You have been logged out');
  }
}
