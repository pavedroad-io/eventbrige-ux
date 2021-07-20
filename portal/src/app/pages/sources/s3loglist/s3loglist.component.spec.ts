import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { S3logComponent } from './s3log.component';

describe('S3logComponent', () => {
  let component: S3logComponent;
  let fixture: ComponentFixture<S3logComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S3logComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(S3logComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
