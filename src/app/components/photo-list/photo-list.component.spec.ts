import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PhotoListComponent } from './photo-list.component';
import {RouterTestingModule} from '@angular/router/testing';
import {AppModule} from '../../app.module';
import {PhotoService} from '../../services/photo.service';

describe('PhotoListComponent', () => {
  let component: PhotoListComponent;
  let fixture: ComponentFixture<PhotoListComponent>;
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

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AppModule, RouterTestingModule ],
      providers: [PhotoService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create PhotoList component', () => {
    expect(component).toBeTruthy();
  });
});
