import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResourcesConsummedComponent } from './resources-consummed.component';

describe('ResourcesConsummedComponent', () => {
  let component: ResourcesConsummedComponent;
  let fixture: ComponentFixture<ResourcesConsummedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResourcesConsummedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResourcesConsummedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
