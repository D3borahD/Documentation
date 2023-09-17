import { Component } from '@angular/core';
import {ActivatedRoute } from '@angular/router';
import { UrlService } from 'src/app/services/url.service';

@Component({
  selector: 'app-algorithms',
  templateUrl: './algorithms.component.html',
  styleUrls: ['./algorithms.component.scss']
})
export class AlgorithmsComponent {

  constructor(
    private activatedRoute: ActivatedRoute,
    private urlService: UrlService
  ) {}

  public url:string = ''

  ngOnInit() {
    this.activatedRoute.url
      .subscribe((urlSegment) => {
        this.urlService.setUrl(urlSegment.toString())
      })
  }
}
