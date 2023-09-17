import { Component } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { UrlService } from 'src/app/services/url.service';

@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.scss']
})
export class GithubComponent {

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
