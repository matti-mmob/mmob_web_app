import {NgModule} from '@angular/core';
import {SplashScreenComponent} from './splash-screen/splash-screen.component';
import {TutorialComponent} from './tutorial/tutorial.component';
import {LandingRoutingModule} from './landing-routing.module';
import {SharedModule} from '../shared/shared.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {CoreModule} from '../core/core.module';

@NgModule({
  declarations: [SplashScreenComponent, TutorialComponent],
  imports: [
    LandingRoutingModule,
    SharedModule,
    NgbModule,
    CoreModule,
  ]
})
export class LandingModule {
}
