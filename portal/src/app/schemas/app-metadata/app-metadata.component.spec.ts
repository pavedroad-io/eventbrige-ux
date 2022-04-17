import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppMetadataComponent } from './app-metadata.component';

describe('AppMetadataComponent', () => {
  let component: AppMetadataComponent;
  let fixture: ComponentFixture<AppMetadataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppMetadataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppMetadataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
