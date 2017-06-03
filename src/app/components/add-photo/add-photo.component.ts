import {Component, OnInit} from '@angular/core';
import {UserService} from '../../services/user.service';
import {User} from '../../models/user';
import {Photo} from '../../models/photo';
import {AddPhotoService} from "../../services/add-photo.service";
import {UploadPhotoService} from "../../services/upload-photo.service";

@Component({
  selector: 'app-add-photo',
  templateUrl: './add-photo.component.html',
  styleUrls: ['./add-photo.component.css']
})
export class AddPhotoComponent implements OnInit {

  // retrieve loggedin user from local storage
  private currentUserName = localStorage.getItem('currentUserName');
  private token = localStorage.getItem('token');
  newPhoto: Photo = new Photo();
  private photoAdded: boolean = false;

  constructor(private userService: UserService,
              private addPhotoService: AddPhotoService,
              private uploadPhotoService: UploadPhotoService) {
  }

  ngOnInit() {
  }

  onSubmit() {

    this.addPhotoService.sendPhoto(this.newPhoto).subscribe(photo => {
      this.photoAdded = true;
      this.newPhoto = new Photo();
    }, error => console.log(error.message));
  }
}
