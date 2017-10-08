import {Component, OnInit} from '@angular/core';
import {Photo} from '../../models/photo';
import {PhotoService} from '../../services/photo.service';

@Component({
  selector: 'app-side-panel',
  templateUrl: './side-panel.component.html',
  styleUrls: ['./side-panel.component.css']
})
export class SidePanelComponent implements OnInit {
  photoList: Photo[];
  photoListSorted: Array<Photo>;
  photoListRanked: Array<Photo>;

  constructor(private photoService: PhotoService) {
  }

  ngOnInit() {
    this.photoService.getAllPhotos().subscribe(photos => {
      this.photoList = photos;
      this.photoListSorted = this.photoList.sort((a, b) => b.likes - a.likes);
      this.photoListRanked = [];
      for (const index in this.photoListSorted) {
        if (Number(index) < 3) {
          this.photoListRanked.push(this.photoListSorted[index]);
        } else {
          break;
        }
      }
    }, error => console.log(error || 'Something went wrong'));
  }

}
