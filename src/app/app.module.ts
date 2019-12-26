import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//
import { MaterialModule } from "./modules/material.module";

// routs
import { AppRoutingModule } from './modules/app-routing.module';

// pages
import { AppComponent } from './app.component';
import { ChangePasswordComponent } from './pages/change-password/change-password.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { LoginComponent } from './pages/login/login.component';
import { DocFormComponent } from './components/doc-form/doc-form.component';
import { GridDocComponent } from './components/grid-doc/grid-doc.component';
import { ListDocComponent } from './components/list-doc/list-doc.component';
import { MainFooterComponent } from './components/main-footer/main-footer.component';
import { MainHeaderComponent } from './components/main-header/main-header.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ChangePasswordComponent,
    DashboardComponent,
    ForgotPasswordComponent,
    LoginComponent,
    DocFormComponent,
    GridDocComponent,
    ListDocComponent,
    MainFooterComponent,
    MainHeaderComponent,
    NavBarComponent,
    SideMenuComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
