import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectIdComponent } from './select-id/select-id.component';
import { KycRoutingModule } from './kyc-routing.module';
import { SharedModule } from '../shared/shared.module';
import { IssuingCountryComponent } from './issuing-country/issuing-country.component';
import { UploadIdComponent } from './upload-id/upload-id.component';
import { AddressProofComponent } from './address-proof/address-proof.component';
import { UploadAddressProofComponent } from './upload-address-proof/upload-address-proof.component';
import { FinalVerificationComponent } from './final-verification/final-verification.component';
import { DrivingLicenseComponent } from './driving-license/driving-license.component';



@NgModule({
  declarations: [SelectIdComponent, IssuingCountryComponent, UploadIdComponent, AddressProofComponent, UploadAddressProofComponent, FinalVerificationComponent, DrivingLicenseComponent],
  imports: [
    CommonModule,
    KycRoutingModule,
    SharedModule
  ]
})
export class KycModule { }