import { Component, OnInit } from '@angular/core';
import {Http} from "@angular/http";
import {RegisterService} from "../../services/register.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private http: Http, private registerService: RegisterService) { }

  ngOnInit() {
  }

  private submit(user){
    this.registerService.register(user).subscribe(data => {

    });
  }

}
