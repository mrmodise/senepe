// internal imports
import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

// custom imports
import {AddPhotoService} from '../../services/add-photo.service';
import {UploadPhotoService} from '../../services/upload-photo.service';
import {UserService} from '../../services/user.service';
import {Photo} from '../../models/photo';

@Component({
  selector: 'app-add-photo',
  templateUrl: './add-photo.component.html',
  styleUrls: ['./add-photo.component.css']
})

export class AddPhotoComponent implements OnInit {

  addPhotoForm: FormGroup;
  newPhoto: Photo;
  photoAdded = false;
  message;

  constructor(private userService: UserService,
              private addPhotoService: AddPhotoService,
              public uploadPhotoService: UploadPhotoService,
              private fb: FormBuilder) {

  }

  ngOnInit() {
    this.createForm();
  }

  /**
   * submits add photo details to the server
   */
  onSubmit(): void {
    this.newPhoto = this.addPhotoForm.value;
    this.addPhotoService.sendPhoto(this.newPhoto).subscribe(message => {
      this.photoAdded = true;
      this.newPhoto = new Photo();
      this.message = message;
    }, error => {
      console.log(error.message);
      this.photoAdded = false;
    });
  }

  /**
   * creates the form and its properties
   */
  createForm(): void {
    this.addPhotoForm = this.fb.group({
      photoName: ['', Validators.required],
      title: ['', Validators.required],
      description: ['']
    });
  }

  /**
   * sends uploaded photo to server
   */
  uploadPhoto(): void {
    this.uploadPhotoService.upload();
  }

}
