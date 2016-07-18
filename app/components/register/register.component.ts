import { Component, OnInit } from '@angular/core';
import { Control, ControlGroup, NgForm, Validators } from '@angular/common';
import {User} from '../../models/user';
import {RegisterService} from '../../services/register.service';
import {Password, InputText} from 'primeng/primeng';

/**
 * @author Morebodi Modise
 * @contacts http://github.com/mrmodise, http://mrmodise.com
 */

@Component({
    selector: 'register',
    directives: [Password, InputText],
    templateUrl: 'app/components/register/register.component.html'
})
export class RegisterComponent implements OnInit {
    //initializing a new user
    newUser: User = new User();
    // user is not yet registetered
    registered: boolean = false;
    // incase of an error
    error: boolean = false;
    
    constructor(private registerService: RegisterService){
           
    }

    ngOnInit(){

    }
    
    register(){
        this.registerService.sendUser(this.newUser).subscribe(
            data => {
                // user is registered
                this.registered = true;
                this.newUser = new User();
            },
            error => {
                this.error = true;
                console.log(error)
            }
        );
    }
}