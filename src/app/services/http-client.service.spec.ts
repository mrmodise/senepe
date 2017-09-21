import { TestBed, inject } from '@angular/core/testing';
import {AppModule} from '../app.module';
import {RouterTestingModule} from '@angular/router/testing';
import { HttpClientService } from './http-client.service';

describe('HttpClientService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AppModule, RouterTestingModule ]
    });
  });

  it('should create http-client service', inject([HttpClientService], (service: HttpClientService) => {
    expect(service).toBeTruthy();
  }));
});
