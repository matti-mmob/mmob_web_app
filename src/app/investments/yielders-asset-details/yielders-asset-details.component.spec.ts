import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YieldersAssetDetailsComponent } from './yielders-asset-details.component';

describe('YieldersAssetDetailsComponent', () => {
  let component: YieldersAssetDetailsComponent;
  let fixture: ComponentFixture<YieldersAssetDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YieldersAssetDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YieldersAssetDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
