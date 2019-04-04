import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../../home/home.component';
import { AboutComponent } from '../../about/about.component';
import { ContactComponent } from '../../contact/contact.component';
import { DetailsComponent } from '../../details/details.component';

// Import all the components for which navigation service has to be activated 
import { SignInComponent } from '../../components/sign-in/sign-in.component';
import { SignUpComponent } from '../../components/sign-up/sign-up.component';
// import { DashboardComponent } from '../../components/dashboard/dashboard.component';
import { ForgotPasswordComponent } from '../../components/forgot-password/forgot-password.component';
import { AuthGuard } from "../guard/auth.guard";
import { SecureInnerPagesGuard } from '../guard/secure-inner-pages.guard';
import { VerifyEmailComponent } from '../../components/verify-email/verify-email.component';
// import { canActivate } from '@angular/router/src/utils/preactivation';

const routes: Routes = [
  // { path: '', redirectTo: '/sign-in', pathMatch: 'full' },
  {path: '', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'details', component: DetailsComponent, canActivate: [AuthGuard]},
  { path: 'sign-in', component: SignInComponent, canActivate: [AuthGuard]},
  { path: 'register-user', component: SignUpComponent, canActivate: [SecureInnerPagesGuard]},
  // { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'forgot-password', component: ForgotPasswordComponent, canActivate: [SecureInnerPagesGuard] },
  { path: 'verify-email-address', component: VerifyEmailComponent, canActivate: [SecureInnerPagesGuard] }


];





@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
