import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MainContentComponent } from './main-content/main-content.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, SidebarComponent, MainContentComponent],
  imports: [CommonModule, RouterModule],
  exports: [HeaderComponent, FooterComponent, SidebarComponent, MainContentComponent],
})
export class LayoutModule {}
