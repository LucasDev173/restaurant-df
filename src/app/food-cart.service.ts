import { createComponent, Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Food } from './food-list/Food';

@Injectable({
  providedIn: 'root'
})
export class FoodCartService {

  private _cartList: Food[] = [];
  private _cartListSubject: BehaviorSubject<Food[]> = new BehaviorSubject(this._cartList); 
  public cartList: Observable<Food[]> = this._cartListSubject.asObservable(); //observable publico


  constructor() { }

  addToCart(foodToAdd:Food){
    let item: Food = this._cartList.find((v1) => v1.name == foodToAdd.name)!;
    if(!item){
      this._cartList.push({...foodToAdd}) //clona al objeto (notacion funcional) y lo a grega a la lista
    }
    else{
      if((item.quantity + foodToAdd.quantity) <= 4){
        item.quantity += foodToAdd.quantity; //si el item ya existe en el carrito, suma su cantidad
      }
      console.log(this._cartList);
      this._cartListSubject.next(this._cartList); //emite el nuevo valor a los subscriptores
    }
  }

  removeFromCart(foodToDelete:Food){
    let food: Food = this._cartList.find((v1) => v1.name == foodToDelete.name)!;
    if(food){
      if((food.quantity) > 1){
        food.quantity -= 1; //si se ordeno mas de un plato, se resta en lugar de hacer el splice 
      }
      else{
        let indexToDelete = this._cartList.indexOf(food);
        this._cartList.splice(indexToDelete, 1);
      }
    }
    console.log(this._cartList);
    this._cartListSubject.next(this._cartList); //emite el nuevo valor a los subscriptores
  }
}
