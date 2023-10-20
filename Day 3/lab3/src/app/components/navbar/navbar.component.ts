import { Component, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  currentComponent: string ="home";
  
  handleRoute(componentName: string) {
    this.currentComponent = componentName;
    this.componentChanged.emit(componentName);
  }
  @Output() componentChanged: EventEmitter<string> = new EventEmitter<string>();
}
