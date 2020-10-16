import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {UploadAddressProofComponent} from './upload-address-proof.component';

describe('UploadAddressProofComponent', () => {
  let component: UploadAddressProofComponent;
  let fixture: ComponentFixture<UploadAddressProofComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UploadAddressProofComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadAddressProofComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
