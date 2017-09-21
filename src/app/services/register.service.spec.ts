import {inject, TestBed} from '@angular/core/testing';
import {AppModule} from '../app.module';
import {RouterTestingModule} from '@angular/router/testing';
import {RegisterService} from './register.service';

describe('RegisterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AppModule, RouterTestingModule]
    });
  });

  it('should create register service', inject([RegisterService], (service: RegisterService) => {
    expect(service).toBeTruthy();
  }));
});
