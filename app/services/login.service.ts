// import modules to be used in this service
import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {Router} from '@angular/router-deprecated';
import { ApplicationProperties } from '../config/config';

/**
 * @author: Morebodi Modise
 * @purpose: login service to define all login-related functionalities
 * @contacts http://github.com/mrmodise, http://mrmodise.com
 */
@Injectable()
export class LoginService {
    // stores the token information
    token: string;

    // bring in default settings to make code easily maintanable
    properties: ApplicationProperties = new ApplicationProperties();

    // we inject the http, which we need to send data to the backend service
    // the router will be needed for redirecting the user from view to view
    constructor(private http: Http, private router: Router) { }

    login(model) {
        // serialize the model object and pass it to backend
        return this
            .http
            .post(this.properties.loginUrl, JSON.stringify(model), { headers: this.properties.jsonHeader });
    }

    sendToken(token) {
        let headers = new Headers({ 'Authorization': 'Bearer ' + token });
        return this
            .http
            .get(this.properties.sendTokenUrl, { headers: headers });
    }
    // checks whether the user is logged in, 
    // this we will use to ensure only logged in users have access to some pages 
    isAuthenticated() {
        if (localStorage.getItem("currentUserName") != "" && localStorage.getItem("token") != "") {
            return true;
        } else {
            return false;
        }
    }

    // upon logging out clear token and username
    logout() {
        localStorage.setItem("token", "");
        localStorage.setItem("currentUserName", "");
        alert("You have been logged out");
        this.router.navigate(['Home']);
    }

    getLoggedInUser(){
        return localStorage.getItem("currentUserName");
    }
}