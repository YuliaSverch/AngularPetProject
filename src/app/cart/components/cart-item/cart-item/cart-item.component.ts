import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CartProducts } from 'src/app/cart/models/cart-products';
import { CartService } from 'src/app/cart/services/cart.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent {
  @Input() product!: CartProducts;
  @Output() increaseQuantityEvent = new EventEmitter<CartProducts>();
  @Output() decreaseQuantityEvent = new EventEmitter<CartProducts>();
  @Output() deleteItemEvent = new EventEmitter<string>();

  color = 'red';
  
  onIncreaseQuantity(value: CartProducts) {
    this.increaseQuantityEvent.emit(value);
  }

  onDecreaseQuantity(value: CartProducts) {
    this.decreaseQuantityEvent.emit(value);
  }

  onDeleteItem(value: string) {
    this.deleteItemEvent.emit(value);
  }
}
