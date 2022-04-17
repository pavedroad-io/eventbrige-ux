import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BackoffConfigComponent } from './backoff-config.component';

describe('BackoffConfigComponent', () => {
  let component: BackoffConfigComponent;
  let fixture: ComponentFixture<BackoffConfigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BackoffConfigComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BackoffConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
