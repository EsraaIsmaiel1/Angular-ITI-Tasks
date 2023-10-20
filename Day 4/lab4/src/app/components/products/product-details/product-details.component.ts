import { ProductService } from './../../../services/product.service';
import { Component , OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  applyStyles = true;
  productId:any ;
  product:any ;
constructor(private _activatedRoute: ActivatedRoute , private productService: ProductService){}
ngOnInit():void {
  this.productId = this._activatedRoute.snapshot.params['id'];
  
  this.product = this.productService.getProductById(this.productId);
  
}


}
