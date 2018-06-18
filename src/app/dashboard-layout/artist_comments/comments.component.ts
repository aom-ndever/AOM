import { Component, OnInit } from '@angular/core';
import { CommentsService } from './comments.service';
import { ToastrService } from 'ngx-toastr';
import { environment } from '../../../environments/environment' ;
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-artist-comments',
  templateUrl: './comments.component.html',
  styleUrls: []
})
export class ConmmentsComponent implements OnInit {
  artistdata : any = {};
  artistcomments : any = [];
  artist_img_url : any = environment.API_URL+environment.ARTIST_IMG;
  track_url : any = environment.API_URL+environment.ARTIST_TRACK;
  user_img_url : any = environment.API_URL+environment.USER_IMG;
  constructor(
    private CommentsService : CommentsService,
    private toastr: ToastrService,
    private route: ActivatedRoute
  ) {
    this.artistdata = this.route.snapshot.data['artist'].artist;
    this.artistcomments = this.route.snapshot.data['comments'].comment;
  }

  ngOnInit() {
    
  }

  
}
