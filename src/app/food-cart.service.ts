import { Injectable } from '@angular/core';
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

  addToCart(food:Food){
    let item: Food = this._cartList.find((v1) => v1.name == food.name)!;
    if(!item){
      this._cartList.push({...food}) //clona al objeto (notacion funcional) y lo a grega a la lista
    }
    else{
      if((item.quantity + food.quantity) <= 4){
        item.quantity += food.quantity; //si el item ya existe en el carrito, suma su cantidad
      }
      console.log(this._cartList);
      this._cartListSubject.next(this._cartList); //emite el nuevo valor a los subscriptores
    }
  }
}
