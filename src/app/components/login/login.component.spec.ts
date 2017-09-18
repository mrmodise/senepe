import {async, ComponentFixture, fakeAsync, TestBed} from '@angular/core/testing';
import {LoginComponent} from './login.component';
import {BaseRequestOptions, Http, HttpModule, ResponseOptions} from '@angular/http';
import {ReactiveFormsModule} from '@angular/forms';
import {LoginService} from '../../services/login.service';
import {HttpClientService} from '../../services/http-client.service';
import {RouterTestingModule} from '@angular/router/testing';
import {MockBackend} from '@angular/http/testing';
import {User} from '../../models/user';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let username, password;
  const populatedUser = {username: 'tester1', password: 'tester123'};
  const blankUser = {username: '', password: ''};
  let backend: MockBackend;
  let service: LoginService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LoginComponent],
      providers: [LoginService,
        HttpClientService,
        MockBackend,
        BaseRequestOptions,
        {
          provide: Http,
          userFactory: (backend, options) => new Http(backend, options),
          deps: [MockBackend, BaseRequestOptions]
        }],
      imports: [HttpModule, ReactiveFormsModule, RouterTestingModule]
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
    // initialize the backend
    backend = TestBed.get(MockBackend);
    // initialize the user service
    service = TestBed.get(LoginService);
    // watch changes in the fixture
    fixture.detectChanges();

    username = component.loginForm.controls['username'];
    password = component.loginForm.controls['password'];
  });

  // COMPONENT tests
  it('should create LoginComponent', (() => {
    expect(component).toBeTruthy();
  }));

  // GENERAL FORM tests
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
    updateForm('tester1', 'tester123');
    expect(component.loginForm.value).toEqual(populatedUser);
  }));

  it('loginFailed should be true if error occurred', async(() => {
    updateForm(blankUser.username, blankUser.password);
    component.onSubmit();
    expect(component.loginFailed).toBeFalsy();
  }));

  // USERNAME field tests
  it('username should be invalid', (() => {
    expect(username.valid).toBeFalsy();
  }));

  it('username should be required', (() => {
    const errors = username.errors || {};
    expect(errors['required']).toBeTruthy();
  }));

  it('username should be more than 6 characters', (() => {
    setUserName('test');
    const errors = username.errors || {};
    expect(errors['minlength']).toBeTruthy();
  }));

  it('isLoginUserNameValid should be false if username is empty', (() => {
    expect(component.validateLoginUserName()).toBeFalsy();
  }));

  it('isLoginUserNameValid should be true if username is provided', (() => {
    setUserName('Malibongwe');
    expect(component.validateLoginUserName()).toBeTruthy();
  }));

  // PASSWORD tests
  it('password should be invalid', (() => {
    expect(password.valid).toBeFalsy();
  }));

  it('password should be required', (() => {
    const errors = password.errors || {};
    expect(errors['required']).toBeTruthy();
  }));

  it('password should be more than 8 characters', (() => {
    setPassword('test');
    const errors = password.errors || {};
    expect(errors['minlength']).toBeTruthy();
  }));

  it('isLoginPasswordValid should be false if password empty', (() => {
    expect(component.validateLoginPassword()).toBeFalsy();
  }));

  it('isLoginPasswordValid should be true if password is not empty', (() => {
    setPassword('password');
    expect(component.validateLoginPassword()).toBeTruthy();
  }));

  // FORM submission
  it('submitting form should emit a JWT user token', fakeAsync(() => {
    expect(component.loginForm.valid).toBeFalsy();

    setUserName('tester1');
    setPassword('tester123');

    expect(component.loginForm.valid).toBeTruthy();

    const token = 'eyJhbGciOiJIUzUxMiJ9';
    const response = {
      'user': new User(token, username)
    };

    // when the request subscribes for results on a connection, return a fake responses
    backend.connections.subscribe(connection => {
      connection.mockRespond(new Response(<ResponseOptions>{
        body: JSON.stringify(response)
      }));
    });

  }));

  /**
   * reusable function for a dry spec.
   * @param userName
   * @param userPassword
   */
  function updateForm(userName: string, userPassword: string) {
    component.loginForm.controls['username'].setValue(userName);
    component.loginForm.controls['password'].setValue(userPassword);
  }

  /**
   * reusable function for username dry spec
   * @param userName
   */
  function setUserName(userName: string) {
    component.loginForm.controls['username'].setValue(userName);
  }

  /**
   * reusable function for password dry spec
   * @param password
   */
  function setPassword(userPassword: string) {
    component.loginForm.controls['password'].setValue(userPassword);
  }
});
