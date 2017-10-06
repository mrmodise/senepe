import {NgRedux} from '@angular-redux/store';
import {IAppState} from './IAppState';
import {Injectable} from '@angular/core';
import {PhotoService} from '../services/photo.service';

export const STORE_PHOTOS = 'photos/SAVE';
export const REQUEST_PHOTOS_SUCCESS = 'photos/ALL_PHOTOS';

@Injectable()
export class PhotoActions {

  constructor(private ngRedux: NgRedux<IAppState>,
              private photoService: PhotoService) {
  }

  /**
   * retrieves list of photos from the service
   */
  getPhotos() {
    this.photoService.getAllPhotos().subscribe(photos => {
      this.ngRedux.dispatch({
        type: REQUEST_PHOTOS_SUCCESS,
        photos
      })
    }, error => console.log(error));
  }

  /**
   * Dispatch action on the store when action is called
   */
  savePhotos() {
    this.ngRedux.dispatch({
      type: STORE_PHOTOS
    });
  }
}
