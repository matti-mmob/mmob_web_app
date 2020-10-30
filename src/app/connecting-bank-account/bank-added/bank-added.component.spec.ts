import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {BankAddedComponent} from './bank-added.component';

describe('BankAddedComponent', () => {
  let component: BankAddedComponent;
  let fixture: ComponentFixture<BankAddedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BankAddedComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BankAddedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
