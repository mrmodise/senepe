import {Component, OnInit} from '@angular/core';
import {Photo} from '../../models/photo';
import {PhotoService} from '../../services/photo.service';
import {Router} from '@angular/router';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {

  private photos: Photo[];
  private user;
  private selectedPhoto: Photo;
  private currentUser = localStorage.getItem('currentUserName');

  constructor(private photoService: PhotoService,
              private router: Router,
              private userService: UserService) {
  }

  ngOnInit() {
    this.userService.getUserByName(this.currentUser).subscribe(user => {
      this.user = user.username;

      this.photoService.getPhotosByUser(this.user).subscribe(photos => {
        console.log(photos);

      }, error => console.log(error))
    }, error => console.log(error));
  }

  onSelect(photo: Photo) {
    this.selectedPhoto = photo;
    this.router.navigate(['/image-details'], this.selectedPhoto.photoId);
  }

}
