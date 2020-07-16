import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  // DashboardModule is lazyloaded
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then((routeModule) => routeModule.DashboardModule),
  },
  {
    path: 'getting-setup',
    loadChildren: () =>  import('./getting-setup/getting-setup.module').then((routeModule) => routeModule.GettingSetupModule),
  },
  {
    path: 'kyc',
    loadChildren: () => import('./kyc/kyc.module').then((routeModule) => routeModule.KycModule)
  },
  {
    path: '',
    loadChildren: () => import('./landing/landing.module').then((routeModule) => routeModule.LandingModule),
  },
  {
    path: 'insurance',
    loadChildren: () => import('./insurance/insurance.module').then((routeModule) => routeModule.InsuranceModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
