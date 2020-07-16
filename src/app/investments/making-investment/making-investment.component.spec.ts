import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MakingInvestmentComponent } from './making-investment.component';

describe('MakingInvestmentComponent', () => {
  let component: MakingInvestmentComponent;
  let fixture: ComponentFixture<MakingInvestmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MakingInvestmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MakingInvestmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
