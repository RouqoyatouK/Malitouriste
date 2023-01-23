import { TestBed } from '@angular/core/testing';

import { NomregionService } from './nomregion.service';

describe('NomregionService', () => {
  let service: NomregionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NomregionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
