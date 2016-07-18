import { Component, OnInit } from '@angular/core';
import { Photo } from '../../models/photo';
import { PhotoService } from '../../services/photo.service';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user';
import { ApplicationProperties } from '../../config/config';
import { RouteParams } from '@angular/router-deprecated';
import { ImageComments } from '../comments/image-comments.component';
import { LoginService } from '../../services/login.service';

/**
 * @author: Morebodi Modise
 * @contacts http://github.com/mrmodise, http://mrmodise.com
 */
@Component({
    selector: 'image-detail',
    providers: [UserService, LoginService],
    directives: [ImageComments], 
    templateUrl: 'app/components/image-detail/image-detail.component.html'
})
export class ImageDetailComponent implements OnInit {
    properties: ApplicationProperties = new ApplicationProperties();
    photo: Photo = new Photo();
    like: string;
    user: User;

    constructor(
        private photoService: PhotoService,
        private userService: UserService,
        private routeParams: RouteParams,
        private loginService: LoginService) { }

    ngOnInit() {
        let photoId = Number.parseInt(this.routeParams.get('id'));
        this.photoService.getPhotoById(photoId).subscribe(
            photo => {
                this.photo = JSON.parse(JSON.parse(JSON.stringify(photo))._body);
                this.userService.getUserByName(this.properties.userNameFromLocalStorage).subscribe(
                    user => {
                        this.user = JSON.parse(JSON.parse(JSON.stringify(user))._body);
                        if (this.user.likedPhotoList.filter(photo => photo.id == this.photo.id)[0]) {
                            this.like = "Unlike";
                        } else {
                            this.like = "Like"
                        }
                    },
                    error => console.log(error)
                );
            },
            error => console.log(error)
        )
    }

    goBack() {
        window.history.back();
    }

    likeDisplay() {
        if (this.like == "Like") {
            this.like = "Unlike";
            this.user.likedPhotoList.push(this.photo);
            this.photo.likes += 1;
            this.userService.updateUser(this.user).subscribe();
            this.photoService.updatePhoto(this.photo).subscribe();
        } else {
            this.like = "Like";
            // remove photo from liked list if user unlikes the photo
            for (let i = 0; i < this.user.likedPhotoList.length; i++) {
                if (this.user.likedPhotoList[i].id == this.photo.id) {
                    this.user.likedPhotoList.splice(i, 1);
                }
            }

            this.photo.likes -= 1;
            this.userService.updateUser(this.user).subscribe();
            this.photoService.updatePhoto(this.photo).subscribe();
        }

    }
}