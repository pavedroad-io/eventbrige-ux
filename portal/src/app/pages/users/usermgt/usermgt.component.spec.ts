import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SourcesComponent } from './sources.component';
import { UsermgtComponent } from './usermgt.component';

describe('SourcesComponent', () => {
  let component: SourcesComponent;
  let fixture: ComponentFixture<SourcesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SourcesComponent ]

describe('UsermgtComponent', () => {
  let component: UsermgtComponent;
  let fixture: ComponentFixture<UsermgtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsermgtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsermgtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
