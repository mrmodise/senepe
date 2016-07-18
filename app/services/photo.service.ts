import { Injectable } from '@angular/core';
import {User} from '../models/user';
import { Http, Headers } from '@angular/http';
import { ApplicationProperties } from '../config/config';
import {Observable} from 'rxjs/Rx';
import { Photo } from '../models/photo';

/**
 * @author: Morebodi Modise
 * @purpose: photo service to define all photo-related functionalities
 * @contacts: http://github.com/mrmodise, http://mrmodise.com
 */

@Injectable()
export class PhotoService {

    // bring in default settings to make code easily maintanable
    properties: ApplicationProperties = new ApplicationProperties();

    // we inject the http, which we need to send data to the backend service
    constructor(private http: Http) { }

    // gets the logged in user's photos
    getPhotosByUser(user: User) {
        // because the backend may take a while to upload and reflect photos to front-end
        // we keep checking every 10 seconds for each newly added photo
        // this will also ensure that new photos are displayed without the user refreshing the application
        // HOWEVER THIS METHOD WILL COMPLETELY FAIL IN PRODUCTION, THINK SCALABILITY
        return this.http.post(
                this.properties.photoByUserUrl,
                JSON.stringify(user),
                { headers: this.properties.authHeader });
    }

    // gets the logged in user's photo
    getPhotoById(photoId: number) {
        return this
            .http
            .post(this.properties.photoByIdUrl,
            JSON.stringify(photoId),
            { headers: this.properties.authHeader });
    }
    // deletes photo a particular user
    deletePhoto(photoId: number) {
        // back-end rest API url to delete a photo
        let deletePhotoUrl: string = "http://localhost:8011/rest/photo/delete/" + photoId;
        return this
            .http
            .delete(deletePhotoUrl, photoId);
    }

    // gets the logged in user's photo and sends it to backend for updating
    updatePhoto(photo: Photo) {
        return this
            .http
            .post(this.properties.photoUpdateUrl,
            photo,
            { headers: this.properties.authHeader })
            .map(res => res.json());
    }

    // gets all photos from the backend
    getPhotos() {
        return this
            .http
            .get(this.properties.allPhotosUrl,
            { headers: this.properties.jsonHeader });
    }
}