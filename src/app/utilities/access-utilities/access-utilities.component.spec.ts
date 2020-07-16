import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessUtilitiesComponent } from './access-utilities.component';

describe('AccessUtilitiesComponent', () => {
  let component: AccessUtilitiesComponent;
  let fixture: ComponentFixture<AccessUtilitiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccessUtilitiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccessUtilitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
