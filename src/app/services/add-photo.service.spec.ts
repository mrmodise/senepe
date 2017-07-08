import { TestBed, inject } from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import { AddPhotoService } from './add-photo.service';
import {AppModule} from '../app.module';

describe('AddPhotoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AppModule, RouterTestingModule ]
    });
  });

  it('should ...', inject([AddPhotoService], (service: AddPhotoService) => {
    expect(service).toBeTruthy();
  }));
});
