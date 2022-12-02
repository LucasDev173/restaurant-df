import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Food } from '../food-list/Food';

@Component({
  selector: 'app-input-integer',
  templateUrl: './input-integer.component.html',
  styleUrls: ['./input-integer.component.css']
})
export class InputIntegerComponent implements OnInit {

  constructor() { }

  @Input()
  quantity!: number;

  @Input()
  max!: number;

  @Output()
  quantityChange: EventEmitter<number> = new EventEmitter<number>();

  @Output()
  maxReached: EventEmitter<string> = new EventEmitter<string>();

  ngOnInit(): void {
  }

  upQuantity(){
    if(this.quantity < this.max){
      this.quantity++;
      this.quantityChange.emit(this.quantity);
    }
    else{
      this.maxReached.emit("¡Se alcanzo el maximo! No puede seleccionar mas de " + this.max)
    }
  }

  downQuantity(){
    if(!(this.quantity <= 0)){
      this.quantity--;
      this.quantityChange.emit(this.quantity);    
    }
  }
}
