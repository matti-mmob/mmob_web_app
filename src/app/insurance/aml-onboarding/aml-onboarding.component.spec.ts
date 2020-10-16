import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {AmlOnboardingComponent} from './aml-onboarding.component';

describe('AmlOnboardingComponent', () => {
  let component: AmlOnboardingComponent;
  let fixture: ComponentFixture<AmlOnboardingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AmlOnboardingComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AmlOnboardingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
