import { TestBed } from '@angular/core/testing';

import { WasherauthGuardService } from './washerauth-guard.service';

describe('WasherauthGuardService', () => {
  let service: WasherauthGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WasherauthGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
