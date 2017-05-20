// defaults
import { Component, OnInit } from '@angular/core';

// custom
import {LoginService} from "../../services/login.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // populate the model properties
  private model = {'username': '', 'password': ''};
  private currentUserName;

  constructor(private loginService: LoginService) { }

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
    },
    error => console.log(error));
  }

}
