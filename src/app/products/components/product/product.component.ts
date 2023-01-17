import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ProductModel } from '../../models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})

export class ProductComponent {
  @Input() product!: ProductModel;
  @Output() addToCartEvent = new EventEmitter<ProductModel>();

  onAddToCart(value: ProductModel) {
    this.addToCartEvent.emit(value);
  }
}
