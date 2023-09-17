import { Component } from '@angular/core';
import {ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-algorithms',
  templateUrl: './algorithms.component.html',
  styleUrls: ['./algorithms.component.scss']
})
export class AlgorithmsComponent {

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.activatedRoute.url
      .subscribe((url) => console.log('The URL changed to: ' + url));
  }
}
