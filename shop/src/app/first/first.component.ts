import { Component, OnInit } from '@angular/core';

enum Category {
  A,
}

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})

export class FirstComponent implements OnInit {
  name!: string;
  description!: string;
  price!: number;
  category!: Category;
  isAvailable: Boolean = false;

  constructor() {}

  ngOnInit() {
    this.name = "Name";
    this.description = "Some";
    this.price = 5;
    this.category = 0;
    this.isAvailable = true;
  }

}
