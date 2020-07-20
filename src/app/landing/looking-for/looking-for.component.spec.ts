import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LookingForComponent } from './looking-for.component';

describe('LookingForComponent', () => {
  let component: LookingForComponent;
  let fixture: ComponentFixture<LookingForComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LookingForComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LookingForComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
