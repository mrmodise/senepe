// defaults
import {RouterModule, Routes} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
// custom
import {HomeComponent} from './components/home/home.component';
import {LoginComponent} from './components/login/login.component';
import {RegisterComponent} from './components/register/register.component';
import {NotFoundComponent} from './components/not-found/not-found.component';
import {AlbumComponent} from './components/album/album.component';
import {AuthService} from './services/auth.service';
import {AddPhotoComponent} from 'app/components/add-photo/add-photo.component';

// define routes
const routes: Routes = [

  {path: '', pathMatch: 'full', redirectTo: 'home'},
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'album', component: AlbumComponent, canActivate: [AuthService]},
  {path: 'add-photo', component: AddPhotoComponent},
  {path: '**', component: NotFoundComponent}
];

// export to use in app.module
export const AdminRouting: ModuleWithProviders = RouterModule.forRoot(routes);


