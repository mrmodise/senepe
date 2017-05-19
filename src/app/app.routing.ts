// defaults
import {RouterModule, Routes} from '@angular/router';
import {ModuleWithProviders} from "@angular/core";

// custom
import {HomeComponent} from "./components/home/home.component";

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
  }
];

// export to use in app.module
export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
