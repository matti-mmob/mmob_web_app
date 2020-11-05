import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YieldersInvestmentsComponent } from './yielders-investments.component';

describe('YieldersInvestmentsComponent', () => {
  let component: YieldersInvestmentsComponent;
  let fixture: ComponentFixture<YieldersInvestmentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YieldersInvestmentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YieldersInvestmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
