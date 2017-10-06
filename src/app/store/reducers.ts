import {IAppState} from './IAppState';
import {REQUEST_PHOTOS_SUCCESS} from './photos.action';

const initialState: IAppState = {
  photos: []
};

/**
 * stores photos in the redux store
 * @param state
 * @param action
 * @returns {IAppState}
 */
function storePhotos(state, action): IAppState {
  return Object.assign({}, state, {
    photos: action.photos,
  });
}

/**
 * Manipulates the Redux state while ensuring immutability
 * @param {IAppState} state
 * @param action
 * @returns {any}
 */
export function reducer(state = initialState, action): any {
  switch (action.type) {
    case REQUEST_PHOTOS_SUCCESS:
      return storePhotos(state, action);
    default:
      return state;
  }
}
