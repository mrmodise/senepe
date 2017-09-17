// defaults
import {Component, OnInit} from '@angular/core';

// custom
import {LoginService} from '../../services/login.service';

// router
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {User} from '../../models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginFailed = false;
  currentUserName;
  message;
  loginForm: FormGroup;
  isLoggedIn: boolean = false;
  user: User;
  isLoginUserNameValid = true;
  isLoginPasswordValid = true;

  constructor(private loginService: LoginService,
              private fb: FormBuilder) {
  }

  ngOnInit() {
    this.createForm();
  }

  /**
   * creates the form using form builder
   * @returns {FormGroup}
   */
  createForm(): FormGroup {
    // group the form elements using the form builder
    return this.loginForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(6)]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  /**
   * submit user credentials to the server
   */
  onSubmit(): void {
    // validation checks before submit
    if (!this.validateLoginUserName()) return;
    if (!this.validateLoginPassword()) return;

    // subscribe to the login service
    this.loginService.login(this.loginForm.value).subscribe(userData => {
        // login successful, save token to local storage
        this.user = new User(userData.token, this.loginForm.get('username').value);
        LoginComponent.setUserSession(this.user);

        this.isLoggedIn = true;

        localStorage.setItem('isLoggedIn', 'true');

        this.currentUserName = this.user.username;

        this.loginForm.reset();
      },
      error => {
        // login attempt failed
        console.log(error);
        this.loginFailed = true;
        this.message = error.message || 'Something went wrong';
      });
  }

  /**
   * validates username field
   * @returns {boolean}
   */
  validateLoginUserName(): boolean {
    if (this.loginForm.controls['username'].valid) {
      return this.isLoginUserNameValid = true;
    } else {
      return this.isLoginUserNameValid = false;
    }
  }

  /**
   * validates password field
   * @returns {boolean}
   */
  validateLoginPassword(): boolean {
    if (this.loginForm.controls['password'].valid) {
      return this.isLoginPasswordValid = true;
    } else {
      return this.isLoginPasswordValid = false;
    }
  }

  /**
   * sets currently logged in user session
   * @param {User} user
   */
  static setUserSession(user: User) {
    localStorage.setItem('token', user.token);
    localStorage.setItem('currentUserName', user.username);
  }
}
