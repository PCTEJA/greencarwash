import { TestBed } from '@angular/core/testing';

import { CustomerauthInterceptorService } from './customerauth-interceptor.service';

describe('CustomerauthInterceptorService', () => {
  let service: CustomerauthInterceptorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomerauthInterceptorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
