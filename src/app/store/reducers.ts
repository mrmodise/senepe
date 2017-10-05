import {IAppState} from './IAppState';

// export const rootReducer = null;

const initialState: IAppState = {
  photos: [{
    photoId: 'test',
    likes: 0,
    title: 'testing another photo',
    imageName: 'morebodi'
  },
    {
      photoId: 'test1',
      likes: 20,
      title: 'testing photo',
      imageName: 'praise'
    }]
};

export function reducer(state = initialState, action) {
  return state;
}
