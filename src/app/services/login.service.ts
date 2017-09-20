// defaults
import {Injectable} from '@angular/core';
// RxJS
import {Observable} from 'rxjs/Observable';
// custom
import {User} from '../models/user';
import {Config} from '../config/config';
// router
import {Router} from '@angular/router';
import {Headers, Http, RequestOptions} from '@angular/http';

@Injectable()
export class LoginService {

  constructor(private http: Http, private router: Router) {
  }

  /**
   * Pings the server for a login request
   * @param model
   * @returns {Observable<User>}
   */
  login(model): Observable<any> {
    return this
      .http
      .post(Config.LOGIN_URL, JSON.stringify(model), Config.getOptions())
      .map(res => res.json());
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

  /**
   * Checks if user is authenticated
   * @returns {boolean}
   */
  isAuthenticated(): boolean {
    const userName = localStorage.getItem('currentUserName');
    const token = localStorage.getItem('token');

    if ((userName !== '' && userName !== null) && (token !== '' && token !== null)) {
      return true;
    }
  }
}
