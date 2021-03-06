import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {NavigationUrl} from './shared/constant/navigation-url.constant';
import {AuthGuard} from './shared/guards/auth.guard';

const routes: Routes = [
  {
    path: 'dashboard',
    canActivate: [AuthGuard],
    loadChildren: () => import('./dashboard/dashboard.module').then((routeModule) => routeModule.DashboardModule),
  },
  {
    path: 'getting-setup',
    loadChildren: () => import('./getting-setup/getting-setup.module').then((routeModule) => routeModule.GettingSetupModule),
  },
  {
    path: 'kyc',
    canActivate: [AuthGuard],
    loadChildren: () => import('./kyc/kyc.module').then((routeModule) => routeModule.KycModule)
  },
  {
    path: '',
    loadChildren: () => import('./landing/landing.module').then((routeModule) => routeModule.LandingModule),
  },
  {
    path: 'insurance',
    canActivate: [AuthGuard],
    loadChildren: () => import('./insurance/insurance.module').then((routeModule) => routeModule.InsuranceModule),
  },
  {
    path: NavigationUrl.MARKETPLACE,
    canActivate: [AuthGuard],
    loadChildren: () => import('./market-place/market-place.module').then((routeModule) => routeModule.MarketPlaceModule),
  },
  {
    path: NavigationUrl.INVESTMENTS,
    canActivate: [AuthGuard],
    loadChildren: () => import('./investments/investments.module').then((routeModule) => routeModule.InvestmentsModule),
  },
  {
    path: 'utilities',
    canActivate: [AuthGuard],
    loadChildren: () => import('./utilities/utilities.module').then((routeModule) => routeModule.UtilitiesModule),
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then((routeModule) => routeModule.LoginModule),
  },
  {
    path: 'merchants',
    canActivate: [AuthGuard],
    loadChildren: () => import('./merchants/merchants.module').then((routeModule) => routeModule.MerchantsModule),
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
