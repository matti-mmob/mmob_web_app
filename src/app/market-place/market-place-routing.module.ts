import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {MainContentComponent} from '../layout/main-content/main-content.component';
import {ExploringMarketPlaceComponent} from './exploring-market-place/exploring-market-place.component';

const routes: Routes = [
  {
    path: '',
    component: MainContentComponent,
    children: [{path: '', component: ExploringMarketPlaceComponent}],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MarketPlaceRoutingModule {
}
