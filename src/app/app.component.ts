import {Component, Input, OnInit} from '@angular/core';
import {LoginService} from './services/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  @Input() userLoggedIn: boolean;


  constructor(private loginService: LoginService) {

  }

  ngOnInit(): void {

  }
}
