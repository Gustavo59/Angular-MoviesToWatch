import { TestBed } from '@angular/core/testing';

import { TowatchDataService } from './towatch-data.service';

describe('TowatchDataService', () => {
  let service: TowatchDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TowatchDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
