import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainContentComponent} from '../layout/main-content/main-content.component';
import {NavigationUrl} from '../shared/constant/navigation-url.constant';
import {MakingInvestmentComponent} from './making-investment/making-investment.component';
import {YielderLoginComponent} from './yielder-login/yielder-login.component';
import {YielderSignUpComponent} from './yielder-sign-up/yielder-sign-up.component';
import {YieldersInvestmentsComponent} from './yielders-investments/yielders-investments.component';
import {YieldersAssetDetailsComponent} from './yielders-asset-details/yielders-asset-details.component';

const routes: Routes = [
  {
    path: '',
    component: MainContentComponent,
    children: [{path: '', component: MakingInvestmentComponent},
      {path: NavigationUrl.YIELDER_LOGIN, component: YielderLoginComponent},
      {path: NavigationUrl.YIELDER_SIGNUP, component: YielderSignUpComponent},
      {path: NavigationUrl.YIELDER_INVESTMENT, component: YieldersInvestmentsComponent},
      {path: NavigationUrl.YIELDER_ASSET_DETAILS, component: YieldersAssetDetailsComponent}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InvestmentsRoutingModule {
}
