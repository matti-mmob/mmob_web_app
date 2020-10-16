import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MerchantsHomeComponent} from './merchants-home/merchants-home.component';
import {MainContentComponent} from '../layout/main-content/main-content.component';


const routes: Routes = [
  {
    path: '',
    component: MainContentComponent,
    children: [{path: '', component: MerchantsHomeComponent}],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MerchantsRoutingModule {
}
