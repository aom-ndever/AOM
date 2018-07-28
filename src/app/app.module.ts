import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
// import { ChartModule } from 'angular-highcharts';
import { ChartModule } from 'angular2-highcharts';
import { DashboardLayoutComponent } from './dashboard-layout/layout/dashboard-layout.component';
import { DataTablesModule } from 'angular-datatables';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { LayoutModule } from './dashboard-layout/layout.module';
import { AdminLayoutModule } from './admin/admin_layout.module';
import { RegisterModule } from './register/register.module';
import { AdminLoginModule } from './admin_login/admin_login.module';
import { EamilVarificationModule } from './email_varification/email_varification.module';
import { ForgetPasswordModule } from './forget_password/forget_password.module';
import { AuthService } from './shared/auth.service';
import { MessageService } from './shared/message.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    LayoutModule,
    RegisterModule,
    AdminLoginModule,
    AdminLayoutModule,
    EamilVarificationModule,
    ForgetPasswordModule,
    NgbModule.forRoot(),
    ChartModule.forRoot(require('highcharts/highmaps')),
    DataTablesModule,
    RouterModule.forRoot([

      // { 
      //   path: '', 
      //   component: DashboardLayoutComponent,
      //   children: [
      //     { 
      //       path: '', 
      //       loadChildren: './dashboard-layout/dashboard/dashboard.module#DashboardModule', 
      //     }]
      // },
      // { 
      //   path: 'login', 
      //   loadChildren: './login/login.module#LoginModule',
      // }
    ], { useHash: false })
  ],
  providers: [AuthService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
