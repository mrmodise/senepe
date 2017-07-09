import {async, ComponentFixture, fakeAsync, TestBed} from '@angular/core/testing';
import { LoginComponent } from './login.component';
import { HttpModule} from '@angular/http';
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
      providers: [LoginService, HttpClientService],
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

  it(`should render '* Username' on label tag`, (() => {
    const fixture = TestBed.createComponent(LoginComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('label').textContent).toEqual('* Username');
  }));

  it('should have default properties', fakeAsync(() => {
    expect(component.loginForm.value).toEqual(blankUser);
  }));

  it('should initialize form fields', fakeAsync(() => {
    updateForm(username, password);
    expect(component.loginForm.value).toEqual(populatedUser);
  }));

 it('loginFailed should be true if error occurred', async(() => {
    updateForm(blankUser.username, blankUser.password);
    component.onSubmit();
    expect(component.loginFailed).toBeFalsy();
  }));

  /**
   *  create reusable function for a dry spec.
   */
  function updateForm(userName, userPassword) {
    component.loginForm.controls['username'].setValue(userName);
    component.loginForm.controls['password'].setValue(userPassword);
  }
});
