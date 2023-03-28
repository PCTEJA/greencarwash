import { TestBed } from '@angular/core/testing';

import { AdminauthGuardService } from './adminauth-guard.service';

describe('AdminauthGuardService', () => {
  let service: AdminauthGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminauthGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
