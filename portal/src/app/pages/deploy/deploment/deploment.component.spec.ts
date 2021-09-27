import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeplomentComponent } from './deploment.component';

describe('DeplomentComponent', () => {
  let component: DeplomentComponent;
  let fixture: ComponentFixture<DeplomentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeplomentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeplomentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
