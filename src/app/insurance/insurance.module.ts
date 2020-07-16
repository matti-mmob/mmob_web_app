import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InsuranceRoutingModule } from './insurance-routing.module';
import { InsuranceHomeComponent } from './insurance-home/insurance-home.component';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { LayoutModule } from '../layout/layout.module';
import { AmlOnboardingComponent } from './aml-onboarding/aml-onboarding.component';


@NgModule({
  declarations: [InsuranceHomeComponent, AmlOnboardingComponent],
  imports: [
    CommonModule,
    InsuranceRoutingModule,
    ReactiveFormsModule,
    LayoutModule,
    SharedModule,
  ]
})
export class InsuranceModule { }
