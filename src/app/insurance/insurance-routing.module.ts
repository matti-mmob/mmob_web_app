import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InsuranceHomeComponent } from './insurance-home/insurance-home.component';
import { MainContentComponent } from '../layout/main-content/main-content.component';
import { AmlOnboardingComponent } from './aml-onboarding/aml-onboarding.component';

const routes: Routes = [
  {
    path: '',
    component: MainContentComponent,
    children: [{ path: '', component: InsuranceHomeComponent },
  { path: 'aml-onboarding', component: AmlOnboardingComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InsuranceRoutingModule { }
