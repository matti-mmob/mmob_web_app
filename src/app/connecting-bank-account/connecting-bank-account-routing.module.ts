import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TwoFactorAuthenticationComponent} from './two-factor-authentication/two-factor-authentication.component';
import {NavigationUrl} from '../shared/constant/navigation-url.constant';
import {BankAddedComponent} from './bank-added/bank-added.component';


const routes: Routes = [
  {path: '', component: TwoFactorAuthenticationComponent},
  {path: NavigationUrl.CONNECTING_BABK_ACCOUNT_BANK_ADDED, component: BankAddedComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConnectingBankAccountRoutingModule {
}
