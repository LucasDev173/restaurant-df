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
      type: "Guarnicion",
      price: 1800,
      onSale: false,
      quantity: 0
    },
    {
      name: "Pato con compota de ciruela",
      type: "Carne",
      price: 1000,
      onSale: true,
      quantity: 0
    },  
    {
      name: "Hamburguesa española",
      type: "Carne",
      price: 1100,
      onSale: false,
      quantity: 0
    },
    {
      name: "Flannche gurmetthe",
      type: "Ensalada",
      price: 1400,
      onSale: false,
      quantity: 0
    }
  ]

  constructor(private cartService: FoodCartService) { }

  ngOnInit(): void {
  }

  maxReached(msg:string){
    alert(msg);
  }

  addCart(food:Food){
    if(food.quantity > 0){
      this.cartService.addToCart(food);
    }
  }
}
