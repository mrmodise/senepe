import {Component, Input, OnInit} from '@angular/core';
import {Photo} from '../../models/photo';
import {PhotoService} from '../../services/photo.service';
import {UserService} from '../../services/user.service';
import {User} from '../../models/user';
import {Comment} from '../../models/comment';
import {CommentService} from '../../services/comment.service';
import { LoginService } from '../../services/login.service';

/**
 * @author: Morebodi Modise
 * @contacts http://github.com/mrmodise, http://mrmodise.com
 */
@Component({
  selector: 'image-comments',
  providers: [CommentService, LoginService],
  templateUrl: 'app/components/comments/image-comments.component.html'
})
export class ImageComments implements OnInit {
  @Input('photo') photo: Photo;
  myLocalStorage = localStorage;
  user: User = new User();
  newComment = new Comment();

  constructor(
    private userService: UserService,
    private commentService: CommentService,
    private photoService: PhotoService,
    private loginService: LoginService
  ) { }

  ngOnInit() {
    this.userService.getUserByName(localStorage.getItem("currentUserName")).subscribe(
      user => {
        this.user = JSON.parse(JSON.parse(JSON.stringify(user))._body);
      },
      error => console.log(error)
    )
  }

  onSubmit() {
    this.newComment.photo = this.photo;
    this.newComment.userName = this.user.userName;
    this.newComment.photoId = this.photo.id;
    this.newComment.commentDate = new Date();

    this.commentService.addComment(this.newComment).subscribe(
      photo => this.photoService.getPhotoById(this.photo.id).subscribe(
        photo => this.photo = JSON.parse(JSON.parse(JSON.stringify(photo))._body),
        error => console.log(error)
      )
    );
    this.newComment = new Comment();
  }
}