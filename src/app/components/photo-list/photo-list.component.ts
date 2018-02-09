import {Component, OnInit} from '@angular/core';
import {Photo} from '../../models/photo';
import {select} from '@angular-redux/store';
import {Observable} from 'rxjs/Observable';
import {PhotoActions} from '../../store/photos.action';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit {

  @select('photos') photos$: Observable<Photo>;
  photoId: number;

  constructor(private photoActions: PhotoActions) {
  }

  ngOnInit() {
    this.photoActions.getPhotos();
  }

  onSelect(photo) {
    alert(`selected image ${JSON.stringify(photo)}`)
  }

}
