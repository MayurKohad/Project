import { TestBed } from '@angular/core/testing';

import { DataQualityMisService } from './data-quality-mis.service';

describe('DataQualityMisService', () => {
  let service: DataQualityMisService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataQualityMisService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
