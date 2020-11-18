import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {MainContentComponent} from '../layout/main-content/main-content.component';
import {SelectIdComponent} from './select-id/select-id.component';
import {IssuingCountryComponent} from './issuing-country/issuing-country.component';
import {UploadIdComponent} from './upload-id/upload-id.component';
import {AddressProofComponent} from './address-proof/address-proof.component';
import {UploadAddressProofComponent} from './upload-address-proof/upload-address-proof.component';
import {FinalVerificationComponent} from './final-verification/final-verification.component';
import {DrivingLicenseComponent} from './driving-license/driving-license.component';
import {KycFormComponent} from './kyc-form/kyc-form.component';

const routes: Routes = [
  {
    path: '',
    component: MainContentComponent,
    children: [
      {path: '', component: KycFormComponent},
      {path: 'selectId', component: SelectIdComponent},
      {path: 'issuingCountry', component: IssuingCountryComponent},
      {path: 'uploadId', component: UploadIdComponent},
      {path: 'drivingLicense', component: DrivingLicenseComponent},
      {path: 'uploadAddressProof', component: UploadAddressProofComponent},
      {path: 'addressProof', component: AddressProofComponent},
      {path: 'finalVerification', component: FinalVerificationComponent}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KycRoutingModule {
}
