import {Component, OnInit} from '@angular/core';
import {Photo} from '../../models/photo';
import {PhotoService} from '../../services/photo.service';
import {Router} from '@angular/router';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit {

  ngOnInit() {

  }

}
