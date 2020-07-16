import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavigationUrl } from './shared/constant/navigation-url.constant';

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
    loadChildren: () => import('./getting-setup/getting-setup.module').then((routeModule) => routeModule.GettingSetupModule),
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
    path: NavigationUrl.MARKETPLACE,
    loadChildren: () => import('./market-place/market-place.module').then((routeModule) => routeModule.MarketPlaceModule),
  },
  {
    path: NavigationUrl.INVESTMENTS,
    loadChildren: () => import('./investments/investments.module').then((routeModule) => routeModule.InvestmentsModule),
  },
  {
    path:'utilities',
    loadChildren: () => import('./utilities/utilities.module').then((routeModule) => routeModule.UtilitiesModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
