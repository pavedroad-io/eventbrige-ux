import { TestBed } from '@angular/core/testing';

import { PorttrackerService } from './porttracker.service';

describe('PorttrackerService', () => {
  let service: PorttrackerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PorttrackerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
