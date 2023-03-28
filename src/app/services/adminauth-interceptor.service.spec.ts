import { TestBed } from '@angular/core/testing';

import { AdminauthInterceptorService } from './adminauth-interceptor.service';

describe('AdminauthInterceptorService', () => {
  let service: AdminauthInterceptorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminauthInterceptorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
