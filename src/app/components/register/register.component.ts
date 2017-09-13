import {Component, OnInit} from '@angular/core';
import {RegisterService} from '../../services/register.service';
import {User} from '../../models/user';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user: User;
  registered = false;
  message: string;
  error = false;
  registerForm: FormGroup;

  constructor(private fb: FormBuilder,
              private registerService: RegisterService) {
  }

  ngOnInit() {
    this.createForm();
  }

  onSubmit(): void {

    this.registerService.register(this.registerForm.value).subscribe(data => {
      this.registered = true;
      this.message = data.message;

    }, error => {
      this.error = true;
      this.message = error.message;
    });
  }

  private createForm(): void{
    this.registerForm = this.fb.group({
        username: ['', Validators.required, Validators.min(6)],
        fullname: ['', Validators.required],
        email: ['', Validators.required],
        password: ['', Validators.required, Validators.min(6)]
    });
  }

}
