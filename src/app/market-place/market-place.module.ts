import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExploringMarketPlaceComponent } from './exploring-market-place/exploring-market-place.component';
import { SharedModule } from '../shared/shared.module';
import { LayoutModule } from '../layout/layout.module';
import { MarketPlaceRoutingModule } from './market-place-routing.module';



@NgModule({
  declarations: [ExploringMarketPlaceComponent],
  imports: [
    CommonModule,
    SharedModule,
    LayoutModule,
    MarketPlaceRoutingModule
  ]
})
export class MarketPlaceModule { }
