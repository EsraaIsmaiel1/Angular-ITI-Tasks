import { Router, ActivatedRoute } from '@angular/router';
import { Component ,OnInit } from '@angular/core';
import { ProductService } from './../../../services/product.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  productId:any;
  product: any =[];
  products :any[]=[];

  constructor(private router : Router ,private activatedRoute : ActivatedRoute ,private productService: ProductService ){}
  ngOnInit(): void {
  this.productId = this.activatedRoute.snapshot.params['id'];
      this.getProductName.setValue('');
      this.getProductPrice.setValue(null);
      this.getProductQuantity.setValue(null);
      this.getProductImage.setValue('');


  if (this.productId != 0) {
      this.product = this.productService.getProductById(this.productId);
      this.getProductName.setValue(this.product.productName);
      this.getProductPrice.setValue(this.product.price);
      this.getProductQuantity.setValue(this.product.quantity);
      this.getProductImage.setValue(this.product.img1);
  }
  this.product = this.productService.getProductById(this.productId);
}

  
getProductDetails(productId: number) {

  this.product = this.productService.getProductById(productId);
}

addProductForm = new FormGroup({
  productName: new FormControl ('', Validators.required ),
  price: new FormControl (null, Validators.required),
  quantity : new FormControl (null, Validators.required),
  img1 : new FormControl ('', Validators.required),
  id: new FormControl (),


})
formOperation(e: Event) {
  e.preventDefault();
  if (this.productId == 0) {
    let id = this.products.length > 0 ? this.products[this.products.length - 1].id + 1 : 1;
    this.addProductForm.patchValue({ id: id });
    this.productService.addProduct(this.addProductForm.value);
    console.log(this.addProductForm.value);
    // this.products.push(this.addProductForm.value);
  } else {
    this.productService.editProduct(this.productId, this.addProductForm.value);
  }

  this.router.navigate(['/products']);
}
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
onFileChange(e: any) {
  const file = e.target.files[0];
  this.addProductForm.patchValue({
    img1: file
  });
}


}
