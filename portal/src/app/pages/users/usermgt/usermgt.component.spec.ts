import { async, ComponentFixture, TestBed } from '@angular/core/testing';

<<<<<<< HEAD
=======
<<<<<<< HEAD:portal/src/app/charts/sources/sources.component.spec.ts
import { SourcesComponent } from './sources.component';

describe('SourcesComponent', () => {
  let component: SourcesComponent;
  let fixture: ComponentFixture<SourcesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SourcesComponent ]
=======
>>>>>>> 30aa15dbfe2f64326ef5b5bbbf7679755605b29f
import { UsermgtComponent } from './usermgt.component';

describe('UsermgtComponent', () => {
  let component: UsermgtComponent;
  let fixture: ComponentFixture<UsermgtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsermgtComponent ]
<<<<<<< HEAD
=======
>>>>>>> 30aa15dbfe2f64326ef5b5bbbf7679755605b29f:portal/src/app/pages/users/usermgt/usermgt.component.spec.ts
>>>>>>> 30aa15dbfe2f64326ef5b5bbbf7679755605b29f
    })
    .compileComponents();
  }));

  beforeEach(() => {
<<<<<<< HEAD
    fixture = TestBed.createComponent(UsermgtComponent);
=======
<<<<<<< HEAD:portal/src/app/charts/sources/sources.component.spec.ts
    fixture = TestBed.createComponent(SourcesComponent);
=======
    fixture = TestBed.createComponent(UsermgtComponent);
>>>>>>> 30aa15dbfe2f64326ef5b5bbbf7679755605b29f:portal/src/app/pages/users/usermgt/usermgt.component.spec.ts
>>>>>>> 30aa15dbfe2f64326ef5b5bbbf7679755605b29f
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
