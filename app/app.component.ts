import { Component, OnInit } from '@angular/core';
import {HomeComponent} from './components/home.component';
import {NavBarComponent} from './components/nav-bar/nav-bar.component';
import {LoginComponent} from './components/login/login.component';
import {RouteConfig, Router, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router-deprecated';
import { ErrorComponent } from './components/error/error.component';
import {RegisterComponent} from './components/register/register.component';
import {HTTP_PROVIDERS} from '@angular/http';
import {RegisterService} from './services/register.service';
import { PhotoService } from './services/photo.service';
import { AlbumComponent } from './components/album/album.component';
import { LoginService } from './services/login.service';
import { AddPhotoComponent } from './components/add-photo/add-photo.component';
import { HeaderComponent } from './components/header/header.component';
import { ImageDetailComponent } from './components/image-detail/image-detail.component';
/**
 * @author Morebodi Modise
 * @contacts http://github.com/mrmodise, http://mrmodise.com
 */

@Component({
    selector: 'senepe',
    directives: [HomeComponent, NavBarComponent, ImageDetailComponent, AlbumComponent, HeaderComponent, ROUTER_DIRECTIVES, AddPhotoComponent, ErrorComponent],
    providers: [HTTP_PROVIDERS, RegisterService, LoginService, PhotoService, ROUTER_PROVIDERS],
    template: `
    <header></header>
    <nav-bar></nav-bar>
    <router-outlet></router-outlet>`
})

// sets up all routes mapping
@RouteConfig([
    { path: '/', name: 'Home', component: HomeComponent, useAsDefault: true },
    { path: '/register', name: 'Register', component: RegisterComponent },
    { path: '/login', name: 'Login', component: LoginComponent },
    { path: '/album', name: 'Album', component: AlbumComponent },
    { path: '/add-photo', name: 'AddPhoto', component: AddPhotoComponent },
    { path: '/**', name: '404', component: ErrorComponent },
    { path: '/image-detail/:id', name: 'ImageDetail', component: ImageDetailComponent }
])

export class AppComponent implements OnInit {

    loggedIn: string;

    constructor() { }

    ngOnInit() {
        
    }

}