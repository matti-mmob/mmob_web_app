import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainContentComponent } from '../layout/main-content/main-content.component';
import { AccessLendingComponent } from './access-lending/access-lending.component';
import { LookingForComponent } from './looking-for/looking-for.component';
import { LendingDetailComponent } from './lending-detail/lending-detail.component';


const routes: Routes = [
  {
    path: '',
    component: MainContentComponent,
    children: [
      { path: '', component: AccessLendingComponent },
      { path: 'looking-for', component: LookingForComponent },
      { path: 'lending-detail', component: LendingDetailComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LendingRoutingModule { }
