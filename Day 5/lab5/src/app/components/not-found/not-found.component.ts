import { Component,OnInit } from '@angular/core';
import{VisibilityNavFooterService} from './../../services/visibility-nav-footer.service';


@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent implements OnInit {
  constructor(private visibilityNavFooterService: VisibilityNavFooterService) { }

  ngOnInit() {
    this.visibilityNavFooterService.showHeader$.next(false);
    this.visibilityNavFooterService.showFooter$.next(false);
  }
}
