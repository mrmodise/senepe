import {Component, OnInit} from '@angular/core';
import {UserService} from '../../services/user.service';
import {User} from '../../models/user';
import {Photo} from '../../models/photo';
import {AddPhotoService} from "../../services/add-photo.service";

@Component({
  selector: 'app-add-photo',
  templateUrl: './add-photo.component.html',
  styleUrls: ['./add-photo.component.css']
})
export class AddPhotoComponent implements OnInit {

  // retrieve loggedin user from local storage
  private currentUserName = localStorage.getItem('currentUserName');
  private user: User;
  newPhoto: Photo = new Photo();
  private photoAdded: boolean = false;

  constructor(private userService: UserService, private addPhotoService: AddPhotoService) {
  }

  ngOnInit() {
  }

  private onSubmit() {
    this.userService.getUserByName(this.currentUserName).subscribe(user => {
      this.user = JSON.parse(JSON.parse(JSON.stringify(user))._body);
      console.log(this.user);
      this.newPhoto.user = this.user;
      this.addPhotoService.sendPhoto(this.newPhoto).subscribe(photo => {
        this.photoAdded = true;
        this.newPhoto = new Photo();
      }, error => console.log(error));
    }, error => console.log(error));
  }
}
