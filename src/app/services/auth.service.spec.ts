import { TestBed, inject } from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {AppModule} from '../app.module';
import { AuthService } from './auth.service';

describe('AuthService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AppModule, RouterTestingModule ]
    });
  });

  it('should create auth service', inject([AuthService], (service: AuthService) => {
    expect(service).toBeTruthy();
  }));
});
