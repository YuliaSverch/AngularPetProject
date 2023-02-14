import { Component } from '@angular/core';
import { CartService } from 'src/app/cart/services/cart.service';
import { ProductModel } from '../../models/product.model';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent {
  constructor(public productsService: ProductsService,
              private cartService: CartService) {} // used only in class

  onAddToCart (product: ProductModel): void {
    this.cartService.addProductToCart(product);
  }
}
