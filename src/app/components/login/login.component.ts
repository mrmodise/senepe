// defaults
import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

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
  @Output() userLoggedIn = new EventEmitter<boolean>();

  constructor(private loginService: LoginService,
              private fb: FormBuilder) {
    this.createForm();
  }

  ngOnInit() {
  }

  private createForm() {
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
    this.loginService.login(this.loginForm.value).subscribe(userData => {
        // login successful, save token to local storage
        this.user = new User(userData.token, this.loginForm.get('username').value);
        this.setUserSession(this.user);

        this.isLoggedIn = true;

        localStorage.setItem('isLoggedIn', 'true');

        this.userLoggedIn.emit(true);

        this.currentUserName = this.user.username;

        this.loginForm.reset();
      },
      error => {
        // login attempt failed
        console.log(error);
        this.loginFailed = true;
        this.message = error.message;
      });
  }

  checkLogin(): boolean{
    return this.loginService.isAuthenticated();
  }

  setUserSession(user: User): void{
      localStorage.setItem("token", user.token);
      localStorage.setItem("currentUserName", user.username);
  }

}
