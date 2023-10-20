import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  selectedQuantity: number = 0;  
  products=[
    {id:1,productName:"Book",price:200,quantity:30},
    {id:2,productName:"Pen",price:100,quantity:1},
    {id:3,productName:"Watch",price:500,quantity:0},
  ]

}
