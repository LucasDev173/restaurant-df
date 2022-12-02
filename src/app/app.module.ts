import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FoodListComponent } from './food-list/food-list.component';
import { FoodCartComponent } from './food-cart/food-cart.component';
import { FormsModule } from '@angular/forms';
import { RestaurantAboutComponent } from './restaurant-about/restaurant-about.component';
import { RestaurantFoodComponent } from './restaurant-food/restaurant-food.component';
import { InputIntegerComponent } from './input-integer/input-integer.component';
import { HttpClientModule } from '@angular/common/http';
import { RestaurantReservationComponent } from './restaurant-reservation/restaurant-reservation.component';
import { ReservationListComponent } from './reservation-list/reservation-list.component';

@NgModule({
  declarations: [
    AppComponent,
    FoodListComponent,
    FoodCartComponent,
    RestaurantAboutComponent,
    RestaurantFoodComponent,
    InputIntegerComponent,
    RestaurantReservationComponent,
    ReservationListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
