import {NgModule} from '@angular/core';
import {MakingInvestmentComponent} from './making-investment/making-investment.component';
import {InvestmentsRoutingModule} from './investments-routing.module';
import {LayoutModule} from '../layout/layout.module';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  declarations: [MakingInvestmentComponent],
  imports: [
    InvestmentsRoutingModule,
    SharedModule,
    LayoutModule
  ]
})
export class InvestmentsModule {
}
