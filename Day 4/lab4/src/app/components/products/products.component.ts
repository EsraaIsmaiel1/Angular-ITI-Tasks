import { Component, OnInit } from '@angular/core';
import { Iproduct } from 'src/app/models/iproduct';
import { ProductList } from 'src/app/models/productList';
import {ProductService} from 'src/app/services/product.service'

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products :Iproduct[] = [];
  constructor(private productService: ProductService){}
  ngOnInit(): void{
    this.products = this.productService.getProducts()
  }

deleteProduct(productId:number){
  this.productService.deleteProduct(productId);
  this.products = this.products.filter(product => product.id != productId);

    }
  }
