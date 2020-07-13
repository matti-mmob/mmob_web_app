import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AssetsPathPipe } from './pipes/assets-path.pipe';
import { ShowErrorsComponent } from './show-errors/show-errors.component';
import { ConfirmationPopupComponent } from './confirmation-popup/confirmation-popup.component';

@NgModule({
  declarations: [AssetsPathPipe,ShowErrorsComponent,ConfirmationPopupComponent],
  imports: [CommonModule],
  exports: [AssetsPathPipe,ShowErrorsComponent,ConfirmationPopupComponent],
  providers: [AssetsPathPipe,ConfirmationPopupComponent],
})
export class SharedModule {}
