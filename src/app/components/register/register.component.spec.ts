import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {AppModule} from '../../app.module';
import {RegisterComponent} from './register.component';

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;
  let populateRegister = {
    username: 'tester1',
    fullname: 'tester1 tester1',
    email: 'tester1@gmail.com',
    password: 'tester123'
  };

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
  });

  // COMPONENT tests
  it('should create register component', () => {
    expect(component).toBeTruthy();
  });

  // GENERAL FORM tests
  it('should create login form', (() => {
    expect(component.createForm()).toBeTruthy();
  }));

  it('should create invalid register form', (() => {
    expect(component.registerForm.valid).toBeFalsy();
  }));

  it('should initialize register form fields', (() => {
    populateForm(populateRegister.username,
      populateRegister.fullname,
      populateRegister.email,
      populateRegister.password);
    expect(component.registerForm.value).toEqual(populateRegister);
  }));

  /**
   * reusable function for a dry spec.
   * @param {string} username
   * @param {string} fullName
   * @param {string} email
   * @param {string} password
   */
  function populateForm(username: string, fullName: string,
                        email: string, password: string) {
    component.registerForm.controls['username'].setValue(username);
    component.registerForm.controls['fullname'].setValue(fullName);
    component.registerForm.controls['email'].setValue(email);
    component.registerForm.controls['password'].setValue(password);
  }

});
