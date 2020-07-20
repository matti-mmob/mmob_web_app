import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SplashScreenComponent } from './splash-screen/splash-screen.component';
import { TutorialComponent } from './tutorial/tutorial.component';
import { LandingRoutingModule } from './landing-routing.module';
import { SharedModule } from '../shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CoreModule } from '../core/core.module';
import { LandingComponent } from './landing/landing.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LookingForComponent } from './looking-for/looking-for.component';



@NgModule({
  declarations: [SplashScreenComponent, TutorialComponent, LandingComponent, LookingForComponent],
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
