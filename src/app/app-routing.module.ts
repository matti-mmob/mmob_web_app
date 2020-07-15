import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  // DashboardModule is lazyloaded
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then((routeModule) => routeModule.DashboardModule),
    // loadChildren: () => import('./getting-setup/getting-setup.module').then((routeModule) => routeModule.GettingSetupModule),
    // path: 'dashboard',
    // loadChildren: () => import('./dashboard/dashboard.module').then((routeModule) => routeModule.DashboardModule),
  },
  {
    path: 'gettingSetUp',
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
    path: 'marketPlace',
    loadChildren: () => import('./market-place/market-place.module').then((routeModule) => routeModule.MarketPlaceModule),
  },
  {
    path: 'investments',
    loadChildren: () => import('./investments/investments.module').then((routeModule) => routeModule.InvestmentsModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
