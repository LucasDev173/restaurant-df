import { Component, OnInit } from '@angular/core';
import { FoodCartService } from '../food-cart.service';
import { Food } from './Food';


@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {

  foods: Food[] = [
    {
      name: "Berenjenas a la ratatuil",
      price: 1800,
      onSale: false,
      quantity: 0
    },
    {
      name: "Pato con compota de ciruela",
      price: 1000,
      onSale: true,
      quantity: 0
    },  
    {
      name: "Hamburguesa española",
      price: 1100,
      onSale: false,
      quantity: 0
    },
    {
      name: "Flannche gurmetthe",
      price: 1400,
      onSale: false,
      quantity: 0
    }
  ]

  constructor(private cartService: FoodCartService) { }

  ngOnInit(): void {
  }

  addCart(food:Food){
    if(food.quantity > 0){
      this.cartService.addToCart(food);
    }
  }

  maxReached(msg:string){
    alert(msg);
  }
}
