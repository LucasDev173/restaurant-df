import { Component, OnInit } from '@angular/core';
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

  constructor() { }

  ngOnInit(): void {
  }

  upQuantity(food:Food){
    food.quantity++;
  }

  downQuantity(food:Food){
    if(!(food.quantity <= 0)){
      food.quantity--;  
    }
  }

  changeQuantity(event: { preventDefault: any; key: any;}):void{
      if(!(event.key >= "0" && event.key <= "9")){
        event.preventDefault();
      }   
  }
}
