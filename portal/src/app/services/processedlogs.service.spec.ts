import { TestBed } from '@angular/core/testing';

import { ProcessedlogsService } from './processedlogs.service';

describe('ProcessedlogsService', () => {
  let service: ProcessedlogsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProcessedlogsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
