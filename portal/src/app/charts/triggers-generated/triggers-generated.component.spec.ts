import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TriggersGeneratedComponent } from './triggers-generated.component';

describe('TriggersGeneratedComponent', () => {
  let component: TriggersGeneratedComponent;
  let fixture: ComponentFixture<TriggersGeneratedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TriggersGeneratedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TriggersGeneratedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
