import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {AppModule} from '../../app.module';
import {RegisterComponent} from './register.component';

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;
  const populateRegister = {
    username: 'tester1',
    fullname: 'tester1 tester1',
    email: 'tester1@gmail.com',
    password: 'tester123'
  };
  let username, fullname, email, password;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AppModule, RouterTestingModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    // create component and test fixture
    fixture = TestBed.createComponent(RegisterComponent);
    // get test component from the fixture
    component = fixture.componentInstance;
    // trigger lifecycle function to create form
    component.ngOnInit();
    // watch changes in the fixture
    fixture.detectChanges();

    username = component.registerForm.controls['username'];
    fullname = component.registerForm.controls['fullname'];
    email = component.registerForm.controls['email'];
    password = component.registerForm.controls['password'];

  });

  // COMPONENT tests
  it('should create register component', () => {
    expect(component).toBeTruthy();
  });

  // GENERAL FORM tests
  it('should create registration form', (() => {
    expect(component.createForm()).toBeTruthy();
  }));

  it('should create invalid registration form', (() => {
    expect(component.registerForm.valid).toBeFalsy();
  }));

  it('should initialize registration form fields', (() => {
    populateForm(populateRegister.username,
      populateRegister.fullname,
      populateRegister.email,
      populateRegister.password);
    expect(component.registerForm.value).toEqual(populateRegister);
  }));

  // USERNAME field tests
  it('username should be required', (() => {
    const errors = username.errors || {};
    expect(errors['required']).toBeTruthy();
  }));

  it('username should be more than 6 characters', (() => {
    component.registerForm.controls['username'].setValue('test');
    const errors = username.errors || {};
    expect(errors['minlength']).toBeTruthy();
  }));

  it('username should be valid', (() => {
    component.registerForm.controls['username'].setValue('tester1');
    expect(component.validateUserName()).toBeTruthy();
  }));

  // PASSWORD field tests
  it('password should be required', (() => {
    const errors = password.errors || {};
    expect(errors['required']).toBeTruthy();
  }));

  it('password should be more than 8 characters', (() => {
    component.registerForm.controls['password'].setValue('tester1');
    const errors = password.errors || {};
    expect(errors['minlength']).toBeTruthy();
  }));

  it('password should be valid', (() => {
    component.registerForm.controls['password'].setValue('tester123');
    expect(component.validatePassword()).toBeTruthy();
  }));

  // FULLNAME field tests
  it('full name should be valid', (() => {
    expect(fullname.invalid).toBeTruthy();
  }));

  // EMAIL field tests
  it('email should be required', (() => {
    const errors = email.errors || {};
    expect(errors['required']).toBeTruthy();
  }));

  it('email should be in correct format', (() => {
    component.registerForm.controls['email'].setValue('tester1');
    const errors = email.errors || {};
    expect(errors['pattern']).toBeTruthy();
  }));

  it('email should be valid', (() => {
    component.registerForm.controls['email'].setValue('tester1@gmail.com');
    expect(component.validateEmail()).toBeTruthy();
  }));


  /**
   * reusable function for a dry spec.
   * @param {string} userName
   * @param {string} fullName
   * @param {string} userEmail
   * @param {string} userPassword
   */
  function populateForm(userName: string, fullName: string,
                        userEmail: string, userPassword: string) {
    component.registerForm.controls['username'].setValue(userName);
    component.registerForm.controls['fullname'].setValue(fullName);
    component.registerForm.controls['email'].setValue(userEmail);
    component.registerForm.controls['password'].setValue(userPassword);
  }

});
