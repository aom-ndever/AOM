import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { LightboxModule } from 'angular2-lightbox';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthService } from '../shared/auth.service';
import { AdminLayoutComponent } from './layout/admin_layout.component';
import { LayoutModule } from './layout/admin.layout.module';
import { HomeComponent } from './home/home.component';
import { AlertsComponent } from './alerts/alerts.component';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    LayoutModule,
    ToastrModule.forRoot(),
    LightboxModule,
    RouterModule.forChild([
      {
        path: 'admin',
        component:AdminLayoutComponent, 
        children: [
          {path: '', component: HomeComponent},
          {path: 'alerts', component: AlertsComponent}
        ]
      }
    ])
  ],
  declarations: [ 
                  HomeComponent,
                  AlertsComponent
                ],
  providers : [
     AuthService, 
    ]
})
export class AdminLayoutModule { }