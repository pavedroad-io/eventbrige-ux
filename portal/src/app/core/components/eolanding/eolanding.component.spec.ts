import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EolandingComponent } from './eolanding.component';

describe('EolandingComponent', () => {
  let component: EolandingComponent;
  let fixture: ComponentFixture<EolandingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EolandingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EolandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
