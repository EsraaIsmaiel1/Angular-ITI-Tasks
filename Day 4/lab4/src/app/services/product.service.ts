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
    
  }
  getProducts(): Iproduct[] {
    return this.products
  }
  getProductById(productId:number): Iproduct | undefined{
return this.products.find((product: any) => product.id == productId)
  }
  addProduct(product: any){
    this.products.push(product);
  }
  editProduct( protuctId: number, product: any ){
    let index = this.products.findIndex((product: any) => product.id == protuctId);
    if (index !== -1) {
      this.products[index] = product;
    
    }};
  deleteProduct( protuctId: number){
    this.products = this.products.filter((product: any) => product.id != protuctId);
  }
}


