import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SlimScroll } from 'angular-io-slimscroll';
import { HeaderComponent } from './header/header.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardLayoutComponent } from './layout/dashboard-layout.component';
import { WhatsNewComponent } from './whatsnew/whatsnew.component';
import { ArtistComponent } from './artist/artist.component';
import { ArtistProfileComponent } from './artist_profile/artist_profile.component';
import { VoteComponent } from './vote/vote.component';
import { MyProfileComponent } from './my_profile/myProfile.component';
import { MyMusicComponent } from './my_music/my_music.component';
import { DashboardLayoutModule } from './layout/dashboard-layout.module';
import { CarouselModule } from '../shared/carousel/carousel.module';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http'
import { HeaderService } from './header/header.service';
import { MyProfileService } from './my_profile/myProfile.service';
import { MyMusicService } from './my_music/my_music.service';
import { WhatsNewService } from './whatsnew/whatsnew.service';
import { ArtistService } from './artist/artist.service';
import { ArtistProfileService } from './artist_profile/artist_profile.service';
import { 
  ArtistProfileResolve,
  ArtistTrackResolve,
  ArtistMediaResolve,
  ArtistCommentsResolve,
  ArtistFollowerResolve,
  ArtistRankingResolve
} from './resolve/artist_resolve';
import { DashboardService } from './dashboard/dashboard.service';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { LightboxModule } from 'angular2-lightbox';
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
    LightboxModule,
    RouterModule.forChild([
      {
        path: '',
        component:DashboardLayoutComponent, 
        children: [
          {path: '', component: DashboardComponent},
          {path: 'whats-new', component: WhatsNewComponent},
          {path: 'artist', component: ArtistComponent},
          {path: 'artist_profile/:id', component: ArtistProfileComponent, resolve: { artist: ArtistProfileResolve, track : ArtistTrackResolve, media : ArtistMediaResolve, follower : ArtistFollowerResolve, comments : ArtistCommentsResolve, ranking : ArtistRankingResolve }},
          {path: 'vote', component: VoteComponent},
          {path: 'my-music', component: MyMusicComponent, canActivate: [AuthService]},
          {path: 'my-profile', component: MyProfileComponent, canActivate: [AuthService]}
        ]
      }
    ])
  ],
  declarations: [DashboardComponent, WhatsNewComponent, ArtistComponent, VoteComponent, MyProfileComponent, MyMusicComponent, SlimScroll, ArtistProfileComponent],
  providers : [HeaderService, AuthService, MyProfileService, MyMusicService, WhatsNewService, ArtistService,
     DashboardService,
     ArtistProfileService,
     ArtistProfileResolve,
     ArtistTrackResolve,
     ArtistMediaResolve,
     ArtistCommentsResolve,
     ArtistFollowerResolve,
     ArtistRankingResolve
    ]
})
export class LayoutModule { }