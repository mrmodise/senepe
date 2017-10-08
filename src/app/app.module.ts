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
import {ImageDetailComponent} from './components/image-detail/image-detail.component';
import {ImageCommentsComponent} from './components/image-comments/image-comments.component';
import {AlbumComponent} from './components/album/album.component';
import {AddPhotoComponent} from './components/add-photo/add-photo.component';
import {NotFoundComponent} from './components/not-found/not-found.component';
// services
import {RegisterService} from './services/register.service';
import {PhotoService} from './services/photo.service';
import {LoginService} from './services/login.service';
import {UserService} from './services/user.service';
import {AuthService} from './services/auth.service';
import {AddPhotoService} from './services/add-photo.service';
import {UploadPhotoService} from './services/upload-photo.service';
import {HttpClientService} from './services/http-client.service';
// routing
import {AdminRouting} from './app.routing';
// directive
import {HighlightDirective} from './directives/highlight.directive';
// state management
import {IAppState} from './store/IAppState';
import {store} from './store/store';
import {PhotoActions} from './store/photos.action';

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
    HighlightDirective,
    ImageDetailComponent,
    ImageCommentsComponent
  ],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule, HttpModule, NgReduxModule, AdminRouting],
  // tslint:disable-next-line:max-line-length
  providers: [
    RegisterService,
    PhotoService,
    LoginService,
    HttpClientService,
    AuthService,
    UserService,
    AddPhotoService,
    PhotoActions,
    UploadPhotoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(ngRedux: NgRedux<IAppState>) {
    ngRedux.provideStore(store);
  }
}
