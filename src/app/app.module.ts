import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FoodListComponent } from './food-list/food-list.component';
import { FoodCartComponent } from './food-cart/food-cart.component';
import { FormsModule } from '@angular/forms';
import { RestaurantAboutComponent } from './restaurant-about/restaurant-about.component';
import { RestaurantFoodComponent } from './restaurant-food/restaurant-food.component';

@NgModule({
  declarations: [
    AppComponent,
    FoodListComponent,
    FoodCartComponent,
    RestaurantAboutComponent,
    RestaurantFoodComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
