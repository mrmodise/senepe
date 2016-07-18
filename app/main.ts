import { bootstrap }    from '@angular/platform-browser-dynamic';
import { AppComponent } from './app.component';
import {ROUTER_BINDINGS} from '@angular/router-deprecated';
import { disableDeprecatedForms, provideForms } from '@angular/forms';

bootstrap(AppComponent, [ROUTER_BINDINGS, disableDeprecatedForms(), provideForms()])
    .catch(err => console.log(err));