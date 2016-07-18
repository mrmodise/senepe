import {Component, OnInit} from '@angular/core';
import { PhotoService } from '../../services/photo.service';
import { User } from '../../models/user';
import { Photo } from '../../models/photo';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router-deprecated';

/**
 * @author Morebodi Modise
 * @contacts http://github.com/mrmodise, http://mrmodise.com
 */
@Component({
    selector: 'photo-list',
    templateUrl: 'app/components/photo-list/photo-list.component.html'
})

export class PhotoList implements OnInit{

    photos: Photo[];
    selectedPhoto: Photo;

    constructor(private photoService: PhotoService, private router: Router) {

    }

    ngOnInit() {
        this.photoService.getPhotos().subscribe(
            photos => this.photos = JSON.parse(JSON.parse(JSON.stringify(photos))._body)
            ,
            error => console.log(error)
        )
    }

    onSelect(photo: Photo) {
        this.selectedPhoto = photo;
        this.router.navigate(['ImageDetail', { id: this.selectedPhoto.id }]);
    }

}