import { TestBed, inject } from '@angular/core/testing';
import {AppModule} from '../app.module';
import {RouterTestingModule} from '@angular/router/testing';
import { UploadPhotoService } from './upload-photo.service';

describe('UploadPhotoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AppModule, RouterTestingModule ]
    });
  });

  it('should create upload-photo service', inject([UploadPhotoService], (service: UploadPhotoService) => {
    expect(service).toBeTruthy();
  }));
});
