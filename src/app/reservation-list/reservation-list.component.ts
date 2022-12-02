import { Component, OnInit } from '@angular/core';
import { ReservationListService } from '../reservation-list.service';
import { Reservation } from './Reservation';

@Component({
  selector: 'app-reservation-list',
  templateUrl: './reservation-list.component.html',
  styleUrls: ['./reservation-list.component.css']
})
export class ReservationListComponent implements OnInit {

  reservations: Reservation[] = []

  constructor(private reservationListService:ReservationListService) { }

  ngOnInit(): void {
    this.reservationListService.reservationList.subscribe(data=>{
      this.reservations = data;
    })
  }

  removeFromReservationList(reservation:Reservation){
    this.reservationListService.removeFromReservationList(reservation);
  }
}
