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

  finalizarCompra(){
    this.cartService.cartList.subscribe(data=>{
      if(data.length == 0){
        alert("Por favor, ponga un item en el carrito antes de intentar comprar.")
      }
      else{
        alert("¡Compra realizada con exito!");
      }
    })
  }
  
  removeFromCart(food:Food){
    this.cartService.removeFromCart(food);
  }
  
}
