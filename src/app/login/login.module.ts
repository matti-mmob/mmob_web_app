import {NgModule} from '@angular/core';
import {LoginRoutingModule} from './login-routing.module';
import {LoginComponent} from './login/login.component';
import {ForgotPasswordComponent} from './forgot-password/forgot-password.component';
import {ResetPasswordComponent} from './reset-password/reset-password.component';
import {VerifyEmailComponent} from './verify-email/verify-email.component';
import {LayoutModule} from '../layout/layout.module';
import {SharedModule} from '../shared/shared.module';


@NgModule({
  declarations: [LoginComponent, ForgotPasswordComponent, ResetPasswordComponent, VerifyEmailComponent],
  imports: [
    LoginRoutingModule,
    LayoutModule,
    SharedModule,
  ]
})
export class LoginModule {
}
