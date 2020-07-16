import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainContentComponent } from '../layout/main-content/main-content.component';
import { ExploringMarketPlaceComponent } from './exploring-market-place/exploring-market-place.component';
import { NavigationUrl } from '../shared/constant/navigation-url.constant';



const routes: Routes = [
  {
    path: '',
    component: MainContentComponent,
    children: [{ path:'', component: ExploringMarketPlaceComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MarketPlaceRoutingModule { }
