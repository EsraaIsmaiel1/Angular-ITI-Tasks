import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  componentName: string ="home";

  updateSelectedComponent(componentName: string) {
    this.componentName = componentName;
  }
}
