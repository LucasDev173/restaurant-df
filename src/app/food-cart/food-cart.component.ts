import { Component, OnInit } from '@angular/core';
import { Food } from '../food-list/Food';

@Component({
  selector: 'app-food-cart',
  templateUrl: './food-cart.component.html',
  styleUrls: ['./food-cart.component.css']
})
export class FoodCartComponent implements OnInit {

  foods: Food[] = [
    {
      name: "Berenjenas a la ratatuil",
      type: "Guarnicion",
      price: 1800,
      onSale: false,
      quantity: 0
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
