import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AssetsPathPipe} from './pipes/assets-path.pipe';
import {ShowErrorsComponent} from './show-errors/show-errors.component';
import {ConfirmationPopupComponent} from './confirmation-popup/confirmation-popup.component';
import {IframeComponent} from './iframe/iframe.component';
import {TermsConditionsComponent} from './terms-conditions/terms-conditions.component';
import {PrivacyComponent} from './privacy/privacy.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {InputControlMessagesComponent} from './validations/InputControlMessagesComponent';
import {HTTP_INTERCEPTORS, HttpClient, HttpClientModule} from '@angular/common/http';
import {ApiService} from './services/base-services/api-client.service';
import {GetAddressService} from './services/get-address-io/get-address.service';
import {UserService} from './services/user/user.service';
import {HeadersInterceptor} from './interceptors/headers.interceptor';
import {KycVerificationService} from './services/kyc-verification-service/kyc-verification.service';


@NgModule({
  declarations: [AssetsPathPipe,
    ConfirmationPopupComponent,
    ShowErrorsComponent,
    IframeComponent,
    TermsConditionsComponent,
    PrivacyComponent,
    InputControlMessagesComponent],
  imports: [CommonModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule],
  exports: [AssetsPathPipe,
    ShowErrorsComponent,
    ConfirmationPopupComponent,
    IframeComponent,
    TermsConditionsComponent,
    PrivacyComponent,
    ReactiveFormsModule,
    FormsModule,
    InputControlMessagesComponent,
    CommonModule],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: HeadersInterceptor, multi: true},
    AssetsPathPipe,
    ConfirmationPopupComponent,
    IframeComponent,
    TermsConditionsComponent,
    PrivacyComponent,
    ApiService,
    GetAddressService,
    KycVerificationService,
    UserService],
})
export class SharedModule {
}
