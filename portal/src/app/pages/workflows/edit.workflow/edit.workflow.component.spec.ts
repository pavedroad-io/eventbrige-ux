import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditWorkflowComponent } from './edit.workflow.component';

describe('EditWorkflowComponent', () => {
  let component: Edit.WorkflowComponent;
  let fixture: ComponentFixture<Edit.WorkflowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditWorkflowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditWorkflowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
