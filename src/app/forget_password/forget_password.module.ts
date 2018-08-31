import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { ForgetPasswordComponent } from './forget_password.component';
import { ForgetPasswordService } from './forget_password.service';
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
      { path: 'forgot_password/:type/:id', component: ForgetPasswordComponent },
      {path : "**", redirectTo : ''}
    ])
  ],
  declarations: [ForgetPasswordComponent],
  providers : [ForgetPasswordService]
})
export class ForgetPasswordModule { }
