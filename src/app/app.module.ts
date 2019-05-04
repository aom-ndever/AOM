import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
// import { ChartModule } from 'angular-highcharts';
import { ChartModule } from 'angular2-highcharts';
import { DashboardLayoutComponent } from './dashboard-layout/layout/dashboard-layout.component';
import { DataTablesModule } from 'angular-datatables';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LayoutModule } from './dashboard-layout/layout.module';
import { AdminLayoutModule } from './admin/admin_layout.module';
import { RegisterModule } from './register/register.module';
import { AdminLoginModule } from './admin_login/admin_login.module';
import { EamilVarificationModule } from './email_varification/email_varification.module';
import { ForgetPasswordModule } from './forget_password/forget_password.module';
import { AuthService } from './shared/auth.service';
import { MessageService } from './shared/message.service';
// import { NgxSpinnerModule } from 'ngx-spinner';
import { PLATFORM_ID, APP_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { HighchartsStatic } from 'angular2-highcharts/dist/HighchartsService';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'AOM' }),
    LayoutModule,
    RegisterModule,
    AdminLoginModule,
    EamilVarificationModule,
    AdminLayoutModule,
    ForgetPasswordModule,
    // NgxSpinnerModule,
    NgbModule.forRoot(),
    ChartModule.forRoot(require('highcharts/highstock'), require('highcharts/modules/drilldown')),
    DataTablesModule,
    RouterModule.forRoot([], { useHash: false })
  ],
  providers: [AuthService, MessageService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    @Inject(APP_ID) private appId: string) {
    const platform = isPlatformBrowser(platformId) ?
      'in the browser' : 'on the server';
    console.log(`Running ${platform} with appId=${appId}`);
  }
}
