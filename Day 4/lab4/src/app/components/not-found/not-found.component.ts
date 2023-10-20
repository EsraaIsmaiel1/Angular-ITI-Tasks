import { Component ,OnInit } from '@angular/core';
import{VisibilityService} from './../../services/visibility.service';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent implements OnInit {
  constructor(private visibilityService: VisibilityService) { }

  ngOnInit() {
    this.visibilityService.showHeader$.next(false);
    this.visibilityService.showFooter$.next(false);
  }
}

