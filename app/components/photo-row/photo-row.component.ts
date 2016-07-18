import { Component, OnInit } from '@angular/core';
import { Photo } from '../../models/photo';
import { PhotoService } from '../../services/photo.service';

@Component({
    selector: 'photo-row',
    templateUrl: 'app/components/photo-row/photo-row.component.html'
})
export class PhotoRowComponent implements OnInit {

    photoList: Photo[];
    photoListSorted: Photo[];
    photoListRanked: Photo[];

    constructor(private photoService: PhotoService) { }

    ngOnInit() {
        this.photoService.getPhotos().subscribe(
            data => {
                this.photoList = JSON.parse(JSON.parse(JSON.stringify(data))._body);
                this.photoListSorted = this.photoList.sort((a, b) => b.likes - a.likes);

                this.photoListRanked = [];

                for (let index in this.photoListSorted){
                    if (Number(index) < 3){
                        this.photoListRanked.push(this.photoListSorted[index]);
                    }else{
                        break;
                    }
                }
            },error => console.log(error)
        )
     }

}