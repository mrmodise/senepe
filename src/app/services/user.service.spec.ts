import {TestBed, inject} from '@angular/core/testing';
import {AppModule} from '../app.module';
import {RouterTestingModule} from '@angular/router/testing';
import {UserService} from './user.service';

describe('UserService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AppModule, RouterTestingModule]
    });
  });

  it('should user service', inject([UserService], (service: UserService) => {
    expect(service).toBeTruthy();
  }));
});
