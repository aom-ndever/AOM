import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { RegisterComponent } from './register.component';
import { RegisterService } from './register.service';
import { Http, HttpModule } from '@angular/http';
// import { HttpClientModule, HttpClient } from '@angular/common/http';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { ImageCropperModule } from 'ngx-image-cropper';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthService } from '../shared/auth.service';
import { environment } from '../../environments/environment';
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
    FormsModule, 
    HttpModule,
    HttpClientModule, 
    ReactiveFormsModule,
    SocialLoginModule,
    ImageCropperModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    RouterModule.forChild([
      { path: 'register', component: RegisterComponent }
    ])
  ],
  declarations: [RegisterComponent],
  providers : [RegisterService, { provide: AuthServiceConfig, useFactory: getAuthServiceConfigs}]
})
export class RegisterModule { }
