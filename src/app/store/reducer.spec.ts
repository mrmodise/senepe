import {reducer} from './reducers';
import {IPhoto} from '../models/photo';

describe('reducer()', () => {
  it('reducers', () => {
    const _photos: Array<IPhoto> = [{
      photoId: 1,
      photoName: 'morebodi',
      title: 'morebodi pic',
      description: 'This is a description test',
      imageName: 'contact-bg.jpg',
      created: '2017-06-06',
      likes: 0,
      commentList: []
    }, {
      photoId: 2,
      photoName: 'MODISE',
      title: 'MODISE pic',
      description: 'This is a description test',
      imageName: 'blog-img-2.jpg',
      created: '2017-06-06',
      likes: 0,
      commentList: []
    }, {
      photoId: 3,
      photoName: 'testing aimag',
      title: 'photo title testing',
      description: 'testinf the description',
      imageName: 'WhatsApp Image 2017-10-03 at 15.32.05.jpeg',
      created: '2017-10-08',
      likes: 0,
      commentList: []
    }, {
      photoId: 4,
      photoName: 'dfdsfdsf',
      title: 'dfdsfsf',
      description: 'dsfdsffdsf',
      imageName: 'testing.jpg',
      created: '2017-10-08',
      likes: 0,
      commentList: []
    }];
    let state;
    state = reducer({photos: []}, {type: 'photos/ALL_PHOTOS', photos: _photos});
    expect(state).toEqual({photos: _photos});
  });
});
