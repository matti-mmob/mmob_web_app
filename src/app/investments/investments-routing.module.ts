import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainContentComponent } from '../layout/main-content/main-content.component';
import { MakingInvestmentComponent } from './making-investment/making-investment.component';
import { NavigationUrl } from '../shared/constant/navigation-url.constant';


const routes: Routes = [
  {
    path: '',
    component: MainContentComponent,
    children: [{ path: '', component: MakingInvestmentComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InvestmentsRoutingModule { }
