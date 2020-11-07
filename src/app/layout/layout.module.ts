import {NgModule} from '@angular/core';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {SidebarComponent} from './sidebar/sidebar.component';
import {MainContentComponent} from './main-content/main-content.component';
import {RouterModule} from '@angular/router';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, SidebarComponent, MainContentComponent],
  imports: [RouterModule, SharedModule],
  exports: [HeaderComponent, FooterComponent, SidebarComponent, MainContentComponent],
})
export class LayoutModule {
}
