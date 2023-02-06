import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

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
    SharedModule
  ]
})
export class ProductsModule { }
