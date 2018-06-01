import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardLayoutComponent } from './layout/dashboard-layout.component';
import { WhatsNewComponent } from './whatsnew/whatsnew.component';
import { ArtistComponent } from './artist/artist.component';
import { VoteComponent } from './vote/vote.component';
import { MyProfileComponent } from './my_profile/myProfile.component';
import { DashboardLayoutModule } from './layout/dashboard-layout.module';
import { CarouselModule } from '../shared/carousel/carousel.module';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http'
import { HeaderService } from './header/header.service';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthService } from '../shared/auth.service';

@NgModule({
  imports: [
    CommonModule,
    DashboardLayoutModule,
    CarouselModule,
    HttpModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    RouterModule.forChild([
      {
        path: '',
        component:DashboardLayoutComponent, 
        children: [
          {path: '', component: DashboardComponent},
          {path: 'whats-new', component: WhatsNewComponent},
          {path: 'artist', component: ArtistComponent},
          {path: 'vote', component: VoteComponent},
          {path: 'my-profile', component: MyProfileComponent, canActivate: [AuthService]}
        ]
      }
    ])
  ],
  declarations: [DashboardComponent, WhatsNewComponent, ArtistComponent, VoteComponent, MyProfileComponent],
  providers : [HeaderService, AuthService]
})
export class LayoutModule { }
