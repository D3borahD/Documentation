import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UrlService {
  private currentUrlSubject = new BehaviorSubject<string>(''); // Initialisez avec une valeur par défaut

  setUrl(url: string): void {
    // fonctionnel
    console.log('SERVICE SET URL: ', url)
    this.currentUrlSubject.next(url);
  }

  getUrl(): BehaviorSubject<string> {
    // NON FONCTIONNEL !!!
    console.log('SERVICE GET URL: ', this.currentUrlSubject.getValue())
    return this.currentUrlSubject;
  }
/*  private currentUrl:string='angular'


  public setUrl(url:string):void {
    this.currentUrl = url
    console.log('je suis le service SET: ', this.currentUrl)
  }

  public getUrl():string {
    console.log('je suis le service GET : ', this.currentUrl)
    return this.currentUrl
  }*/


}
