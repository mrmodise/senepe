export interface IPhoto {
  photoId: number;
  photoName: string;
  title: string;
  description: string;
  imageName: string;
  created: string;
  likes: number;
  commentList: any;
}

export class Photo implements IPhoto {
  photoId: number;
  photoName: string;
  title: string;
  description: string;
  imageName: string;
  created: string;
  likes: number;
  commentList: any;

  constructor() {
  }
}
