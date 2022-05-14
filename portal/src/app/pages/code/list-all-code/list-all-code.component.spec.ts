import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAllCodeComponent } from './list-all-code.component';

describe('ListAllCodeComponent', () => {
  let component: ListAllCodeComponent;
  let fixture: ComponentFixture<ListAllCodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListAllCodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListAllCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
