import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {IssuingCountryComponent} from './issuing-country.component';

describe('IssuingCountryComponent', () => {
  let component: IssuingCountryComponent;
  let fixture: ComponentFixture<IssuingCountryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [IssuingCountryComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IssuingCountryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
