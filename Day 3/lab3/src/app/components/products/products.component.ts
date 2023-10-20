import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
products =
[ {id:1,name:"Dell",price:400 , img:'assets/img/1.jpeg'},
{id:2,name:"Lenovo",price:700 , img:'assets/img/2.jpeg'},
{id:3,name:"HP",price:500 , img:'assets/img/3.jpg'}
 ]
}
