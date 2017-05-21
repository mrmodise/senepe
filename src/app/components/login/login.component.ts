// defaults
import { Component, OnInit } from '@angular/core';

// custom
import {LoginService} from "../../services/login.service";

// router
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // populate the model properties
  private model = {'username': '', 'password': ''};
  private currentUserName;
  // sets the login failure status
  private loginFailed = false;
  // logs server error messages
  private message;

  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit() {
    // initialize username from local storage
    this.currentUserName = localStorage.getItem("currentUserName");
  }

  /**
   * Triggered when user hits submit button
   */
  private onSubmit() {
    // subscribe to the login service
    this.loginService.login(this.model).subscribe(data => {

        // login successful, save token to local storage
        localStorage.setItem("token", data.token);
        localStorage.setItem("currentUserName", this.model.username);
        this.loginFailed = false;
    },
    error => {
      console.log(error);
      // server returned error
      this.loginFailed = true;
      // log its message
      this.message = error.message;
    });
  }

  /**
   * Returns the currently logged in user
   * @returns {string|null}
   */
  public getLoggedInUser(){
    return localStorage.getItem("currentUserName");
  }

}
