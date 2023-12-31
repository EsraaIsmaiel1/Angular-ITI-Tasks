import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Iproduct } from '../models/iproduct';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductApiService {
baseUrl:string = "http://localhost:3000/products";
  constructor(private http : HttpClient) { }
  getAllProducts() : Observable<any> {
    return this.http.get<Iproduct[]>(this.baseUrl);
  }

  getProductById(productId: number): Observable<Iproduct>{    
    return this.http.get<Iproduct>(`${this.baseUrl}/${productId}`);
  }
  editProduct(productId: number , product :any):Observable<any>{
    return this.http.put<Iproduct>(`${this.baseUrl}/${productId}`, product);
  }
  addNewProduct(product:any):Observable<any>{
    return this.http.post(this.baseUrl ,product);
}
deleteProduct(productId:number):Observable<any>{
return this.http.delete(`${this.baseUrl}/${productId}`);
}
}