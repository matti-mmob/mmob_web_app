import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {RequestBankDataComponent} from './request-bank-data.component';

describe('RequestBankDataComponent', () => {
  let component: RequestBankDataComponent;
  let fixture: ComponentFixture<RequestBankDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RequestBankDataComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestBankDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
