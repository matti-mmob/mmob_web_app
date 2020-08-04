import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessLendingComponent } from './access-lending.component';

describe('AccessLendingComponent', () => {
  let component: AccessLendingComponent;
  let fixture: ComponentFixture<AccessLendingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccessLendingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccessLendingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
