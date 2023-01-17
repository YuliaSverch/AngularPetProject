import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductComponent } from './components/product/product.component';
import { ProductsListComponent } from './components/products-list/products-list.component';

@NgModule({
  declarations: [
    ProductComponent,
    ProductsListComponent
  ],
  exports: [
    ProductComponent,
    ProductsListComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ProductsModule { }
