// defaults
import {Component, OnInit} from '@angular/core';

// custom
import {LoginService} from '../../services/login.service';

// router
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

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

  constructor(private loginService: LoginService,
              private fb: FormBuilder) {
    this.createForm();
  }

  ngOnInit() {
  }

  private createForm(){
    // group the form elements using the form builder
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  /**
   * Triggered when user hits submit button
   */
  public onSubmit() {
    // subscribe to the login service
    this.loginService.login(this.loginForm.value).subscribe(user => {
        // login successful, save token to local storage
        localStorage.setItem('token', user.token);
        localStorage.setItem('currentUserName', this.loginForm.get('username').value);
        this.currentUserName = this.loginForm.get('username').value;
        this.loginForm.reset();
      },
      error => {
        // login attempt failed
        console.log(error);
        this.loginFailed = true;
        this.message = error.message;
      });
  }

  /*parseJwt(token){
    var base64URL = token.split('.')[1];
    var base64 = base64URL.replace('-', '+').replace('_', '/');
    return JSON.parse(window.atob(base64));
  }*/
  /**
   * Returns the currently logged in user
   * @returns {string|null}
   */
  public getLoggedInUser(): string {
    return localStorage.getItem('currentUserName');
  }

}
