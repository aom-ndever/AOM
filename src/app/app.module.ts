import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ChartModule } from 'angular2-highcharts';
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
import { PLATFORM_ID, APP_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { NgxUiLoaderModule, NgxUiLoaderRouterModule } from 'ngx-ui-loader';
import { ToastrModule } from 'ngx-toastr';
import { ProgressSpinnerModule } from 'primeng/progressspinner';

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
    NgxUiLoaderModule.forRoot({
      'bgsColor': '#00ACC1',
      'bgsOpacity': 0.5,
      'bgsPosition': 'bottom-right',
      'bgsSize': 60,
      'bgsType': 'ball-spin-clockwise',
      'blur': 5,
      'fgsColor': '#d281df',
      'fgsPosition': 'center-center',
      'fgsSize': 60,
      'fgsType': 'rectangle-bounce-party',
      'gap': 24,
      'logoPosition': 'center-center',
      'logoSize': 120,
      'overlayColor': 'rgba(24,24,24,0.8)',
      'pbColor': '#d281df',
      'pbDirection': 'ltr',
      'pbThickness': 3,
      'hasProgressBar': true,
      'text': '',
      'textColor': '#FFFFFF',
      'textPosition': 'center-center',
      'threshold': 500
    }),
    // NgxUiLoaderRouterModule,
    ProgressSpinnerModule,
    ToastrModule.forRoot({
      progressBar: true,
      preventDuplicates: true,
      closeButton: true,
    }),
    NgbModule.forRoot(),
    // ChartModule.forRoot(require('highcharts/highstock'), require('highcharts/modules/drilldown')),
    ChartModule,
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
