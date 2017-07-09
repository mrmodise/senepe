import {async, ComponentFixture, fakeAsync, TestBed} from '@angular/core/testing';
import { LoginComponent } from './login.component';
import {Http, HttpModule} from '@angular/http';
import {ReactiveFormsModule} from '@angular/forms';
import {LoginService} from '../../services/login.service';
import {HttpClientService} from '../../services/http-client.service';
import {RouterTestingModule} from "@angular/router/testing";

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let username = 'test';
  let password = 'test';
  let populatedUser = {username: username, password: password};
  let blankUser = {username: '', password: ''};

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LoginComponent],
      providers: [LoginService, HttpClientService, Http],
      imports: [HttpModule, ReactiveFormsModule, RouterTestingModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create LoginComponent', (() => {
    expect(component).toBeTruthy();
  }));

  it('should have default properties', fakeAsync(() => {
    expect(component.loginForm.value).toEqual(blankUser);
  }));

  it('should initialize form fields', fakeAsync(() => {
    updateForm(username, password);
    expect(component.loginForm.value).toEqual(populatedUser);
  }));

  //TODO: to refactor this test to work as per expectation
 /*it('loginFailed should be true if error occurred', fakeAsync(() => {
    updateForm(username, password);
    component.onSubmit();
    expect(component.loginFailed).toThrowError();
  }));*/

  /**
   *  create reusable function for a dry spec.
   */
  function updateForm(userName, userPassword) {
    component.loginForm.controls['username'].setValue(userName);
    component.loginForm.controls['password'].setValue(userPassword);
  }
});
