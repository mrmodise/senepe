import { Component, OnInit, Input } from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router-deprecated';
import {LoginService} from '../../services/login.service';
import { User } from '../../models/user';

/**
 * @author Morebodi Modise
 * @contacts http://github.com/mrmodise, http://mrmodise.com
 */
@Component({
    selector: 'nav-bar',
    directives: [ROUTER_DIRECTIVES],
    templateUrl: 'app/components/nav-bar/nav-bar.component.html'
})
export class NavBarComponent implements OnInit{
    
    loggedIn: string;

    constructor(private loginService: LoginService) { }

    ngOnInit(){

    }

    logoutClick() {
        // checks if the user is logged in
        if (this.loginService.isAuthenticated()) {
            localStorage.setItem("currentUserName", "");
            //if so log them out 
            this.loginService.logout();
        }
    }
}