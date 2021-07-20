import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkerpoolComponent } from './workerpool.component';

describe('WorkerpoolComponent', () => {
  let component: WorkerpoolComponent;
  let fixture: ComponentFixture<WorkerpoolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkerpoolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkerpoolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
