import {NgModule} from '@angular/core';
import {InsuranceRoutingModule} from './insurance-routing.module';
import {InsuranceHomeComponent} from './insurance-home/insurance-home.component';
import {SharedModule} from '../shared/shared.module';
import {LayoutModule} from '../layout/layout.module';
import {AmlOnboardingComponent} from './aml-onboarding/aml-onboarding.component';


@NgModule({
  declarations: [InsuranceHomeComponent, AmlOnboardingComponent],
  imports: [
    InsuranceRoutingModule,
    LayoutModule,
    SharedModule,
  ]
})
export class InsuranceModule {
}
