import { TestBed } from '@angular/core/testing';

import { Event.SourcesService } from './event.sources.service';

describe('Event.SourcesService', () => {
  let service: Event.SourcesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Event.SourcesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
