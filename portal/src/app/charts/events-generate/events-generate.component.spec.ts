import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsGenerateComponent } from './events-generate.component';

describe('EventsGenerateComponent', () => {
  let component: EventsGenerateComponent;
  let fixture: ComponentFixture<EventsGenerateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventsGenerateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventsGenerateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
