import { TestBed } from '@angular/core/testing';

import { WasherauthService } from './washerauth.service';

describe('WasherauthService', () => {
  let service: WasherauthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WasherauthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
