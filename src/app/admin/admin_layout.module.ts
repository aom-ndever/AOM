import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { LightboxModule } from 'angular2-lightbox';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChartModule } from 'angular-highcharts';
import { BsDropdownModule, ModalModule  } from 'ngx-bootstrap';
import { DataTablesModule } from 'angular-datatables';
import { AuthService } from '../shared/auth.service';
import { AdminLayoutComponent } from './layout/admin_layout.component';
import { LayoutModule } from './layout/admin.layout.module';
import { HomeComponent } from './home/home.component';
import { AlertsComponent } from './alerts/alerts.component';
import { ArtistComponent } from './artist/artist.component';
import { UsersComponent } from './users/users.component';
import { ContestComponent } from './contest/contest.component';
import { HomeService } from './home/home.service';
import { ArtistService } from './artist/artist.service';
import { UsersService } from './users/users.service';
import { ContestService } from './contest/contest.service';

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
    BsDropdownModule.forRoot(),
    ModalModule.forRoot(),
    LightboxModule,
    ChartModule,
    DataTablesModule,
    RouterModule.forChild([
      {
        path: 'admin',
        component:AdminLayoutComponent, 
        children: [
          {path: '', component: HomeComponent,canActivate: [AuthService]},
          {path: 'alerts', component: AlertsComponent,canActivate: [AuthService]},
          {path: 'artist', component: ArtistComponent,canActivate: [AuthService]},
          {path: 'users', component: UsersComponent,canActivate: [AuthService]},
          {path: 'contest', component: ContestComponent,canActivate: [AuthService]}
        ]
      }
    ])
  ],
  declarations: [ 
                  HomeComponent,
                  AlertsComponent,
                  ArtistComponent,
                  UsersComponent,
                  ContestComponent
                ],
  providers : [
     AuthService, 
     HomeService,
     ArtistService,
     UsersService,
     ContestService
    ]
})
export class AdminLayoutModule { }