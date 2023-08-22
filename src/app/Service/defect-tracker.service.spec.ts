import { TestBed } from '@angular/core/testing';

import { DefectTrackerService } from './defect-tracker.service';

describe('DefectTrackerService', () => {
  let service: DefectTrackerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DefectTrackerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
