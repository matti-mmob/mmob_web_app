import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  // DashboardModule is lazyloaded
  {
    path: '',
    loadChildren: () => import('./dashboard/dashboard.module').then((routeModule) => routeModule.DashboardModule),
  },
  {
    path: 'kyc',
    loadChildren: () => import('./kyc/kyc.module').then((routeModule) => routeModule.KycModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
