import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ConsentManagementPortalComponent} from './consent-management-portal.component';

describe('ConsentManagementPortalComponent', () => {
  let component: ConsentManagementPortalComponent;
  let fixture: ComponentFixture<ConsentManagementPortalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ConsentManagementPortalComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsentManagementPortalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
