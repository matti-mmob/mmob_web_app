import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExploringMarketPlaceComponent } from './exploring-market-place.component';

describe('ExploringMarketPlaceComponent', () => {
  let component: ExploringMarketPlaceComponent;
  let fixture: ComponentFixture<ExploringMarketPlaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExploringMarketPlaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExploringMarketPlaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
