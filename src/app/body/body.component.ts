import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit{
  // à dynamiser
  // data vers sidebar
  public url: string='angular'
  
  ngOnInit():void {
    // mauvais path
  }
  
}
