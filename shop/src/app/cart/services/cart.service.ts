import { Injectable } from '@angular/core';
import { CartProducts } from '../models/cart-products';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  getCartProducts(): Array<CartProducts> {
    return [
      {
        Id: 1,
        Name: 'Product1',
        Amount: 1
      },
      {
        Id: 2,
        Name: 'Product2',
        Amount: 2
      },
      {
        Id: 3,
        Name: 'Product3',
        Amount: 3
      }
    ]
  }
}
