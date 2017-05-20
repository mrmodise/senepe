// defaults
import {RouterModule, Routes} from '@angular/router';
import {ModuleWithProviders} from "@angular/core";

// custom
import {HomeComponent} from "./components/home/home.component";
import {LoginComponent} from "./components/login/login.component";

// define routes
const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path:'home',
    component: HomeComponent
  },
  {
    path: 'login',
    component: LoginComponent
  }
];

// export to use in app.module
export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
