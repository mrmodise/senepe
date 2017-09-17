import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import { LoginComponent } from './login.component';
import { HttpModule} from '@angular/http';
import {ReactiveFormsModule} from '@angular/forms';
import {LoginService} from '../../services/login.service';
import {HttpClientService} from '../../services/http-client.service';
import {RouterTestingModule} from '@angular/router/testing';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  const username = 'test';
  const password = 'test';
  const populatedUser = {username: username, password: password};
  const blankUser = {username: '', password: ''};

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LoginComponent],
      providers: [LoginService, HttpClientService],
      imports: [HttpModule, ReactiveFormsModule, RouterTestingModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    // create component and test fixture
    fixture = TestBed.createComponent(LoginComponent);
    // get test component from the fixture
    component = fixture.componentInstance;
    // trigger lifecycle function to create form
    component.ngOnInit();
    // watch changes in the fixture
    fixture.detectChanges();
  });

  // COMPONENT tests
  it('should create LoginComponent', (() => {
    expect(component).toBeTruthy();
  }));

  // FORM tests
  it('should create login form', (() => {
    expect(component.createForm()).toBeTruthy();
  }));

  it('should be invalid when login form is empty', (() => {
    expect(component.loginForm.valid).toBeFalsy();
  }));

  it('login form should have default empty properties', (() => {
    expect(component.loginForm.value).toEqual(blankUser);
  }));

  it('should initialize login form fields', (() => {
    updateForm(username, password);
    expect(component.loginForm.value).toEqual(populatedUser);
  }));

  it('loginFailed should be true if error occurred', async(() => {
    updateForm(blankUser.username, blankUser.password);
    component.onSubmit();
    expect(component.loginFailed).toBeFalsy();
  }));

  // USERNAME field tests
  it('username field should be invalid', (() => {
    const username = component.loginForm.controls['username'];
    expect(username.valid).toBeFalsy();
  }));

  it('isLoginUserNameValid should be false if username empty', (() => {
    expect(component.validateLoginUserName()).toBeFalsy();
  }));

  it('isLoginUserNameValid should be true if username is not empty', (() => {
    setUserName('Malibongwe');
    expect(component.validateLoginUserName()).toBeTruthy();
  }));

  // PASSWORD tests
  it('password field should be invalid', (() => {
    const password = component.loginForm.controls['password'];
    expect(password.valid).toBeFalsy();
  }));

  it('isLoginPasswordValid should be false if password empty', (() => {
    expect(component.validateLoginPassword()).toBeFalsy();
  }));

  it('isLoginPasswordValid should be true if password is not empty', (() => {
    setPassword('password');
    expect(component.validateLoginPassword()).toBeTruthy();
  }));


  /**
   * reusable function for a dry spec.
   * @param userName
   * @param userPassword
   */
  function updateForm(userName, userPassword) {
    component.loginForm.controls['username'].setValue(userName);
    component.loginForm.controls['password'].setValue(userPassword);
  }

  /**
   * reusable function for username dry spec
   * @param userName
   */
  function setUserName(userName){
    component.loginForm.controls['username'].setValue(userName);
  }

  /**
   * reusable function for password dry spec
   * @param password
   */
  function setPassword(password){
    component.loginForm.controls['password'].setValue(password);
  }
});
