import {Component} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import { ApplicationProperties } from '../../config/config';
import {LoginService} from '../../services/login.service';
import {Router} from '@angular/router-deprecated';
import { NgForm } from '@angular/common';

/**
 * @author Morebodi Modise
 * @contacts http://github.com/mrmodise, http://mrmodise.com
 */
@Component({
    selector: 'login',
    templateUrl: 'app/components/login/login.component.html'
})

export class LoginComponent {
    properties: ApplicationProperties = new ApplicationProperties();
    private model = { 'username': '', 'password': '' };
    private currentUserName;
    error: boolean = false;
    err: any;
    errBody: any;
    body: {};

    constructor(private loginService: LoginService, private router: Router) { }

    onSubmit() {
        //send credentials to the backend for validation
        this.loginService.login(this.model).subscribe(
            data => {

               localStorage.setItem("token", JSON.parse(JSON.stringify(data))._body);

                this.loginService.sendToken(localStorage.getItem("token")).subscribe(

                    data => {
                        this.currentUserName = this.model.username;
                        localStorage.setItem("currentUserName", this.model.username);
                        this.model.username = "";
                        this.model.password = "";
                        this.router.parent.navigateByUrl('/');
                    }
                )
            }, err => {
                this.err = err.status;
                this.errBody = err._body;
                this.body = err._body;
                this.error = true;
            }
        )
    }
}