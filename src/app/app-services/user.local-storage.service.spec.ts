import { TestBed } from '@angular/core/testing';

import { User.LocalStorageService } from './user.local-storage.service';

describe('User.LocalStorageService', () => {
  let service: User.LocalStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(User.LocalStorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
