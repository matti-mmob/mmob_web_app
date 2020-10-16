import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {MainContentComponent} from '../layout/main-content/main-content.component';
import {HomeComponent} from './home/home.component';
import {ConsentManagementPortalComponent} from './consent-management-portal/consent-management-portal.component';

const routes: Routes = [
  {
    path: '',
    component: MainContentComponent,
    children: [{path: '', component: HomeComponent},
      {path: 'consentManagementPortal', component: ConsentManagementPortalComponent}],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {
}
