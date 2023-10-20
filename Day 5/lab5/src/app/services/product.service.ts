import { Injectable } from '@angular/core';
import { Iproduct } from '../models/iproduct';
import { ProductList } from '../models/productList';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
products: Iproduct[];
  constructor() { 
    this.products =ProductList;
    console.log(this.products);
    
  }
  getProducts(): Iproduct[] {
    return this.products
  }
  getProductById(productId:number): Iproduct | undefined{
return this.products.find((product: Iproduct) => product.id == productId)
  }
  addProduct(product: Iproduct){
    this.products.push(product);
  }
}
