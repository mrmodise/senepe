import { Injectable } from '@angular/core';
import { Photo } from '../models/photo';
import { User } from '../models/user';
import { Http, Headers } from '@angular/http';
import { ApplicationProperties } from '../config/config';
import { Observable } from 'rxjs/Rx';

/**
 * @author: Morebodi Modise
 * @purpose: add photo service to define all photo-service related functionalities
 * @contacts http://github.com/mrmodise, http://mrmodise.com
 */

@Injectable()
export class AddPhotoService {

    // bring in default settings to make code easily maintanable
    properties: ApplicationProperties = new ApplicationProperties();

    // we inject the http, which we need to send data to the backend service
    constructor(private http: Http) { }

    // sends photo information to the backend using the add-photo
    sendPhoto(photo: Photo) {
        // serialize the photo object and parse into json to send to the backend REST API
        return this
            .http
            .post(this.properties.addPhotoUrl,
            photo,
            { headers: this.properties.authHeader })
            .map(res => res.json());
    }

}