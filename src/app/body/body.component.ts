import { Component, Input, OnInit } from '@angular/core';
import { UrlService } from '../services/url.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit{
  // à dynamiser
  // data vers sidebar
  public url= 'angular';

  ngOnInit():void {
  }
  
}
