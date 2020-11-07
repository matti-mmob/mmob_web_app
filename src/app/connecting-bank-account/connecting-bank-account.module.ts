import {NgModule} from '@angular/core';

import {ConnectingBankAccountRoutingModule} from './connecting-bank-account-routing.module';
import {BankAddedComponent} from './bank-added/bank-added.component';
import {TwoFactorAuthenticationComponent} from './two-factor-authentication/two-factor-authentication.component';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  declarations: [BankAddedComponent, TwoFactorAuthenticationComponent],
  imports: [
    ConnectingBankAccountRoutingModule,
    SharedModule
  ]
})
export class ConnectingBankAccountModule {
}
