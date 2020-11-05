import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MakingInvestmentComponent } from './making-investment/making-investment.component';
import { InvestmentsRoutingModule } from './investments-routing.module';
import { LayoutModule } from '../layout/layout.module';
import { SharedModule } from '../shared/shared.module';
import { YielderLoginComponent } from './yielder-login/yielder-login.component';
import { YielderSignUpComponent } from './yielder-sign-up/yielder-sign-up.component';
import { YielderFooterComponent } from './yielder-footer/yielder-footer.component';
import { YieldersInvestmentsComponent } from './yielders-investments/yielders-investments.component';

@NgModule({
  declarations: [MakingInvestmentComponent, YielderLoginComponent, YielderSignUpComponent, YielderFooterComponent, YieldersInvestmentsComponent],
  imports: [
    CommonModule,
    InvestmentsRoutingModule,
    SharedModule,
    LayoutModule
  ]
})
export class InvestmentsModule {
}
