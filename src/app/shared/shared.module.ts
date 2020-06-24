import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AssetsPathPipe } from './pipes/assets-path.pipe';

@NgModule({
  declarations: [AssetsPathPipe],
  imports: [CommonModule],
  exports: [AssetsPathPipe],
  providers: [AssetsPathPipe],
})
export class SharedModule {}
