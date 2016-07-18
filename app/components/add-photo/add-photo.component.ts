import { Component } from '@angular/core';
import { User } from '../../models/user';
import { Photo } from '../../models/photo';
import { AddPhotoService } from '../../services/add-photo.service';
import { UserService } from '../../services/user.service';
import { ApplicationProperties } from '../../config/config';
import { UploadPhotoService } from '../../services/upload-photo.service';

/**
 * @author Morebodi Modise
 * @contacts http://github.com/mrmodise, http://mrmodise.com
 */
@Component({
    selector: 'add-photo',
    providers: [UploadPhotoService, AddPhotoService, UserService],
    templateUrl: 'app/components/add-photo/add-photo.component.html'
})
export class AddPhotoComponent {
    // 
    properties: ApplicationProperties = new ApplicationProperties();
    newPhoto: Photo = new Photo();
    photoAdded: boolean = false;
    user: User;
    toggleActive: boolean = false;

    constructor(
        private uploadPhotoService: UploadPhotoService,
        private addPhotoService: AddPhotoService,
        private userService: UserService
    ) {}

    addPhotoSubmit() {
        this.userService.getUserByName(this.properties.userNameFromLocalStorage).subscribe(
            user => {
                this.user = JSON.parse(JSON.parse(JSON.stringify(user))._body);
                this.newPhoto.user = this.user;
                this.addPhotoService.sendPhoto(this.newPhoto).subscribe(
                    data => {
                        this.photoAdded = true;
                        this.newPhoto = new Photo
                    }
                ),
                error => console.log(error)
            }
        ),
        error => console.log(error)
    }

    toggleUpload(){
        this.toggleActive = true;
    }
}