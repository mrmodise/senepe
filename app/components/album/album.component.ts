import { Component, OnInit } from '@angular/core';
import {User} from '../../models/user';
import {Photo} from '../../models/photo';
import {PhotoService } from '../../services/photo.service';
import {UserService } from '../../services/user.service';
import { LoginService } from '../../services/login.service';
import { ApplicationProperties } from '../../config/config';
import {Router, ROUTER_DIRECTIVES} from '@angular/router-deprecated';

/**
 * @author Morebodi Modise
 * @contacts http://github.com/mrmodise, http://mrmodise.com
 */
@Component({
    selector: 'album',
    directives: [ROUTER_DIRECTIVES],
    providers: [UserService, LoginService],
    templateUrl: 'app/components/album/album.component.html'
})
export class AlbumComponent implements OnInit {
    photo: Photo = new Photo();
    like: string;
    properties: ApplicationProperties = new ApplicationProperties();
    private photos: Photo[];
    private user;
    private selectedPhoto: Photo;
    private isDeleted: boolean = false;

    constructor(
        private photoService: PhotoService,
        private router: Router,
        private userService: UserService,
        private loginService: LoginService
    ) {

    }

    ngOnInit() {
        // check if the user is logged in otherwise redirect them to login
        if (this.loginService.isAuthenticated() === false) {
            this.router.navigate(['Login']);
        }

        //retrieve the username from HTML5 localStorage
        this.userService.getUserByName(this.properties.userNameFromLocalStorage).subscribe(
            user => {
                this.user = JSON.parse(JSON.parse(JSON.stringify(user))._body);
                // retrieve the photo by user above
                this.photoService.getPhotosByUser(this.user).subscribe(
                    photos => {
                        this.photos = JSON.parse(JSON.parse(JSON.stringify(user))._body).photoList;
                        console.log(this.photos)
                    }
                ),
                    error => console.log(error)
            }
        ),
            error => console.log(error);

    }
    // handles click event on a single photo
    onSelect(photo: Photo) {
        this.selectedPhoto = photo;
        this.router.navigate(['ImageDetail', { id: this.selectedPhoto.id }]);
    }
    // delete user specific photo
    deletePhoto(photo: Photo) {
        // send the user's photo details to backend for deletion
        console.log(photo.id)
        this.photoService.deletePhoto(photo.id).subscribe(
            photo => {
                this.router.navigate(['AddPhoto']);
                alert("The photo has been successfully deleted");
            },
            error => {
                alert("Photo deletion failed");
            }
        )
    }
}