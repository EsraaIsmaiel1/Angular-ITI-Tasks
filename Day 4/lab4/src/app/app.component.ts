import { Component ,OnInit } from '@angular/core';
import{VisibilityService} from './services/visibility.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'lab4';

  visibilityService: VisibilityService;

  constructor(visibilityService: VisibilityService) {
    this.visibilityService = visibilityService;
  }

  ngOnInit() {
  }
}
