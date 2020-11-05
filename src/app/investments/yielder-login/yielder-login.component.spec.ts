import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YielderLoginComponent } from './yielder-login.component';

describe('YielderLoginComponent', () => {
  let component: YielderLoginComponent;
  let fixture: ComponentFixture<YielderLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YielderLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YielderLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
