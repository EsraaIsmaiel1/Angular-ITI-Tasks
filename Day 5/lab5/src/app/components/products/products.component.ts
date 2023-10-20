import { ProductApiService } from './../../services/product-api.service';
import { Component, OnInit } from '@angular/core';
import { Iproduct } from 'src/app/models/iproduct';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products :Iproduct[] = [];
  productId :number = 0;
  constructor(private productApiService :ProductApiService){}
  ngOnInit(): void{
   this.productApiService.getAllProducts().subscribe({
      next: (myProducts)=>{
        this.products = myProducts;
      }
    });
  }
  deleteProduct(productId:number){
    this.productApiService.deleteProduct(productId).subscribe({
      next: () => {
        this.products = this.products.filter(product => product.id !== productId);
      },
  
    })
  };
}
