import { TestBed, inject } from '@angular/core/testing';
import {AppModule} from '../app.module';
import {RouterTestingModule} from '@angular/router/testing';
import { PhotoService } from './photo.service';

describe('PhotoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AppModule, RouterTestingModule ]
    });
  });

  it('should ...', inject([PhotoService], (service: PhotoService) => {
    expect(service).toBeTruthy();
  }));
});
