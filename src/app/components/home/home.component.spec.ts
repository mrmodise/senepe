import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeComponent } from './home.component';
import {PhotoListComponent} from '../photo-list/photo-list.component';
import {SidePanelComponent} from '../side-panel/side-panel.component';
import {PhotoService} from '../../services/photo.service';
import {HttpClientService} from '../../services/http-client.service';
import {HttpModule} from '@angular/http';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PhotoListComponent, SidePanelComponent, HomeComponent],
      providers: [PhotoService,HttpClientService],
      imports: [HttpModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create HomeComponent', () => {
    expect(component).toBeTruthy();
  });
});
