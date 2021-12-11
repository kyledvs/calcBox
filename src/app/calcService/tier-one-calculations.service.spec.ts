import { TestBed } from '@angular/core/testing';

import { TierOneCalculationsService } from './tier-one-calculations.service';

describe('TierOneCalculationsService', () => {
  let service: TierOneCalculationsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TierOneCalculationsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
