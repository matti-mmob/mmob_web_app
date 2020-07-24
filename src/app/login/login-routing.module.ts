import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { VerifyEmailComponent } from './verify-email/verify-email.component';
import { NavigationUrl } from '../shared/constant/navigation-url.constant';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: NavigationUrl.FORGOT_PASSWORD, component: ForgotPasswordComponent },
  { path: NavigationUrl.RESET_PASSWORD, component: ResetPasswordComponent },
  { path: NavigationUrl.VERIFY_PASSWORD, component: VerifyEmailComponent },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
