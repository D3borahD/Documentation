import { Component } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.scss']
})
export class GithubComponent {

  constructor(private activatedRoute: ActivatedRoute) {}

  public activatedUrl:string = ''

  ngOnInit() {
    this.activatedRoute.url
      .subscribe((url) => console.log('The URL changed to: ' + url));
  }
}
