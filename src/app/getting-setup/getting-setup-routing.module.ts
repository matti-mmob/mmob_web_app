import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NameComponent } from './name/name.component';
import { EmailComponent } from './email/email.component';
import { NavigationUrl } from 'src/app/shared/constant/navigation-url.constant';
import { PasswordComponent } from './password/password.component';
import { MobileComponent } from './mobile/mobile.component';
import { TwoFactorAuthenticationComponent } from './two-factor-authentication/two-factor-authentication.component';
import { TermsAndConditionsComponent } from './terms-and-conditions/terms-and-conditions.component';
import { BanksComponent } from './banks/banks.component';
import { RequestBankDataComponent } from './request-bank-data/request-bank-data.component';

const routes: Routes = [
  { path: '', component: NameComponent },
  { path: NavigationUrl.GETTING_SETUP_EMAIL, component: EmailComponent },
  { path: NavigationUrl.GETTING_SETUP_PASSWORD, component: PasswordComponent },
  { path: NavigationUrl.GETTING_SETUP_MOBILE, component: MobileComponent },
  { path: NavigationUrl.GETTING_SETUP_TWO_FACTOR_AUTHENTICATION, component: TwoFactorAuthenticationComponent },
  { path: NavigationUrl.GETTING_SETUP_TREMS_AND_CONDITION, component: TermsAndConditionsComponent },
  { path: NavigationUrl.GETTING_SETUP_BANKS, component: BanksComponent },
  { path: NavigationUrl.GETTING_SETUP_REQUEST_BANK_DATA, component: RequestBankDataComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GettingSetupRoutingModule { }
