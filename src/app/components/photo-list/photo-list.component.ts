import {Component, OnInit} from '@angular/core';
import {Photo} from '../../models/photo';
import {PhotoService} from '../../services/photo.service';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit {

  photos: Photo[];

  constructor(private photoService: PhotoService){}

  ngOnInit() {

    this.photoService.getAllPhotos().subscribe(photos => {
      this.photos = photos;
    }, error => console.log(error));

  }

}
