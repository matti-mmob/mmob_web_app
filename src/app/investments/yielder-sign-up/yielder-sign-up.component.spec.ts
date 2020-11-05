import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YielderSignUpComponent } from './yielder-sign-up.component';

describe('YielderSignUpComponent', () => {
  let component: YielderSignUpComponent;
  let fixture: ComponentFixture<YielderSignUpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YielderSignUpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YielderSignUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
