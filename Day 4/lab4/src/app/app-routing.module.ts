import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductDetailsComponent } from './components/products/product-details/product-details.component';
import { AddProductComponent } from './components/products/add-product/add-product.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  {path: '', component:HomeComponent},
  {path: 'products',component: ProductsComponent},
  {path:'products/:id',component:ProductDetailsComponent},
  {path: 'products/:id/edit',component: AddProductComponent},
  {path: 'login',component:LoginComponent},
  {path:'404',component: NotFoundComponent},
  { path: '**', redirectTo: '404' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
