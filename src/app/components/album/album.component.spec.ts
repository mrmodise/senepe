import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AlbumComponent } from './album.component';
import {HttpModule} from '@angular/http';
import {PhotoService} from '../../services/photo.service';
import {HttpClientService} from '../../services/http-client.service';
import {RouterTestingModule} from '@angular/router/testing';
import {UserService} from '../../services/user.service';

describe('AlbumComponent', () => {
  let component: AlbumComponent;
  let fixture: ComponentFixture<AlbumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AlbumComponent],
      providers: [PhotoService, HttpClientService, UserService],
      imports: [HttpModule, RouterTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlbumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create AlbumComponent', () => {
    expect(component).toBeTruthy();
  });
});
