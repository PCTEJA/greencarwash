import { TestBed } from '@angular/core/testing';

import { CustomerauthService } from './customerauth.service';

describe('CustomerauthService', () => {
  let service: CustomerauthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomerauthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
