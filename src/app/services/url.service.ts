import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UrlService {

  private currentUrl:string='angular'


  public setUrl(url:string):void {
    this.currentUrl = url
    console.log('je suis le service SET: ', this.currentUrl)
  }

  public getUrl():string {
    console.log('je suis le service GET : ', this.currentUrl)
    return this.currentUrl
  }


}
