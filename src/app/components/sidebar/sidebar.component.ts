import { Component, Input, OnInit} from '@angular/core';
import { tap } from 'rxjs';
import { UrlService } from 'src/app/services/url.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})

export class SidebarComponent implements  OnInit {

  public items!: string[]

  // data depuis BODY
  //@Input() currentPath!: string
  public currentUrl:string='angular'

  ngOnInit():void{
   // console.log('current path : ', this.currentPath);

        if(this.currentUrl === 'angular'){
          this.items  = [
            'introduction',
            'component',
            'template',
            'directives',
            'pipes',
            'services',
            'routing',
            'observables',
            'exercices'
          ]
        } else if (this.currentUrl=== 'github'){
          this.items  = [
            'github page',
          ]
        } else  if (this.currentUrl === 'algorithmique'){
          this.items  = [
            'chapitre 1 : Le rôle de l\'algorithmiques',
          ]
        }

  }


}
