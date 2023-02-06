import { Component, OnInit } from '@angular/core';
import { CartProducts } from '../../models/cart-products';
import { SortOptions } from '../../models/sort-options';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent implements OnInit {
  showCart: boolean = false;
  isCartNotEmpty!: boolean;
  cartProducts!: Array<CartProducts>;

  sortOptions = Object.values(SortOptions).filter((v) => isNaN(Number(v)));;
  sortOptionsKey!: keyof SortOptions;
  isAsc = false;

  constructor(public cartService: CartService) {}

  ngOnInit() {
    this.cartProducts = this.cartService.getCartProducts();
    this.isCartNotEmpty = this.cartProducts.length != 0;
  }

  toggleCart(): void {
    this.showCart = !this.showCart;
  }

  trackByCart(index: number, item: CartProducts) {
    return item.Id;
  }

  onQuantityIncrease (product: CartProducts): void {
    this.cartService.increaseQuantity(product);
  }

  onQuantityDecrease (product: CartProducts): void {
    this.cartService.decreaseQuantity(product);
  }

  onDeleteItem (productName: string): void {
    this.cartService.deleteItem(productName);
  }
}
