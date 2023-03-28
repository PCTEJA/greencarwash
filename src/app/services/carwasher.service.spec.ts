import { TestBed } from '@angular/core/testing';

import { CarwasherService } from './carwasher.service';

describe('CarwasherService', () => {
  let service: CarwasherService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarwasherService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
