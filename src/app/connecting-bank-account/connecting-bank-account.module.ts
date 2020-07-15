import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConnectingBankAccountRoutingModule } from './connecting-bank-account-routing.module';
import { BankAddedComponent } from './bank-added/bank-added.component';


@NgModule({
  declarations: [BankAddedComponent],
  imports: [
    CommonModule,
    ConnectingBankAccountRoutingModule
  ]
})
export class ConnectingBankAccountModule { }
