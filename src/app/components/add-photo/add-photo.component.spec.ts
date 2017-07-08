import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AddPhotoComponent } from './add-photo.component';
import {RouterTestingModule} from '@angular/router/testing';
import {AppModule} from '../../app.module';

describe('AddPhotoComponent', () => {
  let component: AddPhotoComponent;
  let fixture: ComponentFixture<AddPhotoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AppModule, RouterTestingModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPhotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create add photo form', () => {
    expect(component).toBeTruthy();
  });

  it (`should render 'Add your photo' text in h2 tag`, async(() => {
    const fixture = TestBed.createComponent(AddPhotoComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h2').textContent).toContain('Add your photo');
  }));


});
