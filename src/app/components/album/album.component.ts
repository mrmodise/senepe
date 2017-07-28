// defaults
import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

// custom
import {Photo} from '../../models/photo';
import {PhotoService} from '../../services/photo.service';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})

export class AlbumComponent implements OnInit {

  // variables initialization
  photos: Photo[];
  user;
  selectedPhoto: Photo;
  parentRouter: Router;
  currentUser = localStorage.getItem('currentUserName');

  constructor(private photoService: PhotoService,
              private router: Router,
              private userService: UserService) {
  }

  ngOnInit() {
  }

  onSelect(photo: Photo) {
    this.selectedPhoto = photo;
    this.parentRouter.navigate(['/image-details', this.selectedPhoto.photoId]);
  }

}
