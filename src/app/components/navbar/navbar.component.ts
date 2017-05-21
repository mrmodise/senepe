import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {LoginService} from "../../services/login.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router, private loginService: LoginService) { }

  ngOnInit() {
  }

  /**
   * handles the logout process
   */
  public logOut() {
      // clear local storage
      localStorage.setItem("token", "");
      localStorage.setItem("currentUserName", "");
      this.router.navigate(['home'])
      alert("You have been logged out");
  }
}
