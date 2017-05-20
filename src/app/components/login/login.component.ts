// defaults
import { Component, OnInit } from '@angular/core';

// custom
import {LoginService} from "../../services/login.service";
import {Router} from "@angular/router";

// jquery
declare var $: any;

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
      // set current user to the user in the model object
      this.currentUserName = this.model.username;

      // save current user to local storage
      localStorage.setItem("currentUserName", this.model.username);

      // reset model properties
      this.model.username = '';
      this.model.password = '';
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
   * handles the logout process
   */
  public logout() {
    // clear local storage
    localStorage.setItem("token", "");
    localStorage.setItem("currentUserName", "");
    this.router.navigate(['/home'])
    alert("You have been logged out");
  }

  /**
   * Returns the currently logged in user
   * @returns {string|null}
   */
  public getLoggedInUser(){
    return localStorage.getItem("currentUserName");
  }

}
