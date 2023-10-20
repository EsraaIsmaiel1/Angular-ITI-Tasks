import { Component ,OnInit } from '@angular/core';
import{VisibilityNavFooterService} from './services/visibility-nav-footer.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'lab5';
  visibilityNavFooterService: VisibilityNavFooterService;

  constructor(visibilityNavFooterService: VisibilityNavFooterService) {
    this.visibilityNavFooterService = visibilityNavFooterService;
  }

  ngOnInit() {
  }
}
