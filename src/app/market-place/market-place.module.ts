import {NgModule} from '@angular/core';
import {ExploringMarketPlaceComponent} from './exploring-market-place/exploring-market-place.component';
import {SharedModule} from '../shared/shared.module';
import {LayoutModule} from '../layout/layout.module';
import {MarketPlaceRoutingModule} from './market-place-routing.module';


@NgModule({
  declarations: [ExploringMarketPlaceComponent],
  imports: [
    SharedModule,
    LayoutModule,
    MarketPlaceRoutingModule
  ]
})
export class MarketPlaceModule {
}
