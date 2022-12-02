import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Reservation } from './reservation-list/Reservation';

@Injectable({
  providedIn: 'root'
})
export class ReservationListService {

  private _reservationList: Reservation[] = [];
  private _reservationListSubject: BehaviorSubject<Reservation[]> = new BehaviorSubject(this._reservationList); 
  public reservationList: Observable<Reservation[]> = this._reservationListSubject.asObservable(); //observable publico
  private avalaibleTables:number[] = [1,2,3,4,5,6,7,8,9,10,11,12]

  constructor() { }

  addToReservationList(name:string){
  
    this._reservationList.push({
      name: name,
      table: this.avalaibleTables.pop()!
    }) //nueva reservacion
    console.log(this._reservationList);
    this._reservationListSubject.next(this._reservationList); //emite el nuevo valor a los subscriptores
  
  }

  removeFromReservationList(reservation:Reservation){
    let indexToDelete = this._reservationList.indexOf(reservation);
    if (indexToDelete != -1){
      this.avalaibleTables.push(reservation.table);
      this._reservationList.splice(indexToDelete, 1);
    }
  }
}
