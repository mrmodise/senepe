import {async, ComponentFixture, fakeAsync, TestBed} from '@angular/core/testing';
import {LoginComponent} from './login.component';
import {BaseRequestOptions, Http, HttpModule, RequestMethod, Response, ResponseOptions} from '@angular/http';
import {ReactiveFormsModule} from '@angular/forms';
import {LoginService} from '../../services/login.service';
import {HttpClientService} from '../../services/http-client.service';
import {RouterTestingModule} from '@angular/router/testing';
import {MockBackend, MockConnection} from '@angular/http/testing';
import {User} from '../../models/user';
import {Config} from '../../config/config';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let username, password;
  const populatedUser = {username: 'tester1', password: 'tester123'};
  const blankUser = {username: '', password: ''};
  let loginService: LoginService;
  let mockBackend: MockBackend;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LoginComponent],
      providers: [LoginService,
        HttpClientService,
        MockBackend,
        LoginService,
        BaseRequestOptions,
        {
          provide: Http,
          useFactory: (backend, options) => new Http(backend, options),
          deps: [MockBackend, BaseRequestOptions]
        }],
      imports: [HttpModule, ReactiveFormsModule, RouterTestingModule]
    })
      .compileComponents()
      .then(() => {
        // create component and test fixture
        fixture = TestBed.createComponent(LoginComponent);
        // get test component from the fixture
        component = fixture.componentInstance;
        // trigger lifecycle function to create form
        component.ngOnInit();
        loginService = TestBed.get(LoginService);
        mockBackend = TestBed.get(MockBackend);
        // watch changes in the fixture
        fixture.detectChanges();
        // username and password from the login form
        username = component.loginForm.controls['username'];
        password = component.loginForm.controls['password'];
      });
  }));

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
  it('should log user in', fakeAsync(() => {
    mockBackend.connections.subscribe((c: MockConnection) => {
      const options = new ResponseOptions({body: JSON.stringify({username: 'tester1', token: 'test'})});
      c.mockRespond(new Response(options));

      expect(c.request.url).toEqual(Config.LOGIN_URL);
      expect(c.request.method).toEqual(RequestMethod.Post);
    });

    loginService.login({username: 'tester1', password: 'tester123'}).subscribe(data => {
      component.isLoggedIn = true;
      component.setUserSession(new User('test', 'tester1'));
      component.currentUserName = data.username;

      expect(data.token).toEqual('test');
    });

    expect(component.currentUserName).toEqual('tester1');
    expect(component.loginFailed).toBeFalsy();
    expect(component.message).toBeFalsy();
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
   * @param userPassword
   */
  function setPassword(userPassword: string) {
    component.loginForm.controls['password'].setValue(userPassword);
  }
});
