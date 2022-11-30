import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantAboutComponent } from './restaurant-about.component';

describe('RestaurantAboutComponent', () => {
  let component: RestaurantAboutComponent;
  let fixture: ComponentFixture<RestaurantAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestaurantAboutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RestaurantAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
