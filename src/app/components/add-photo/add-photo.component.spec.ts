import {async, ComponentFixture, fakeAsync, TestBed} from '@angular/core/testing';
import {AddPhotoComponent} from './add-photo.component';
import {UserService} from '../../services/user.service';
import {AddPhotoService} from '../../services/add-photo.service';
import {UploadPhotoService} from '../../services/upload-photo.service';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientService} from '../../services/http-client.service';
import {HttpModule} from '@angular/http';

describe('AddPhotoComponent', () => {
  let component: AddPhotoComponent;
  let fixture: ComponentFixture<AddPhotoComponent>;
  const blankForm = {photoName: '', title: '', description: ''};
  const populatedForm = {photoName: 'Rekz', title: 'Rekz photo', description: 'This is Rekz photo'};

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AddPhotoComponent],
      providers: [UserService, AddPhotoService, UploadPhotoService, HttpClientService],
      imports: [ReactiveFormsModule, HttpModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPhotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create AddPhotoComponent', () => {
    expect(component).toBeTruthy();
  });

  it(`should render title in h2 tag`, () => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h2').textContent).toEqual('Uploading your favorite photos has never been this easy');
  });

  it('should have default properties', fakeAsync(() => {
    expect(component.addPhotoForm.value).toEqual(blankForm);
  }));

  it('should initialize form fields', fakeAsync(() => {
    updateFormAttributes('Rekz', 'Rekz photo', 'This is Rekz photo');
    expect(component.addPhotoForm.value).toEqual(populatedForm);
  }));

  it('photoAdded should be false if error occurred', async(() => {
    updateFormAttributes(blankForm.photoName, blankForm.title, blankForm.description);
    component.onSubmit();
    expect(component.photoAdded).toBeFalsy();
  }));

  /**
   *  create reusable function for a dry spec.
   */
  function updateFormAttributes(photoName, title, description) {
    component.addPhotoForm.controls['photoName'].setValue(photoName);
    component.addPhotoForm.controls['title'].setValue(title);
    component.addPhotoForm.controls['description'].setValue(description);
  }

});
