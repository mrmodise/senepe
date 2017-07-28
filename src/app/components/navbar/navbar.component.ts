import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {LoginService} from '../../services/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isLoggedIn: boolean;

  constructor(private router: Router, private loginService: LoginService) {
  }

  ngOnInit() {
    this.isLoggedIn = this.loginService.isAuthenticated()
  }

  logout() {
    this.loginService.logOut();
  }
}
