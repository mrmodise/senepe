import { TestBed, inject } from '@angular/core/testing';

import { UploadPhotoService } from './upload-photo.service';

describe('UploadPhotoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UploadPhotoService]
    });
  });

  it('should ...', inject([UploadPhotoService], (service: UploadPhotoService) => {
    expect(service).toBeTruthy();
  }));
});
