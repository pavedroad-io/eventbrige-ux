import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LambdaListComponent } from './lambda-list.component';

describe('LambdaListComponent', () => {
  let component: LambdaListComponent;
  let fixture: ComponentFixture<LambdaListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LambdaListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LambdaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
