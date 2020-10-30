import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginRoutingModule} from './login-routing.module';
import {LoginComponent} from './login/login.component';
import {ForgotPasswordComponent} from './forgot-password/forgot-password.component';
import {ResetPasswordComponent} from './reset-password/reset-password.component';
import {VerifyEmailComponent} from './verify-email/verify-email.component';
import {ReactiveFormsModule} from '@angular/forms';
import {LayoutModule} from '../layout/layout.module';
import {SharedModule} from '../shared/shared.module';


@NgModule({
  declarations: [LoginComponent, ForgotPasswordComponent, ResetPasswordComponent, VerifyEmailComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    ReactiveFormsModule,
    LayoutModule,
    SharedModule,
  ]
})
export class LoginModule {
}
