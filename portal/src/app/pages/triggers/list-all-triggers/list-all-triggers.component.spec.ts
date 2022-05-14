import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAllTriggersComponent } from './list-all-triggers.component';

describe('ListAllTriggersComponent', () => {
  let component: ListAllTriggersComponent;
  let fixture: ComponentFixture<ListAllTriggersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListAllTriggersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListAllTriggersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
