import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Router} from '@angular/router';
import {LoginService} from '../../services/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit, OnChanges {

  isLoggedIn = false;
  @Input() userLoggedIn: boolean;
  color = 'lightgrey';

  constructor(private router: Router,
              private loginService: LoginService) {
  }

  ngOnInit() {
    this.isLoggedIn = typeof localStorage.getItem('isLoggedIn') !== 'undefined'  ? Boolean(localStorage.getItem('isLoggedIn')) : false;
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(`The changes are ${changes}`)
  }

  loginStatus(value): void{
    console.log(`login status has changed  ${value}`);
  }

  logout(): void {
    this.isLoggedIn = false;
    this.loginService.logOut();
  }
}
