import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { S3logitemComponent } from './s3logitem.component';

describe('S3logitemComponent', () => {
  let component: S3logitemComponent;
  let fixture: ComponentFixture<S3logitemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S3logitemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(S3logitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
