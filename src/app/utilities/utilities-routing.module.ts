import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainContentComponent } from '../layout/main-content/main-content.component';
import { AccessUtilitiesComponent } from './access-utilities/access-utilities.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  {
    path: '',
    component: MainContentComponent,
    children: [{ path: 'accessUtilities', component: AccessUtilitiesComponent },
    { path: 'profile', component: ProfileComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UtilitiesRoutingModule { }
