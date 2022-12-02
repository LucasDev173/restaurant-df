import { TestBed } from '@angular/core/testing';

import { FoodCartService } from './food-cart.service';

describe('FoodCartService', () => {
  let service: FoodCartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FoodCartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
