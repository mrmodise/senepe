// defaults
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {NgRedux, NgReduxModule} from '@angular-redux/store';
// custom components
import {AppComponent} from './app.component';
import {HomeComponent} from './components/home/home.component';
import {RegisterComponent} from './components/register/register.component';
import {NavbarComponent} from './components/navbar/navbar.component';
import {PhotoListComponent} from './components/photo-list/photo-list.component';
import {SidePanelComponent} from './components/side-panel/side-panel.component';
import {LoginComponent} from './components/login/login.component';
// services
import {RegisterService} from './services/register.service';
import {PhotoService} from './services/photo.service';
import {LoginService} from './services/login.service';
// routing
import {AdminRouting} from './app.routing';
import {NotFoundComponent} from './components/not-found/not-found.component';
import {AuthService} from './services/auth.service';
import {AlbumComponent} from './components/album/album.component';
import {UserService} from './services/user.service';
import {AddPhotoComponent} from './components/add-photo/add-photo.component';
import {AddPhotoService} from './services/add-photo.service';
import {UploadPhotoService} from './services/upload-photo.service';
import {HttpClientService} from './services/http-client.service';
import {HighlightDirective} from './directives/highlight.directive';
import {IAppState} from './store/IAppState';
import {store} from './store/store';

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
    AddPhotoComponent,
    HighlightDirective
  ],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule, HttpModule, AdminRouting, NgReduxModule],
  // tslint:disable-next-line:max-line-length
  providers: [RegisterService, PhotoService, LoginService, HttpClientService, AuthService, UserService, AddPhotoService, UploadPhotoService],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(ngRedux: NgRedux<IAppState>) {
    ngRedux.provideStore(store);
  }
}
