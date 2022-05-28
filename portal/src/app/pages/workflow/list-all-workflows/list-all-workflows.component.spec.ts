import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAllWorkflowsComponent } from './list-all-workflows.component';

describe('ListAllWorkflowsComponent', () => {
  let component: ListAllWorkflowsComponent;
  let fixture: ComponentFixture<ListAllWorkflowsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListAllWorkflowsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListAllWorkflowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
