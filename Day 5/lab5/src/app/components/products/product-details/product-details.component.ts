import { Iproduct } from './../../../models/iproduct';
import { ProductApiService } from './../../../services/product-api.service';
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
constructor(private _activatedRoute: ActivatedRoute , private productApiService: ProductApiService){}
ngOnInit():void {
  this.productId = this._activatedRoute.snapshot.params['id'];  
 this.product = this.productApiService.getProductById(this.productId).subscribe({

    next: (myProduct:Iproduct)=>{
        this.product = myProduct;
    }
  });
  
}


}
