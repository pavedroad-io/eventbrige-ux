import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SourceBreakdownComponent } from './source-breakdown.component';

describe('SourceBreakdownComponent', () => {
  let component: SourceBreakdownComponent;
  let fixture: ComponentFixture<SourceBreakdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SourceBreakdownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SourceBreakdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
