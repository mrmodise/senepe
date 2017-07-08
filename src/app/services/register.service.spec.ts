import { TestBed, inject } from '@angular/core/testing';
import {AppModule} from '../app.module';
import {RouterTestingModule} from '@angular/router/testing';
import { RegisterService } from './register.service';

describe('RegisterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AppModule, RouterTestingModule ]
    });
  });

  it('should ...', inject([RegisterService], (service: RegisterService) => {
    expect(service).toBeTruthy();
  }));
});
