import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { LayoutModule } from '../layout/layout.module';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module';
import { ConsentManagementPortalComponent } from './consent-management-portal/consent-management-portal.component';

@NgModule({
  declarations: [HomeComponent, ConsentManagementPortalComponent],
  imports: [CommonModule, DashboardRoutingModule, LayoutModule, SharedModule],
})
export class DashboardModule {}
