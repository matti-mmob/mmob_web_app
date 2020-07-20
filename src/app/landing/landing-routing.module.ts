import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SplashScreenComponent } from './splash-screen/splash-screen.component';
import { TutorialComponent } from './tutorial/tutorial.component';
import { LandingComponent } from './landing/landing.component';
import { LookingForComponent } from './looking-for/looking-for.component';

const routes: Routes = [
  { path: 'SplashScreenComponent', component: SplashScreenComponent },
  { path: 'tutorial', component: TutorialComponent },
  { path: 'LandingComponent', component: LandingComponent },
  { path: '', component: LookingForComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LandingRoutingModule {
}
