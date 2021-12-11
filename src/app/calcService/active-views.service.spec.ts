import { TestBed } from '@angular/core/testing';

import { ActiveViewsService } from './active-views.service';

describe('ActiveViewsService', () => {
  let service: ActiveViewsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ActiveViewsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
