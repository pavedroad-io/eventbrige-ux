import { TestBed } from '@angular/core/testing';

import { EventSourcesService } from './event.sources.service';

describe('EventSourcesService', () => {
  let service: EventSourcesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EventSourcesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
