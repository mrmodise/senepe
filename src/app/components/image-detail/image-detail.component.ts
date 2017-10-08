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

    // retrieve list of parameters
    this.route.params.forEach((params: Params) => {
      // retrieve the photo ID
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

  goBack() {
    window.history.back();
  }

  likeDisplay() {
    if (this.like === 'Like') {
      this.like = 'Unlike';
      this.user.likedPhotoList.push(this.photo);
      this.photo.likes += 1;
      this.userService.updateUser(this.user).subscribe();
      this.photoService.updatePhoto(this.photo).subscribe();
    } else {
      this.like = 'Like';

      for (let i = 0; i < this.user.likedPhotoList.length; i++) {
        if (this.user.likedPhotoList[i].photoId === this.photo.photoId) {
          this.user.likedPhotoList.splice(i, 1)
        }
      }

      this.photo.likes -= 1;
      this.userService.updateUser(this.user).subscribe();
      this.photoService.updatePhoto(this.photo).subscribe();
    }
  }
}
