import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SplashScreenComponent} from './splash-screen/splash-screen.component';
import {TutorialComponent} from './tutorial/tutorial.component';
import {NavigationUrl} from '../shared/constant/navigation-url.constant';

const routes: Routes = [
  {path: '', component: SplashScreenComponent},
  {path: NavigationUrl.TUTORIALS, component: TutorialComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LandingRoutingModule {
}
