import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AssetsPathPipe } from './pipes/assets-path.pipe';
import { ConfirmationPopupComponent } from './utils/confirmation-popup/confirmation-popup.component';

@NgModule({
  declarations: [AssetsPathPipe, ConfirmationPopupComponent],
  imports: [CommonModule],
  exports: [AssetsPathPipe],
  providers: [AssetsPathPipe],
})
export class SharedModule {}
