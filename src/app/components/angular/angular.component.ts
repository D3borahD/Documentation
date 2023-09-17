import { Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { map, tap } from 'rxjs';
import { UrlService } from 'src/app/services/url.service';

@Component({
  selector: 'app-angular',
  templateUrl: './angular.component.html',
  styleUrls: ['./angular.component.scss']
})
export class AngularComponent {

  //public routerUrl:string = this.router.url
  constructor(
    private activatedRoute: ActivatedRoute,
    private urlService: UrlService
  ) {}

  public url:string = ''

  ngOnInit() {
    this.activatedRoute.url
      .subscribe((urlSegment) => {

        this.urlService.setUrl(urlSegment.toString())
        console.log(' this.url : ', urlSegment.toString())
      })
  }

}
