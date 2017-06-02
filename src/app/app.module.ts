// defaults
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// custom components
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PhotoListComponent } from './components/photo-list/photo-list.component';
import { SidePanelComponent } from './components/side-panel/side-panel.component';
import { LoginComponent } from './components/login/login.component';

// services
import {RegisterService} from './services/register.service';
import {PhotoService} from './services/photo.service';
import {LoginService} from './services/login.service';

// routing
import {routing} from './app.routing';
import { NotFoundComponent } from './components/not-found/not-found.component';
import {AuthService} from './services/auth.service';
import { AlbumComponent } from './components/album/album.component';
import {UserService} from './services/user.service';
import { AddPhotoComponent } from './components/add-photo/add-photo.component';
import {AddPhotoService} from './services/add-photo.service';
import {UploadPhotoService} from './services/upload-photo.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegisterComponent,
    NavbarComponent,
    PhotoListComponent,
    SidePanelComponent,
    LoginComponent,
    NotFoundComponent,
    AlbumComponent,
    AddPhotoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [RegisterService, PhotoService, LoginService, AuthService, UserService, AddPhotoService, UploadPhotoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
