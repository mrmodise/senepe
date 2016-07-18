import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { ApplicationProperties } from '../config/config';
import { Comment } from '../models/comment';
/**
 * @author: Morebodi Modise
 * @purpose: comments service to define all image comments related functionalities
 * @contacts http://github.com/mrmodise, http://mrmodise.com
 */
@Injectable()
export class CommentService {

    properties: ApplicationProperties = new ApplicationProperties();

    constructor(private http: Http) { }

    addComment(comment: Comment) {
        return this
            .http
            .post(this.properties.addCommentUrl, 
            JSON.stringify(comment), 
            { headers: this.properties.jsonHeader });
    }

}