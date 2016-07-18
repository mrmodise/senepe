import { Injectable } from '@angular/core';
import { Http, Headers} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import {User} from '../models/user';
import { ApplicationProperties } from '../config/config';

/**
 * @author: Morebodi Modise
 * @purpose: register service to define adding a new user functionalities
 * @contacts: http://github.com/mrmodise, http://mrmodise.com
 */

@Injectable()
export class RegisterService {

    // bring in default settings to make code easily maintanable
    properties: ApplicationProperties = new ApplicationProperties();

    // we inject the http, which we need to send data to the backend service
    constructor(private http: Http) {
    }

    // sends user credentials to the backend
    sendUser(user: User) {
        // serialize the user object and pass it into the http POST
        return this.
            http.
            post(this.properties.registerUrl,
            JSON.stringify(user),
            { headers: this.properties.jsonHeader })
            .map(res => res.json());
    }

}