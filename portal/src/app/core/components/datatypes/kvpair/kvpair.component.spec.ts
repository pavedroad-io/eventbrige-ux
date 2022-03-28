import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KvpairComponent } from './kvpair.component';

describe('KvpairComponent', () => {
  let component: KvpairComponent;
  let fixture: ComponentFixture<KvpairComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KvpairComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KvpairComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
