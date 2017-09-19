import {inject, TestBed} from '@angular/core/testing';
import {AppModule} from '../app.module';
import {RouterTestingModule} from '@angular/router/testing';
import {PhotoService} from './photo.service';
import {BaseRequestOptions, Http, RequestMethod, Response, ResponseOptions} from '@angular/http';
import {MockBackend, MockConnection} from '@angular/http/testing';
import {Config} from '../config/config';

describe('PhotoService', () => {
  let photoService: PhotoService;
  let mockBackend: MockBackend;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AppModule, RouterTestingModule],
      providers: [
        MockBackend,
        PhotoService,
        BaseRequestOptions,
        {
          provide: Http,
          useFactory: (backend, options) => new Http(backend, options),
          deps: [MockBackend, BaseRequestOptions]
        }]
    });
  });

  beforeEach(inject([PhotoService, MockBackend], (service: PhotoService, backend: MockBackend) => {
    photoService = service;
    mockBackend = backend;
  }));

  it('should return a list of photos', inject([PhotoService], (service: PhotoService) => {

    const photos = ['photo.png', 'photo-name.png', 'ostma.png'];

    mockBackend.connections.subscribe((connection: MockConnection) => {
      const options = new ResponseOptions({body: photos});

      connection.mockRespond(new Response(options));

      expect(connection.request.url).toEqual(Config.GET_PHOTOS_URL);
      expect(connection.request.method).toEqual(RequestMethod.Get);
    });

    photoService.getAllPhotos().subscribe(p => {
      expect(p).toBe(photos);
    });
  }));
});
