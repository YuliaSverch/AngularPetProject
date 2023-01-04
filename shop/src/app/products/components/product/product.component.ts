import { Component, Input, OnInit } from '@angular/core';
import { ProductModel } from '../../models/product.model';

enum Category {
  A,
  B,
  C
}

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})

export class ProductComponent implements OnInit {
  @Input() product!: ProductModel;
  
  name!: string;
  description!: string;
  price!: number;
  category!: Category;
  isAvailable: Boolean = false;

  ngOnInit(): void {
    this.name = this.product.Name;
    this.description = this.product.Description;
    this.price = this.product.Price;
    this.category = this.product.Category;
    this.isAvailable = this.product.IsAvailable;
  }

  onAddToCart(productName: string): void {
    console.log('You successfully added ' + productName + ' to the cart.');
  }
}
