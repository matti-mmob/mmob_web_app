import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ConnectingBankAccountRoutingModule} from './connecting-bank-account-routing.module';
import {BankAddedComponent} from './bank-added/bank-added.component';
import {TwoFactorAuthenticationComponent} from "./two-factor-authentication/two-factor-authentication.component";
import {SharedModule} from "../shared/shared.module";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [BankAddedComponent, TwoFactorAuthenticationComponent],
  imports: [
    CommonModule,
    ConnectingBankAccountRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class ConnectingBankAccountModule {
}
