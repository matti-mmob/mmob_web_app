import { TestBed } from '@angular/core/testing';

import { KycVerificationService } from './kyc-verification.service';

describe('KycVerificationService', () => {
  let service: KycVerificationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KycVerificationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
