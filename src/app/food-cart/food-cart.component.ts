import { Component, OnInit } from '@angular/core';
import { FoodCartService } from '../food-cart.service';
import { Food } from '../food-list/Food';

@Component({
  selector: 'app-food-cart',
  templateUrl: './food-cart.component.html',
  styleUrls: ['./food-cart.component.css']
})
export class FoodCartComponent implements OnInit {

  foods: Food[] = []

  constructor(private cartService: FoodCartService) { }

  ngOnInit(): void {
    this.cartService.cartList.subscribe(data=>{
      this.foods = data;
    })

  }

}
