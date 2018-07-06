import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { AdminLoginComponent } from './admin_login.component';
import { AdminLoginService } from './admin_login.service';
import { Http, HttpModule } from '@angular/http';
// import { HttpClientModule, HttpClient } from '@angular/common/http';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { ImageCropperModule } from 'ngx-image-cropper';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthService } from '../shared/auth.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule, 
    HttpModule,
    HttpClientModule, 
    ReactiveFormsModule,
    ImageCropperModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    RouterModule.forChild([
      { path: 'admin/login', component: AdminLoginComponent }
    ])
  ],
  declarations: [AdminLoginComponent],
  providers : [AdminLoginService]
})
export class AdminLoginModule { }
