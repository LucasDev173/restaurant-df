import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RestaurantAboutComponent } from './restaurant-about/restaurant-about.component';
import { RestaurantFoodComponent } from './restaurant-food/restaurant-food.component';
import { RestaurantReservationComponent } from './restaurant-reservation/restaurant-reservation.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'about',
    pathMatch: 'full'
  },
  {
    path: 'about',
    component: RestaurantAboutComponent
  },
  {
    path: 'food',
    component: RestaurantFoodComponent
  },
  {
    path: 'reservation',
    component: RestaurantReservationComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
