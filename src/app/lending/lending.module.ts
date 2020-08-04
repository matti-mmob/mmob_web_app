import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { LayoutModule } from '../layout/layout.module';

import { LendingRoutingModule } from './lending-routing.module';
import { AccessLendingComponent } from './access-lending/access-lending.component';
import { LendingDetailComponent } from './lending-detail/lending-detail.component';


@NgModule({
  declarations: [AccessLendingComponent, LendingDetailComponent],
  imports: [
    CommonModule,
    LendingRoutingModule,
    ReactiveFormsModule,
    LayoutModule,
    SharedModule,
  ]
})
export class LendingModule { }
