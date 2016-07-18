/// <reference path="../../../typings/index.d.ts" />
import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
// we need JQuery for particles background
declare var $: JQueryStatic;

/**
 * @author Morebodi Modise
 * @contacts http://github.com/mrmodise, http://mrmodise.com
 */

@Component({
    selector: 'header',
    styleUrls: ['app/resources/css/header.css', 'app/resources/css/bootstrap.min.css'],
    templateUrl: 'app/components/header/header.component.html'
})
export class HeaderComponent implements OnInit, AfterViewInit {

    constructor() { }

    ngOnInit() { }

    ngAfterViewInit() {
        // setup jquery for particles header
        $(document).ready(function () {
            // set the particles properties
            $('#particles').particleground({
                dotColor: '#16a085',
                lineColor: '#ffffff',
                minSpeedY: 0.5,
                particleRadius: 7,
                proximity: 100,
                density: 4000
            });

        });
    }

}