export interface IPhoto {
  photoId: string;
  likes: number;
  title: string;
  imageName: string;
  description: string;
}

export class Photo implements IPhoto {
  public photoId: string;
  public likes: number;
  public title: string;
  public imageName: string;
  public description: string;

  constructor() {
  }
}
