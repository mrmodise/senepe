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

  it('should return a list of photos', (() => {

    const photos = [{
      created: '2017-06-06',
      description: 'This is a description test',
      imageName: 'contact-bg.jpg',
      likes: 0,
      photoId: 1,
      photoName: 'morebodi',
      title: 'morebodi pic'
    }, {
      created: '2017-06-06',
      description: 'This is a description test',
      imageName: 'contact-bg2.jpg',
      likes: 0,
      photoId: 2,
      photoName: 'morebodi',
      title: 'pic frame'
    }];

    mockBackend.connections.subscribe((connection: MockConnection) => {
      const options = new ResponseOptions({body: JSON.stringify(photos)});
      connection.mockRespond(new Response(options));
      expect(connection.request.url).toEqual(Config.GET_PHOTOS_URL);
      expect(connection.request.method).toEqual(RequestMethod.Get);
    });

    photoService.getAllPhotos().subscribe(p => {
      expect(JSON.stringify(p)).toEqual(JSON.stringify(photos));
    });
  }));
});
