import { ProductApiService } from './../../../services/product-api.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Component ,OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Iproduct } from 'src/app/models/iproduct';


@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  productId:any;
  product: any = [];
  products :Iproduct[] = [];
  constructor(private router : Router ,private activatedRoute : ActivatedRoute ,private productApiService: ProductApiService ){}

  ngOnInit(): void {
  this.activatedRoute.params.subscribe({
    next:(params)=>{
      this.productId = params['id'];
      this.getProductName.setValue('');
      this.getProductPrice.setValue(null);
      this.getProductQuantity.setValue(null);
      this.getProductImage.setValue('');

    }
  });

  if (this.productId !== 0) {
    this.product = this.productApiService.getProductById(this.productId).subscribe({
    next: (myProduct)=>{
      this.product = myProduct;
      this.getProductName.setValue(this.product.productName);
      this.getProductPrice.setValue(this.product.price);
      this.getProductQuantity.setValue(this.product.quantity);
      this.getProductImage.setValue(this.product.img1);
    }
  });
  };
  this.product = this.productApiService.getProductById(this.productId).subscribe();
}

addProductForm = new FormGroup({
  productName: new FormControl ('', Validators.required ),
  price: new FormControl (null, Validators.required),
  quantity : new FormControl (null, Validators.required),
  img1 : new FormControl ('', Validators.required)


})
get getProductName(){
  return this.addProductForm.controls['productName']
}
get getProductPrice(){
  return this.addProductForm.controls['price']
}
get getProductQuantity(){
  return this.addProductForm.controls['quantity']
}
get getProductImage(){
  return this.addProductForm.controls['img1']
}
formOperation(e:Event){
  e.preventDefault();

if(this.productId == 0 ){
    this.productApiService.addNewProduct(this.addProductForm.value).subscribe();
  }
else{
  this.productApiService.editProduct(this.productId,this.addProductForm.value).subscribe();
}
this.router.navigate(['/products'])
}
onFileChange(e: any) {
  const file = e.target.files[0];
  this.addProductForm.patchValue({
    img1: file
  });
}


}
