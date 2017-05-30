// defaults
import {Injectable} from '@angular/core';
import {CanActivate} from '@angular/router';

// services
import {LoginService} from './login.service';

@Injectable()
export class AuthService implements CanActivate {

  constructor(private loginService: LoginService) {
  }

  /**
   * Ensures that only authenticated users access secured routes
   * @returns {boolean}
   */
  canActivate() {
    return this.loginService.isAuthenticated();
  }
}
