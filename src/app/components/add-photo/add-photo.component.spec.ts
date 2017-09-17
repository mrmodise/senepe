import {async, ComponentFixture, TestBed} from '@angular/core/testing';
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
    // create component and test fixture
    fixture = TestBed.createComponent(AddPhotoComponent);
    // get test component from the fixture
    component = fixture.componentInstance;
    // trigger lifecycle function to create form
    component.ngOnInit();
    // watch changes in the fixture
    fixture.detectChanges();
  });

  // COMPONENT tests
  it('should create AddPhotoComponent', () => {
    expect(component).toBeTruthy();
  });

  // FORM tests
  it('should create the add-photo form', (() => {
    expect(component.createForm()).toBeTruthy();
  }));

  it('add-photo form should have default empty properties', (() => {
    expect(component.addPhotoForm.value).toEqual(blankForm);
  }));

  it('should initialize add-photo form fields', (() => {
    updateFormAttributes('Rekz', 'Rekz photo', 'This is Rekz photo');
    expect(component.addPhotoForm.value).toEqual(populatedForm);
  }));

  it('photoAdded should be false if error occurred', (() => {
    updateFormAttributes(blankForm.photoName, blankForm.title, blankForm.description);
    component.onSubmit();
    expect(component.photoAdded).toBeFalsy();
  }));

  // PHOTO NAME field tests
  it('photo name should be invalid', (() => {
    const photoName = component.addPhotoForm.controls['photoName'];
    expect(photoName.valid).toBeFalsy();
  }));

  it('photo name should be required', (() => {
    const photoName = component.addPhotoForm.controls['photoName'];
    const errors = photoName.errors || {};
    expect(errors['required']).toBeTruthy();
  }));

  it('isPhotoNameValid should be false if photo name is empty', (() => {
    expect(component.validatePhotoName()).toBeFalsy();
  }));

  it('isPhotoNameValid should be true if photo name is provided', (() => {
    setPhotoName('Praise photo');
    expect(component.validatePhotoName()).toBeTruthy();
  }));

  // PHOTO TITLE field tests
  it('photo title should be invalid', (() => {
    const photoTitle = component.addPhotoForm.controls['title'];
    expect(photoTitle.valid).toBeFalsy();
  }));

  it('photo title should be required', (() => {
    const photoTitle = component.addPhotoForm.controls['title'];
    const errors = photoTitle.errors || {};
    expect(errors['required']).toBeTruthy();
  }));

  it('isPhotoTitleValid should be false if photo name is empty', (() => {
    expect(component.validatePhotoTitle()).toBeFalsy();
  }));

  it('isPhotoTitleValid should be true if photo name is provided', (() => {
    setPhotoTitle('Praise photo album');
    expect(component.validatePhotoTitle()).toBeTruthy();
  }));

  // PHOTO DESCRIPTION field tests
  it('photo description should be valid', (() => {
    const photoDescription = component.addPhotoForm.controls['description'];
    expect(photoDescription.valid).toBeTruthy();
  }));

  it('photo description should not be required', (() => {
    const photoDescription = component.addPhotoForm.controls['description'];
    const errors = photoDescription.errors || {};
    expect(errors['required']).toBeFalsy();
  }));

  /**
   *  create reusable function for a dry spec.
   */
  function updateFormAttributes(photoName, title, description) {
    component.addPhotoForm.controls['photoName'].setValue(photoName);
    component.addPhotoForm.controls['title'].setValue(title);
    component.addPhotoForm.controls['description'].setValue(description);
  }

  /**
   * reusable function for photo name dry spec
   * @param photoName
   */
  function setPhotoName(photoName) {
    component.addPhotoForm.controls['photoName'].setValue(photoName);
  }

  /**
   * reusable function for photo name dry spec
   * @param photoTitle
   */
  function setPhotoTitle(photoTitle) {
    component.addPhotoForm.controls['title'].setValue(photoTitle);
  }

});
