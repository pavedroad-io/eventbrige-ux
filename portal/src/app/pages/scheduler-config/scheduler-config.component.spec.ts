import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchedulerConfigComponent } from './scheduler-config.component';

describe('SchedulerConfigComponent', () => {
  let component: SchedulerConfigComponent;
  let fixture: ComponentFixture<SchedulerConfigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchedulerConfigComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchedulerConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
