import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomepageComponent } from './welcomepage.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ForgotComponent } from './forgot/forgot.component';
import { MaterialModule } from '../modules/material/material.module';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { Routes,RouterModule } from "@angular/router";
import { DashboardComponent } from '../dashboard/dashboard.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';
import { LoggaurdGuard } from '../loggaurd.guard';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'forgot',component:ForgotComponent},
  {path:'dashboard',component:DashboardComponent,canActivate:[LoggaurdGuard]},
  {path:'**',component:PageNotFoundComponent}
];


@NgModule({
  declarations: [WelcomepageComponent, LoginComponent, SignupComponent, ForgotComponent,DashboardComponent],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,FormsModule,
    RouterModule.forChild(routes),
    FlexLayoutModule
  ]
})
export class WelcomepageModule { }
