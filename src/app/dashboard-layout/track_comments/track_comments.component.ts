import { Component, OnInit } from '@angular/core';
import { TrackCommentsService } from './track_comments.service';
import { ToastrService } from 'ngx-toastr';
import { environment } from '../../../environments/environment' ;
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-track-comments',
  templateUrl: './track_comments.component.html',
  styleUrls: []
})
export class TrackConmmentsComponent implements OnInit {
  artistdata : any = {};
  artistcomments : any = [];
  artist_img_url : any = environment.API_URL+environment.ARTIST_IMG;
  track_url : any = environment.API_URL+environment.ARTIST_TRACK;
  user_img_url : any = environment.API_URL+environment.USER_IMG;
  constructor(
    private TrackCommentsService : TrackCommentsService,
    private toastr: ToastrService,
    private route: ActivatedRoute
  ) {
    // this.artistdata = this.route.snapshot.data['artist'].artist;
    // this.artistcomments = this.route.snapshot.data['comments'].comment;
  }

  ngOnInit() {
    
  }

  
}
