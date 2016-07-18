import {Component} from '@angular/core';
import { PhotoRowComponent } from '../photo-row/photo-row.component';

@Component({
    selector: 'side-panel',
    directives: [PhotoRowComponent], 
    templateUrl: 'app/components/side-panel/side-panel.component.html'
})

export class SidePanel{
    
}