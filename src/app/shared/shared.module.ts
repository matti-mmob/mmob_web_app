import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AssetsPathPipe } from './pipes/assets-path.pipe';
import { ShowErrorsComponent } from './show-errors/show-errors.component';
import { ConfirmationPopupComponent } from './utils/confirmation-popup/confirmation-popup.component';
@NgModule({
  declarations: [AssetsPathPipe,ShowErrorsComponent],


@NgModule({
  declarations: [AssetsPathPipe, ConfirmationPopupComponent],
  imports: [CommonModule],
  exports: [AssetsPathPipe,ShowErrorsComponent],
  providers: [AssetsPathPipe],
})
export class SharedModule {}
