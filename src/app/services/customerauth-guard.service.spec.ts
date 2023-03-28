import { TestBed } from '@angular/core/testing';

import { CustomerauthGuardService } from './customerauth-guard.service';

describe('CustomerauthGuardService', () => {
  let service: CustomerauthGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomerauthGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
