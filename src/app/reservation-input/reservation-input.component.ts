import { Component, Input, OnInit } from '@angular/core';
import { ReservationListService } from '../reservation-list.service';

@Component({
  selector: 'app-reservation-input',
  templateUrl: './reservation-input.component.html',
  styleUrls: ['./reservation-input.component.css']
})
export class ReservationInputComponent implements OnInit {

  @Input()
  quantityToReserve:number = 1;

  constructor(private reservationListService:ReservationListService) { }

  ngOnInit(): void {
  }

  makeReservation(event:any):void{
    for (let i = 0; i < this.quantityToReserve; i++) {
      console.log(event.target.value);
      this.reservationListService.addToReservationList(event.target.value);
    }
  }

  maxReached(msg:string){
    alert(msg);
  }
}
