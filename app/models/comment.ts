import {Photo} from './photo';
import {User} from './user';

// defines a comments and its attributes
export class Comment{
    commentId: number;
    photo: Photo;
    userName: string;
    content: string;
    photoId: number;
    commentDate: Date;
}