import { TestBed } from '@angular/core/testing';

import { WasherauthInterceptorService } from './washerauth-interceptor.service';

describe('WasherauthInterceptorService', () => {
  let service: WasherauthInterceptorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WasherauthInterceptorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
