import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  // DashboardModule is lazyloaded
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then((routeModule) => routeModule.DashboardModule),
  },
  {
    path: '',
    loadChildren: () => import('./landing/landing.module').then((routeModule) => routeModule.LandingModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
