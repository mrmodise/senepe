// defaults
import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
// custom
import {Photo} from '../../models/photo';
import {User} from '../../models/user';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})

export class AlbumComponent implements OnInit {

  photos: Array<Photo>;
  user: User;
  selectedPhoto: Photo;
  parentRouter: Router;

  constructor() {
  }

  ngOnInit() {
  }

  onSelect(photo: Photo) {
    this.selectedPhoto = photo;
    this.parentRouter.navigate(['/image-detail', this.selectedPhoto.photoId]);
  }

}
