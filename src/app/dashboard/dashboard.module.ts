import {NgModule} from '@angular/core';
import {DashboardRoutingModule} from './dashboard-routing.module';
import {LayoutModule} from '../layout/layout.module';
import {HomeComponent} from './home/home.component';
import {SharedModule} from '../shared/shared.module';
import {ConsentManagementPortalComponent} from './consent-management-portal/consent-management-portal.component';

@NgModule({
  declarations: [HomeComponent, ConsentManagementPortalComponent],
  imports: [DashboardRoutingModule, LayoutModule, SharedModule],
})
export class DashboardModule {
}
