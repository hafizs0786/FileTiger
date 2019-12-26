import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


// Page's and components modules
import { LoginComponent } from '../pages/login/login.component';
import { DashboardComponent } from '../pages/dashboard/dashboard.component';
import { ChangePasswordComponent } from '../pages/change-password/change-password.component';
import { ForgotPasswordComponent } from '../pages/forgot-password/forgot-password.component';


const routes: Routes = [
  // {path: 'page1', component: Page1Component},
  { path: '', component: LoginComponent, data: { title: 'login' } },
  { path: 'login', component: LoginComponent, data: { title: 'login' } },

  { path: 'change-password', component: ChangePasswordComponent, data: { title: 'new' }}, //,outlet: 'sub' 
  { path: 'forgot-password', component: ForgotPasswordComponent, data: { title: 'List' }},

  { path: 'dashboard', component: DashboardComponent, data: { title: 'sidemenu' }},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
