import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KvpairListComponent } from './kvpair-list.component';

describe('KvpairListComponent', () => {
  let component: KvpairListComponent;
  let fixture: ComponentFixture<KvpairListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KvpairListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KvpairListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
