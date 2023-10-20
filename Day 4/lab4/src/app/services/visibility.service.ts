import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class VisibilityService {
  showHeader$: BehaviorSubject<boolean>;
  showFooter$: BehaviorSubject<boolean>;

  constructor() {
    this.showHeader$ = new BehaviorSubject<boolean>(true);
    this.showFooter$ = new BehaviorSubject<boolean>(true);
}

}
