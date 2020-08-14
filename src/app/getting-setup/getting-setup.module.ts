import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GettingSetupRoutingModule } from './getting-setup-routing.module';
import { NameComponent } from './name/name.component';
import { EmailComponent } from './email/email.component';
import { PasswordComponent } from './password/password.component';
import { MobileComponent } from './mobile/mobile.component';
import { TwoFactorAuthenticationComponent } from './two-factor-authentication/two-factor-authentication.component';
import { TermsAndConditionsComponent } from './terms-and-conditions/terms-and-conditions.component';
import { BanksComponent } from './banks/banks.component';
import { RequestBankDataComponent } from './request-bank-data/request-bank-data.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [NameComponent, EmailComponent, PasswordComponent, MobileComponent, TwoFactorAuthenticationComponent, TermsAndConditionsComponent, BanksComponent, RequestBankDataComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    GettingSetupRoutingModule,
    SharedModule,
  ]
})
export class GettingSetupModule { }
