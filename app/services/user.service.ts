import { User } from '../models/user';
import { Component, Injectable } from '@angular/core';
import { Photo } from '../models/photo';
import { Http, Headers } from '@angular/http';
import { ApplicationProperties } from '../config/config';

/**
 * @author: Morebodi Modise
 * @purpose: user service to define all user-related functionalities
 * @date: July 2016
 */

@Injectable()
export class UserService {
    // bring in default settings to make code easily maintanable
    properties: ApplicationProperties = new ApplicationProperties();

    // we inject the http, which we need to send data to the backend service
    constructor(private http: Http) { }

    // return each user by their username
    getUserByName(username: string) {
        return this
            .http
            .post(this.properties.userNameUrl,
            username,
            { headers: this.properties.authHeader });
    }
    
     // updates user details
    updateUser(user: User) {
        return this
            .http
            .post(this.properties.userUpdateUrl,
            user,
            { headers: this.properties.authHeader })
            .map(res => res.json());
    }
}