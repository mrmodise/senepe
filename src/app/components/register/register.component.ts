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
  registerForm: FormGroup;
  registered = false;
  message: string;
  error = false;
  isUserNameValid = true;
  isEmailValid = true;
  isPasswordValid = true;

  constructor(private fb: FormBuilder,
              private registerService: RegisterService) {
  }

  ngOnInit() {
    this.createForm();
  }

  /**
   * submits form to the server
   */
  onSubmit(): void {

    // additional safety checks
    if(!this.validateEmail()) {
      return;
    } else if (!this.validatePassword()){
      return;
    }else if (!this.validateUserName()){
      return;
    }

    this.registerService.register(this.registerForm.value).subscribe(data => {
      this.registered = true;
      this.message = data.message;

    }, error => {
      this.error = true;
      this.message = error.message || 'Something went wrong';
    });
  }

  /**
   * instantiates form model
   */
  private createForm(): void {
    this.registerForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(6)]],
      fullName: [''],
      email: ['', [Validators.required, Validators.pattern('[^@]*@[^@]*')]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  /**
   * validates username length
   * @returns {boolean}
   */
  validateUserName(): boolean {
    if (this.registerForm.controls['username'].valid) {
      return this.isUserNameValid = true;
    } else {
      return this.isUserNameValid = false;
    }
  }

  /**
   * validates email format
   * @returns {boolean}
   */
  validateEmail(): boolean {
    if (this.registerForm.controls['email'].valid) {
      return this.isEmailValid = true;
    } else {
      return this.isEmailValid = false;
    }
  }

  /**
   * validates password length
   * @returns {boolean}
   */
  validatePassword(): boolean {
    if (this.registerForm.controls['password'].valid) {
      return this.isPasswordValid = true;
    } else {
      return this.isPasswordValid = false;
    }
  }

}
