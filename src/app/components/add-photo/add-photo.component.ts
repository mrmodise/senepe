import {Component, OnInit} from '@angular/core';
import {UserService} from '../../services/user.service';
import {Photo} from '../../models/photo';
import {AddPhotoService} from "../../services/add-photo.service";
import {UploadPhotoService} from "../../services/upload-photo.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-add-photo',
  templateUrl: './add-photo.component.html',
  styleUrls: ['./add-photo.component.css']
})
export class AddPhotoComponent implements OnInit {

  addPhotoForm: FormGroup;
  newPhoto: Photo;
  photoAdded = false;
  private message;

  constructor(private userService: UserService,
              private addPhotoService: AddPhotoService,
              private uploadPhotoService: UploadPhotoService,
              private fb: FormBuilder) {
    this.createForm();
  }

  ngOnInit() {
  }

  /**
   * triggered when the user hits the submit button
   */
  public onSubmit() {
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
   * using the form build, create form properties
   */
  private createForm(){
    this.addPhotoForm = this.fb.group({
      photoName: ['', Validators.required],
      title: ['', Validators.required],
      description: ['']
    })
  }


}
