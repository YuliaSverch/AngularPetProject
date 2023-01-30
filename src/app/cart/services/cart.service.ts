import { Injectable } from '@angular/core';
import { CartProducts } from '../models/cart-products';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartProductsList : Array<CartProducts> = [
    {
      Id: 0,
      Name: 'Product0',
      Description: 'Description0',
      Price: 100,
      Category: 0,
      IsAvailable: true,
      Quantity: 1
    }
  ];

  constructor() { }

  getCartProducts(): Array<CartProducts> {
    return this.cartProductsList;
  }

  get totalCost() {
    var totalCost = 0;
    this.cartProductsList.forEach(element => {
      element.Quantity ? totalCost += element.Price * element.Quantity : totalCost += element.Price;
    });

    return totalCost;
  }

  get totalQuantity() {
    var totalQuantity = 0;
    this.cartProductsList.forEach(element => {
      element.Quantity ? totalQuantity += element.Quantity : totalQuantity = 1;
    });

    return totalQuantity;
  }

  addProductToCart(product: CartProducts) : void {
    var cartProduct = this.cartProductsList.find(p => p.Name == product.Name);
    if(cartProduct != undefined) {
      cartProduct.Quantity ? cartProduct.Quantity += 1 : cartProduct.Quantity = 1;
    }
    else {
      product.Quantity = 1;
      this.cartProductsList = [...this.cartProductsList, product];
    }
  }

  increaseQuantity(product: CartProducts) : void {
    this.cartProductsList.forEach(element => {
      if(element.Name == product.Name)
      {
        element.Quantity ? element.Quantity += 1 : element.Quantity = 1;
        return;
      }
    });
  }

  decreaseQuantity(product: CartProducts) : void {
    this.cartProductsList.forEach(element => {
      if(element.Name == product.Name)
      {
        if(element.Quantity != undefined && element.Quantity == 1)
        {
          this.deleteItem(element.Name);
          return;
        }
        element.Quantity ? element.Quantity -= 1 : null;
        return;
      }
    });
  }

  deleteItem(productName: string) : void {
    var productToDeleteIndex = this.cartProductsList.findIndex(p => p.Name == productName);
    if(productToDeleteIndex != undefined)
    {
      if (productToDeleteIndex > -1) {
        this.cartProductsList = [...this.cartProductsList.slice(0, productToDeleteIndex), ...this.cartProductsList.slice(productToDeleteIndex + 1)];
      }
    }
  }

  isCartEmpty(): boolean {
    return this.cartProductsList.length === 0;
  }

  removeAllProducts() {
    this.cartProductsList = [];
  }
}
