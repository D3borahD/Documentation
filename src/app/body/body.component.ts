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
 // public url= 'angular';
  public url!: string;
 // public url$ = this.urlService.getUrl().getValue();

  constructor(private urlService: UrlService) {
    // Obtenez l'URL depuis le service
    /*this.url = this.urlService.getUrl();*/
  }


  ngOnInit():void {
    this.urlService.getUrl().subscribe((url) => {
      this.url = url;
    });
    console.log('get url body : ', this.url)
    console.log('Composant parent initialisé');
  }

}
