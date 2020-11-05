import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AssetsPathPipe } from './pipes/assets-path.pipe';
import { ShowErrorsComponent } from './show-errors/show-errors.component';
import { ConfirmationPopupComponent } from './confirmation-popup/confirmation-popup.component';
import { IframeComponent } from './iframe/iframe.component';
import { TermsConditionsComponent } from './terms-conditions/terms-conditions.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputControlMessagesComponent } from './validations/InputControlMessagesComponent';


@NgModule({
  declarations: [AssetsPathPipe, ConfirmationPopupComponent, ShowErrorsComponent, IframeComponent, TermsConditionsComponent, PrivacyComponent, InputControlMessagesComponent],
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  exports: [AssetsPathPipe, ShowErrorsComponent, ConfirmationPopupComponent, IframeComponent, TermsConditionsComponent, PrivacyComponent, ReactiveFormsModule, FormsModule, InputControlMessagesComponent],
  providers: [AssetsPathPipe, ConfirmationPopupComponent, IframeComponent, TermsConditionsComponent, PrivacyComponent],
})
export class SharedModule {
}
