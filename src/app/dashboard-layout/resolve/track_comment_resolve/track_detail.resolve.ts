import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { ActivatedRouteSnapshot } from '@angular/router';
import { ArtistProfileService } from '../../artist_profile/artist_profile.service';
@Injectable()
export class TrackDetailResolve implements Resolve<any> {
  constructor(private artistProfileService: ArtistProfileService) { }

  resolve(route: ActivatedRouteSnapshot) {
    return this.artistProfileService.getTrackById(route.paramMap.get('id'));
  }
}
