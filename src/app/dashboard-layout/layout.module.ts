import { NgModule } from '@angular/core';
import { ChartModule } from 'angular-highcharts';
import { AmChartsModule } from '@amcharts/amcharts3-angular';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DataTablesModule } from 'angular-datatables';
import { SlimScroll } from 'angular-io-slimscroll';
import { AutoCompleteModule, MultiSelectModule } from 'primeng/primeng';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardLayoutComponent } from './layout/dashboard-layout.component';
import { DashboardLayoutService } from './layout/dashboard-layout.service';
import { WhatsNewComponent } from './whatsnew/whatsnew.component';
import { ArtistComponent } from './artist/artist.component';
import { ConmmentsComponent } from './artist_comments/comments.component';
import { TrackConmmentsComponent } from './track_comments/track_comments.component';
import { ArtistTrackConmmentsComponent } from './artist_track_comments/artist_track_comments.component';
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
import { CommentsService } from './artist_comments/comments.service';
import { TrackCommentsService } from './track_comments/track_comments.service';
import { ArtistTrackCommentsService } from './artist_track_comments/artist_track_comments.service';
import { ArtistProfileService } from './artist_profile/artist_profile.service';
import { VoteService } from './vote/vote.service';
import {
  ArtistProfileResolve,
  ArtistTrackResolve,
  ArtistMediaResolve,
  ArtistCommentsResolve,
  ArtistFollowerResolve,
  ArtistRankingResolve
} from './resolve/artist_resolve';
import { TrackCommentResolve, TrackArtistProfileResolve, TrackDetailResolve } from './resolve/track_comment_resolve';
import { DashboardService } from './dashboard/dashboard.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { LightboxModule } from 'angular2-lightbox';
import { TimeAgoPipe } from 'time-ago-pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthService } from '../shared/auth.service';
import { ImageCropperModule } from 'ngx-image-cropper';

@NgModule({
  imports: [
    ImageCropperModule,
    CommonModule,
    DashboardLayoutModule,
    CarouselModule,
    HttpModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({ preventDuplicates: true }),
    ChartModule,
    AmChartsModule,
    LightboxModule,
    DataTablesModule,
    AutoCompleteModule,
    MultiSelectModule,
    LazyLoadImageModule,
    RouterModule.forChild([
      {
        path: '',
        component: DashboardLayoutComponent, data: { title: 'Dashboard' },
        children: [
          {
            path: '',
            component: DashboardComponent
          },
          {
            path: 'whats-new', component: WhatsNewComponent,
            data: { title: 'AOM | What\'s New', edit: false }
          },
          {
            path: 'artist', component: ArtistComponent,
            data: { title: 'AOM | Artist', edit: false }
          },
          {
            path: 'artist_track_comment/:id',
            component: ArtistTrackConmmentsComponent, canActivate: [AuthService],
            data: { title: 'AOM | Artist', edit: false }
          },
          {
            path: 'artist_profile/:artist_id/track/:id/comments',
            component: TrackConmmentsComponent,
            resolve: { comment: TrackCommentResolve, artist: TrackArtistProfileResolve, track: TrackDetailResolve },
            data: { title: 'AOM | Track comment', edit: false }
          },
          {
            path: 'artist_profile/:id/comments',
            component: ConmmentsComponent,
            resolve: { artist: ArtistProfileResolve, comments: ArtistCommentsResolve },
            data: { title: 'AOM | Comment', edit: false }
          },
          {
            path: 'artist_profile/:id',
            component: ArtistProfileComponent,
            resolve: {
              artist: ArtistProfileResolve,
              media: ArtistMediaResolve,
              follower: ArtistFollowerResolve,
              comments: ArtistCommentsResolve
            },
            data: { title: 'AOM | Profile', edit: false }
          },
          {
            path: 'vote',
            component: VoteComponent,
            data: { title: 'AOM | Vote', edit: false }
          },
          {
            path: 'my-music',
            component: MyMusicComponent,
            canActivate: [AuthService],
            data: { title: 'AOM | My music', edit: false }
          },
          {
            path: 'my-profile',
            component: MyProfileComponent,
            canActivate: [AuthService],
            data: { title: 'AOM | My profile', edit: false }
          }
        ]
      }
    ])
  ],
  declarations: [DashboardComponent,
    WhatsNewComponent,
    ArtistComponent,
    ConmmentsComponent,
    VoteComponent,
    MyProfileComponent,
    MyMusicComponent,
    SlimScroll,
    ArtistProfileComponent,
    TrackConmmentsComponent,
    ArtistTrackConmmentsComponent,
    TimeAgoPipe
  ],
  providers: [HeaderService,
    AuthService,
    MyProfileService,
    MyMusicService,
    WhatsNewService,
    ArtistService,
    CommentsService,
    DashboardService,
    ArtistTrackCommentsService,
    ArtistProfileService,
    ArtistProfileResolve,
    ArtistTrackResolve,
    ArtistMediaResolve,
    ArtistCommentsResolve,
    ArtistFollowerResolve,
    ArtistRankingResolve,
    TrackCommentsService,
    TrackCommentResolve,
    TrackArtistProfileResolve,
    TrackDetailResolve,
    DashboardLayoutService,
    VoteService
  ]
})
export class LayoutModule { }