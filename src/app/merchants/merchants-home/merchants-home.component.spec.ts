import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MerchantsHomeComponent } from './merchants-home.component';

describe('MerchantsHomeComponent', () => {
  let component: MerchantsHomeComponent;
  let fixture: ComponentFixture<MerchantsHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MerchantsHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MerchantsHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
