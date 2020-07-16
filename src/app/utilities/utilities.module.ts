import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccessUtilitiesComponent } from './access-utilities/access-utilities.component';
import { ProfileComponent } from './profile/profile.component';
import { LayoutModule } from '../layout/layout.module';
import { SharedModule } from '../shared/shared.module';
import { UtilitiesRoutingModule } from './utilities-routing.module';



@NgModule({
  declarations: [AccessUtilitiesComponent, ProfileComponent],
  imports: [
    CommonModule,
    LayoutModule,
    SharedModule,
    UtilitiesRoutingModule
  ]
})
export class UtilitiesModule { }
