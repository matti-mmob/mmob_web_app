import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SplashScreenComponent } from './splash-screen/splash-screen.component';
import { TutorialComponent } from './tutorial/tutorial.component';
import { LandingRoutingModule } from './landing-routing.module';
import { SharedModule } from '../shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CoreModule } from '../core/core.module';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [SplashScreenComponent, TutorialComponent],
  imports: [
    CommonModule,
    LandingRoutingModule,
    SharedModule,
    NgbModule,
    CoreModule,
    ReactiveFormsModule
  ]
})
export class LandingModule { }
