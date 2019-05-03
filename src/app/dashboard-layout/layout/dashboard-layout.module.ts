import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DashboardLayoutComponent } from './dashboard-layout.component';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { environment } from '../../../../src/environments/environment';
import { TooltipModule } from 'ngx-bootstrap';
import {AuthServiceConfig,FacebookLoginProvider,SocialLoginModule} from "angular5-social-login";
// Configs 
export function getAuthServiceConfigs() {
  let config = new AuthServiceConfig(
      [
        {
          id: FacebookLoginProvider.PROVIDER_ID,
	        provider: new FacebookLoginProvider(environment.FB_APPID.toString())
        }
      ]
  );
  return config;
}


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SocialLoginModule,
    TooltipModule.forRoot(),
    RouterModule.forChild([
      //   { path: '', component: DashboardComponent, data: { title: 'Dashboard' } }
    ])
  ],
  providers : [ 
    { provide: AuthServiceConfig, useFactory: getAuthServiceConfigs}
  ],
  declarations: [DashboardLayoutComponent,HeaderComponent,FooterComponent],
  exports: [DashboardLayoutComponent]
  
})
export class DashboardLayoutModule { }
