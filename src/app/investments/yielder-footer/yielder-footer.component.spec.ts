import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YielderFooterComponent } from './yielder-footer.component';

describe('YielderFooterComponent', () => {
  let component: YielderFooterComponent;
  let fixture: ComponentFixture<YielderFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YielderFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YielderFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
