import { TestBed, inject } from '@angular/core/testing';
import {AppModule} from '../app.module';
import {RouterTestingModule} from '@angular/router/testing';
import { LoginService } from './login.service';
import {MockBackend, MockConnection} from '@angular/http/testing';
import {BaseRequestOptions, Http, Response, RequestMethod, ResponseOptions} from '@angular/http';
import {Config} from '../config/config';

describe('LoginService', () => {
  let loginService: LoginService;
  let mockBackend: MockBackend;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AppModule, RouterTestingModule ],
      providers: [
        MockBackend,
        LoginService,
        BaseRequestOptions,
        {
          provide: Http,
          useFactory: (backend, options) => new Http(backend, options),
          deps: [MockBackend, BaseRequestOptions]
        }
      ]
    });
  });

  beforeEach(inject([LoginService, MockBackend], (service: LoginService, backend: MockBackend) => {
    loginService = service;
    mockBackend = backend;
  }));

  it('should return false if user is not authenticated', (() => {
   // expect(loginService.isAuthenticated()).toBeFalsy();
  }));

  it('should return JWT token when logged in', (() => {

    const response = {
      'token': 'AbC.Z_ki'
    };

    mockBackend.connections.subscribe((connection: MockConnection) => {
      const options = new ResponseOptions({body: JSON.stringify(response)});

      connection.mockRespond(new Response(options));

      expect(connection.request.url).toEqual(Config.LOGIN_URL);
      expect(connection.request.method).toEqual(RequestMethod.Post);
    });

    loginService.login({username: 'tester1', password: 'tester123'}).subscribe(t => {
      expect(t.token).toEqual(response.token);
    });
  }));
});
