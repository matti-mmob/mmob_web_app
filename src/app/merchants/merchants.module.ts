import {NgModule} from '@angular/core';
import {MerchantsHomeComponent} from './merchants-home/merchants-home.component';
import {MerchantsRoutingModule} from './merchants-routing.module';
import {SharedModule} from '../shared/shared.module';
import {LayoutModule} from '../layout/layout.module';

@NgModule({
  declarations: [MerchantsHomeComponent],
  imports: [
    MerchantsRoutingModule,
    SharedModule,
    LayoutModule
  ]
})
export class MerchantsModule {
}
