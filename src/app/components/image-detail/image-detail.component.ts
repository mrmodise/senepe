import {Component, OnInit} from '@angular/core';
import {Photo} from '../../models/photo';
import {User} from '../../models/user';
import {PhotoService} from '../../services/photo.service';
import {UserService} from '../../services/user.service';
import {ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-image-detail',
  templateUrl: './image-detail.component.html',
  styleUrls: ['./image-detail.component.css']
})
export class ImageDetailComponent implements OnInit {
  photo: Photo;
  like: string;
  user: User;
  photoId: number;

  constructor(private photoService: PhotoService,
              private userService: UserService,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    const loggedInUser = localStorage.getItem('currentUserName');

    this.route.params.forEach((params: Params) => {
      this.photoId = Number.parseInt(params['id']);
    });

    this.photoService.getPhotoById(this.photoId).subscribe(photo => {
      this.photo = JSON.parse(JSON.parse(JSON.stringify(photo))._body);
      this.userService.getCurrentUser(loggedInUser).subscribe(user => {
        this.user = JSON.parse(JSON.parse(JSON.stringify(user))._body);

        if (this.user.likedPhotoList.filter(sPhoto => photo.photoId === this.photo.photoId)[0]) {
          this.like = 'Unlike';
        } else {
          this.like = 'Like';
        }
      });

    });
  }
}
