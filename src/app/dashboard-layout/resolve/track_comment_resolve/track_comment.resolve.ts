import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { ActivatedRouteSnapshot } from '@angular/router';
import { ArtistProfileService } from '../../artist_profile/artist_profile.service';
@Injectable()
export class TrackCommentResolve implements Resolve<any> {
  constructor(private ArtistProfileService: ArtistProfileService) {}

  resolve(route: ActivatedRouteSnapshot) {
    return this.ArtistProfileService.getAllTrackComment({track_id : route.paramMap.get('id')});
  }
}