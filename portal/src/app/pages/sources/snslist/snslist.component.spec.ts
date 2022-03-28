import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SnslistComponent } from './snslist.component';

describe('SnslistComponent', () => {
  let component: SnslistComponent;
  let fixture: ComponentFixture<SnslistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SnslistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SnslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
