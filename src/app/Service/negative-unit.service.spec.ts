import { TestBed } from '@angular/core/testing';

import { NegativeUnitService } from './negative-unit.service';

describe('NegativeUnitService', () => {
  let service: NegativeUnitService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NegativeUnitService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
