import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAllSourcesComponent } from './list-all-sources.component';

describe('ListAllSourcesComponent', () => {
  let component: ListAllSourcesComponent;
  let fixture: ComponentFixture<ListAllSourcesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListAllSourcesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListAllSourcesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
