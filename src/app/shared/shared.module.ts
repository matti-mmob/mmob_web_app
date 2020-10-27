import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AssetsPathPipe} from './pipes/assets-path.pipe';
import {ShowErrorsComponent} from './show-errors/show-errors.component';
import {ConfirmationPopupComponent} from './confirmation-popup/confirmation-popup.component';
import {IframeComponent} from './iframe/iframe.component';
import { TermsConditionsComponent } from './terms-conditions/terms-conditions.component';


@NgModule({
  declarations: [AssetsPathPipe, ConfirmationPopupComponent, ShowErrorsComponent, IframeComponent, TermsConditionsComponent],
  imports: [CommonModule],
  exports: [AssetsPathPipe, ShowErrorsComponent, ConfirmationPopupComponent, IframeComponent,TermsConditionsComponent],
  providers: [AssetsPathPipe, ConfirmationPopupComponent, IframeComponent,TermsConditionsComponent],
})
export class SharedModule {
}
