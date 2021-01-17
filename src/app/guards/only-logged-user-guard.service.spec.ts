import { TestBed } from '@angular/core/testing';

import { OnlyLoggedUserGuardService } from './only-logged-user-guard.service';

describe('OnlyLoggedUserGuardService', () => {
  let service: OnlyLoggedUserGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OnlyLoggedUserGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
