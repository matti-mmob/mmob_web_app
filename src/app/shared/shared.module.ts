import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AssetsPathPipe} from './pipes/assets-path.pipe';
import {ShowErrorsComponent} from './show-errors/show-errors.component';
import {ConfirmationPopupComponent} from './confirmation-popup/confirmation-popup.component';
import {IframeComponent} from './iframe/iframe.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [AssetsPathPipe, ConfirmationPopupComponent, ShowErrorsComponent, IframeComponent],
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  exports: [AssetsPathPipe, ShowErrorsComponent, ConfirmationPopupComponent, IframeComponent, CommonModule, ReactiveFormsModule],
  providers: [AssetsPathPipe, ConfirmationPopupComponent, IframeComponent],
})
export class SharedModule {
}
