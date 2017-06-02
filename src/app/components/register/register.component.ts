import {Component, OnInit} from '@angular/core';
import {Http} from '@angular/http';
import {RegisterService} from '../../services/register.service';
import {User} from '../../models/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  private user = new User();
  private registered = false;
  private message;
  private error = false;

  constructor(private http: Http, private registerService: RegisterService) {
  }

  ngOnInit() {
  }

  private onSubmit() {

    console.log('Data ' + JSON.stringify(this.user));

    this.registerService.register(this.user).subscribe(data => {
      console.log(data);
      this.registered = true;
      this.message = data.message;

    }, error => {
      console.log(error);
      this.error = true;
      this.message = error.message;
    });
  }

}
