import { Component, OnInit } from '@angular/core';
import {PhotoList} from './photo-list/photo-list.component';
import {SidePanel} from './side-panel/side-panel.component';

/**
 * @author Morebodi Modise
 * @contacts http://github.com/mrmodise, http://mrmodise.com
 */
@Component({
    selector: 'home',
    templateUrl: 'app/components/home.component.html',
    directives: [PhotoList, SidePanel]
})

export class HomeComponent implements OnInit {

    constructor() { }

    ngOnInit() { }
}